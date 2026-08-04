import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

function requestHarness(fetch, overrides = {}) {
  const source = html.match(
    /var TK = 'benyany_pro_token';[\s\S]*?(?=function clientMessageId\()/,
  )?.[0];
  assert.ok(source, "request/session implementation was not found");
  const values = new Map();
  const context = {
    AbortController,
    fetch,
    localStorage: {
      removeItem(key) { values.delete(`local:${key}`); },
    },
    sessionStorage: {
      get length() { return [...values.keys()].filter((key) => !key.startsWith("local:")).length; },
      key(index) { return [...values.keys()].filter((key) => !key.startsWith("local:"))[index] ?? null; },
      getItem(key) { return values.get(key) ?? null; },
      setItem(key, value) { values.set(key, value); },
      removeItem(key) { values.delete(key); },
    },
    setTimeout,
    clearTimeout,
    showConsole(value) { context.consoleState = value; },
    ...overrides,
  };
  vm.runInNewContext(source, context);
  return { context, values };
}

test("authentication state is session-scoped and fully cleared", () => {
  assert.match(html, /sessionStorage\.getItem\(TK\)/);
  assert.match(html, /sessionStorage\.setItem\(TK,t\)/);
  assert.match(html, /sessionStorage\.removeItem\(UID\)/);
  assert.match(html, /sessionStorage\.getItem\(UID\)/);
  assert.doesNotMatch(html, /localStorage\.setItem\((?:TK|UID)/);
});

test("requests have a bounded timeout and malformed responses fail safely", () => {
  assert.match(html, /new AbortController\(\)/);
  assert.match(html, /controller\.abort\(\)/);
  assert.match(html, /The request timed out/);
  assert.match(html, /The server returned an invalid response/);
  assert.doesNotMatch(html, /catch\(e\)\{ d=\{message:t\}; \}/);
});

test("malformed success and error bodies never become raw user messages", async () => {
  const success = requestHarness(async () => ({
    ok: true,
    status: 200,
    async text() { return "<html>proxy failure</html>"; },
  }));
  await assert.rejects(
    success.context.call("https://example.test"),
    /invalid response/,
  );

  const failure = requestHarness(async () => ({
    ok: false,
    status: 502,
    async text() { return "<html>upstream failure</html>"; },
  }));
  await assert.rejects(
    failure.context.call("https://example.test"),
    /Request failed \(502\)/,
  );
});

test("an authenticated 401 clears both identity values", async () => {
  const harness = requestHarness(async () => ({
    ok: false,
    status: 401,
    async text() { return JSON.stringify({ message: "Expired" }); },
  }));
  harness.context.setToken("secret-token");
  harness.values.set("benyany_pro_uid", "user-1");
  harness.values.set("benyany_note_chat-1", "private customer note");
  harness.values.set("unrelated_session_key", "keep me");

  await assert.rejects(
    harness.context.call("https://example.test"),
    /Expired/,
  );

  assert.equal(harness.values.has("benyany_pro_token"), false);
  assert.equal(harness.values.has("benyany_pro_uid"), false);
  assert.equal(harness.values.has("benyany_note_chat-1"), false);
  assert.equal(harness.values.get("unrelated_session_key"), "keep me");
  assert.equal(harness.context.consoleState, false);
});

test("internal notes are session-only and cleared with authentication", () => {
  assert.match(html, /sessionStorage\.getItem\(noteKey\(c\)\)/);
  assert.match(html, /sessionStorage\.setItem\(noteKey\(c\), value\)/);
  assert.match(html, /key\.indexOf\(NOTE_PREFIX\)===0/);
  assert.doesNotMatch(html, /localStorage\.(?:getItem|setItem)\(noteKey\(c\)/);
  assert.match(html, /Saved for this session/);
});

test("an aborted request reports a timeout instead of a CORS error", async () => {
  const harness = requestHarness(
    async (_url, options) => {
      assert.equal(options.signal.aborted, true);
      throw Object.assign(new Error("aborted"), { name: "AbortError" });
    },
    {
      setTimeout(callback) { callback(); return 1; },
      clearTimeout() {},
    },
  );

  await assert.rejects(
    harness.context.call("https://example.test"),
    /request timed out/i,
  );
});

test("composer icon buttons expose accessible names", () => {
  assert.match(html, /id="mic" aria-label="Record a voice note"/);
  assert.match(html, /id="send" aria-label="Send message"/);
});
