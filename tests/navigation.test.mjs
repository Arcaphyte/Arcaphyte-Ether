import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveAddress, validTemplate, ENGINES } from "../src/navigation.mjs";
test("search encodes user input without changing URL parameters", () =>
  assert.equal(
    resolveAddress("cats & dogs", ENGINES[0].template),
    "https://duckduckgo.com/?q=cats%20%26%20dogs",
  ));
test("addresses and explicit HTTP work", () => {
  assert.equal(
    resolveAddress("example.com/path", ENGINES[0].template),
    "https://example.com/path",
  );
  assert.equal(
    resolveAddress("http://localhost:8080", ENGINES[0].template),
    "http://localhost:8080/",
  );
});
test("dangerous protocols and credentials are rejected", () => {
  for (const s of [
    "javascript:alert(1)",
    "file:///etc/passwd",
    "data:text/html,hello",
    "https://name:secret@example.com",
  ])
    assert.throws(() => resolveAddress(s, ENGINES[0].template));
});
test("custom engine templates require HTTPS and a placeholder", () => {
  assert.ok(validTemplate("https://example.com/search?q={query}"));
  assert.ok(!validTemplate("http://example.com/{query}"));
  assert.ok(!validTemplate("https://example.com/search"));
});
