# Arcaphyte Ether

A free desktop browser framework from Arcaphyte. React + TypeScript, Rust, Tauri 3 alpha, and bundled Chromium (CEF). No Arcaphyte sign-in, activation, or license key.

## Features

- Native Chromium web tabs, address/search bar, back/forward/reload, popup-to-tab handling.
- Local named profiles with custom uploaded icons and separate Chromium data directories.
- DuckDuckGo, Google, Bing, Brave, Ecosia, or a custom HTTPS search template.
- Weaver's theme presets, accessibility palettes, typography pairings, and saved custom themes.
- Per-profile bookmarks and settings, original Tailwind sky crystal branding.

## Preview limitations

This is an early development framework, not a hardened daily browser. Tauri 3 and its CEF runtime are alpha. The upstream Windows CEF runtime currently runs without Chromium process sandboxing. Do not use this preview for sensitive browsing or untrusted sites. Native permissions, browser extensions, sync, automatic updates, a download manager, history UI, and a password manager are not implemented. Local profiles are organizational and do not protect data from other users of the same OS account. Settings live in local browser storage; cookies/cache live beneath the application's CEF cache directory.

Website content receives no Tauri capability grants. Native browser commands verify that only the local main interface is their caller, validate identifiers, and allow only HTTP(S) navigation. Never disable certificate verification or web security.

## Development

Use Node 24, Rust stable (1.95+), and the platform's native compiler. CMake and Ninja are required for CEF on Windows and macOS. The first native build downloads about 1 GB of CEF. On Linux install GTK 4, NSS, ALSA, X11, GBM development packages and patchelf (see workflow).

```
npm ci
npm test
npm run dev
npm run tauri dev
npm run tauri build
```

`npm run dev` previews the UI; native browsing requires the desktop app. Ctrl/Cmd+L focuses the address bar; Ctrl/Cmd+T creates a tab and Ctrl/Cmd+W closes it while the application interface has focus.

## Distribution

GitHub Actions builds Windows NSIS, Apple Silicon macOS DMG, and x64 Linux DEB/RPM/AppImage. Builds are unsigned until signing credentials are supplied; macOS is not notarized. CEF and other dependencies retain their own licenses; this repository does not grant a separate open-source license to Arcaphyte branding or application code.

Brand: https://www.arcaphyte.com
