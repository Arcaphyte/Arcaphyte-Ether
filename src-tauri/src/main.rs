#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{Emitter, Manager, Webview, WebviewBuilder, WebviewUrl, LogicalPosition, LogicalSize, Rect};
use tauri::webview::{NewWindowResponse, PageLoadEvent};
use serde_json::{json, Value};

fn trusted(caller: &Webview) -> Result<(), String> {
    if caller.label() == "main" { Ok(()) } else { Err("Browser pages cannot control the application".into()) }
}
fn valid_id(id: &str) -> Result<(), String> {
    if id.len() <= 64 && !id.is_empty() && id.bytes().all(|c| c.is_ascii_alphanumeric() || c == b'-') { Ok(()) } else { Err("Invalid identifier".into()) }
}
fn web_url(value: &str) -> Result<tauri::Url, String> {
    let url = tauri::Url::parse(value).map_err(|e| e.to_string())?;
    if !["https", "http"].contains(&url.scheme()) || !url.username().is_empty() || url.password().is_some() { return Err("Only HTTP and HTTPS websites are supported".into()); }
    if matches!(url.host_str(), Some("tauri.localhost" | "ipc.localhost")) { return Err("Reserved application address".into()); }
    Ok(url)
}
fn update(app: tauri::AppHandle, payload: Value) {
    // CEF callbacks run on its UI thread. Emitting there would deadlock.
    tauri::async_runtime::spawn(async move { let _ = app.emit_to("main", "browser-update", payload); });
}
fn bounds(x:f64,y:f64,width:f64,height:f64)->Rect { Rect {position:LogicalPosition::new(x.max(0.),y.max(0.)).into(),size:LogicalSize::new(width.max(1.),height.max(1.)).into()} }
fn find(app:&tauri::AppHandle,id:&str)->Result<Webview,String>{valid_id(id)?;app.get_webview(&format!("tab-{id}")).ok_or("Tab not found".into())}
#[tauri::command]
async fn create_tab(caller:Webview,app:tauri::AppHandle,id:String,profile:String,url:String,x:f64,y:f64,width:f64,height:f64)->Result<(),String>{
 trusted(&caller)?;valid_id(&id)?;valid_id(&profile)?;let url=web_url(&url)?;
 let label=format!("tab-{id}");if app.get_webview(&label).is_some(){return Ok(())}
 let nav_app=app.clone();let nav_id=id.clone();let title_app=app.clone();let title_id=id.clone();let load_app=app.clone();let load_id=id.clone();let popup_app=app.clone();let popup_id=id.clone();
 let directory=app.path().app_cache_dir().map_err(|e|e.to_string())?.join("cef").join("profiles").join(profile);
 std::fs::create_dir_all(&directory).map_err(|e|e.to_string())?;
 let builder=WebviewBuilder::new(label,WebviewUrl::External(url))
 .bounds(bounds(x,y,width,height)).data_directory(directory)
 .on_navigation(move|url|{if web_url(url.as_str()).is_err(){return false}update(nav_app.clone(),json!({"id":nav_id,"url":url.as_str()}));true})
 .on_document_title_changed(move|_,title|update(title_app.clone(),json!({"id":title_id,"title":title})))
 .on_page_load(move|_,payload|update(load_app.clone(),json!({"id":load_id,"url":payload.url().as_str(),"loading":matches!(payload.event(),PageLoadEvent::Started)})))
 .on_new_window(move|url,_|{if web_url(url.as_str()).is_ok(){update(popup_app.clone(),json!({"id":popup_id,"popup":url.as_str()}))}NewWindowResponse::Deny});
 app.get_window("main").ok_or("Main window unavailable")?.add_child(builder).map_err(|e|e.to_string())?;Ok(())
}
#[tauri::command]
async fn show_tab(caller:Webview,app:tauri::AppHandle,id:String,x:f64,y:f64,width:f64,height:f64)->Result<(),String>{
 trusted(&caller)?;for(label,webview)in app.webviews(){if label.starts_with("tab-"){if label==format!("tab-{id}"){webview.set_bounds(bounds(x,y,width,height)).map_err(|e|e.to_string())?;webview.show().map_err(|e|e.to_string())?;}else{webview.hide().map_err(|e|e.to_string())?;}}}Ok(())
}
#[tauri::command]
async fn resize_tabs(caller:Webview,app:tauri::AppHandle,x:f64,y:f64,width:f64,height:f64)->Result<(),String>{trusted(&caller)?;for(label,w)in app.webviews(){if label.starts_with("tab-"){w.set_bounds(bounds(x,y,width,height)).map_err(|e|e.to_string())?;}}Ok(())}
#[tauri::command]
async fn navigate(caller:Webview,app:tauri::AppHandle,id:String,url:String)->Result<(),String>{trusted(&caller)?;find(&app,&id)?.navigate(web_url(&url)?).map_err(|e|e.to_string())}
#[tauri::command]
async fn close_tab(caller:Webview,app:tauri::AppHandle,id:String)->Result<(),String>{trusted(&caller)?;find(&app,&id)?.close().map_err(|e|e.to_string())}
#[tauri::command]
async fn tab_action(caller:Webview,app:tauri::AppHandle,id:String,action:String)->Result<(),String>{trusted(&caller)?;let w=find(&app,&id)?;match action.as_str(){"back"=>w.go_back(),"forward"=>w.go_forward(),"reload"=>w.reload(),_=>return Err("Unknown browser action".into())}.map_err(|e|e.to_string())}
#[tauri_runtime_cef::cef_entry_point]
fn main(){
 tauri::Builder::default().runtime(tauri_runtime_cef::Cef::default())
 .invoke_handler(tauri::generate_handler![create_tab,show_tab,resize_tabs,navigate,close_tab,tab_action])
 .run(tauri::generate_context!()).expect("Could not start Arcaphyte Ether");
}
#[cfg(test)]
mod tests {use super::*;
 #[test]fn rejects_privileged_urls(){for value in ["file:///etc/passwd","javascript:alert(1)","http://tauri.localhost","https://user:pass@example.com"]{assert!(web_url(value).is_err());}assert!(web_url("https://example.com").is_ok());}
 #[test]fn rejects_path_traversal(){assert!(valid_id("../../main").is_err());assert!(valid_id("abc-123").is_ok());}
}
