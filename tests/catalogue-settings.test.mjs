import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("Settings owns the business catalogue and never routes it through Browse", () => {
  assert.match(html, /aria-label="Settings and catalogue"/);
  assert.match(html, /Items/);
  assert.match(html, /Services/);
  assert.match(html, /Contractors/);
  assert.match(html, /Store rules/);
  assert.doesNotMatch(html, /CAT\.kind[\s\S]{0,200}Browse/);
});

test("catalogue actions use authenticated production endpoints with no demo rows", () => {
  for (const endpoint of [
    "/inventory-product/get",
    "/inventory-product/create",
    "/inventory-product/bulk",
    "/contractor-crews",
    "/business-commerce-settings",
    "/catalogue-imports/check",
  ]) assert.match(html, new RegExp(endpoint.replaceAll("/", "\\/")));
  assert.match(html, /Authorization.*Bearer/);
  assert.match(html, /No demo records are used/);
});

test("items, services, contractors, import and booking expose working controls", () => {
  assert.match(html, /data-bulk="price"/);
  assert.match(html, /data-bulk="publish"/);
  assert.match(html, /data-bulk="export"/);
  assert.match(html, /accept="\.csv,text\/csv"/);
  assert.match(html, /Check & hold/);
  assert.match(html, /Holds last 48 hours/);
  assert.match(html, /certificateExpiry/);
  assert.match(html, /name="certificateFile" type="file"/);
  assert.match(html, /name="coverFile" type="file"/);
  assert.match(html, /\/common\/upload-media/);
});

test("offline catalogue remains readable but never queues writes", () => {
  assert.match(html, /benyany_catalogue_cache_/);
  assert.match(html, /Offline · showing last sync/);
  assert.match(html, /Saving, importing and booking are unavailable/);
  assert.doesNotMatch(html, /offlineQueue|queueWrite|pendingWrites/);
});

test("optimistic conflicts preserve edits and name the save failure", () => {
  assert.match(html, /error\.status===409/);
  assert.match(html, /Not saved — this record changed elsewhere\. Your edits are still here\./);
});

test("catalogue paging is keyset-based on both catalogue types", () => {
  assert.match(html, /limit=25/);
  assert.match(html, /cursor=.*encodeURIComponent/);
  assert.match(html, /payload\.nextCursor/);
  assert.match(html, /payload\.hasMore/);
  assert.match(html, /Load next 25/);
  assert.doesNotMatch(html, /contractors'\) return EP\.contractors\+'\?limit=100&page=1/);
});

test("CSV import exposes all three required steps and remembered mapping", () => {
  assert.match(html, /Step 2 of 3 · Map columns/);
  assert.match(html, /Step 3 of 3 · Check before importing/);
  assert.match(html, /importMapping: API \+ '\/catalogue-imports\/mapping'/);
  assert.match(html, /data-import-source/);
  assert.match(html, /Not imported/);
  assert.match(html, /Nothing partially imports/);
});
