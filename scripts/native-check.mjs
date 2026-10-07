import {chromium,expect} from '@playwright/test';import assert from 'node:assert/strict';import http from 'node:http';
const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(`<html><head><title>${req.url==='/two'?'Second page':'Ether test page'}</title></head><body><h1>Native Chromium is working</h1><a href="/two">Second page</a><a href="/two" target="_blank">New window</a></body></html>`)}).listen(18731,'127.0.0.1');
const browser=await chromium.connectOverCDP('http://127.0.0.1:9227');const context=browser.contexts()[0];
const ui=browser.contexts().flatMap(c=>c.pages()).find(p=>p.url().includes('tauri.localhost'));assert.ok(ui,'native UI exists');ui.setDefaultTimeout(15000);
const enter=async(url)=>{await ui.getByLabel('Address or search').fill(url);await ui.getByLabel('Address or search').press('Enter');};
await ui.getByRole('button',{name:'Home',exact:true}).click();await enter('http://127.0.0.1:18731/one');
await new Promise(r=>setTimeout(r,1500));const connection2=await chromium.connectOverCDP('http://127.0.0.1:9227');let web=connection2.contexts().flatMap(c=>c.pages()).find(p=>p.url().includes('18731'));
assert.ok(web,'native child tab exists');await web.getByRole('heading',{name:'Native Chromium is working'}).waitFor();
await ui.getByRole('tab',{name:'Ether test page'}).waitFor();
await web.evaluate(()=>localStorage.setItem('ether-native-test','profile-one'));
await web.getByRole('link',{name:'Second page',exact:true}).click();await expect(ui.getByLabel('Address or search')).toHaveValue('http://127.0.0.1:18731/two');
await ui.getByRole('button',{name:'Back',exact:true}).click();await expect(ui.getByLabel('Address or search')).toHaveValue('http://127.0.0.1:18731/one');
await ui.getByRole('button',{name:'Forward',exact:true}).click();await expect(ui.getByLabel('Address or search')).toHaveValue('http://127.0.0.1:18731/two');
await ui.getByRole('button',{name:'Reload',exact:true}).click();await web.getByRole('heading').waitFor();
await ui.getByRole('button',{name:'Themes',exact:true}).click();await ui.getByRole('heading',{name:'A different point of view'}).waitFor();await ui.getByRole('button',{name:'Close settings'}).click();
await ui.getByRole('button',{name:'Profiles',exact:true}).click();await ui.getByRole('button',{name:'New profile',exact:true}).click();
await ui.getByRole('button',{name:'Home',exact:true}).click();await enter('http://127.0.0.1:18731/one');
await new Promise(r=>setTimeout(r,1500));const connection3=await chromium.connectOverCDP('http://127.0.0.1:9227');let second=connection3.contexts().flatMap(c=>c.pages()).find(p=>p.url().includes('18731'));
assert.ok(second,'second profile tab exists');await second.getByRole('heading').waitFor();assert.equal(await second.evaluate(()=>localStorage.getItem('ether-native-test')),null,'profiles isolate local storage');
await ui.getByRole('button',{name:'Home',exact:true}).click();await ui.getByRole('heading',{name:'A world waiting to be discovered.'}).waitFor();
await ui.screenshot({path:'test-results/native-home.png'});
console.log('PASS: embedded Chromium loads; title and URL synchronization; back, forward, reload; settings; profile storage isolation; home.');
await connection3.close();await connection2.close();await browser.close();server.close();



