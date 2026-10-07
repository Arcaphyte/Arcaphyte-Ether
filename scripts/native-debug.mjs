import { chromium } from "@playwright/test";
const b = await chromium.connectOverCDP("http://127.0.0.1:9227");
for (const c of b.contexts())
  for (const p of c.pages()) {
    console.log("PAGE", p.url());
    console.log((await p.locator("body").innerText()).slice(0, 2200));
    await p.screenshot({ path: "test-results/native-debug.png" });
  }
await b.close();
