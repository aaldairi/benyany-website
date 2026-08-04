# Benyany marketing site

Static marketing site for **Benyany** — the messaging layer for commerce in
Bahrain. No build step, no framework, no dependencies: plain HTML/CSS/JS,
deployable to any static host.

Implemented from the Claude Design project
`cccd5b5d-26a3-4772-a596-e620f727f746`, file **`Benyany Site.dc.html`**, on
2026-07-28.

```
benyany-website/
  index.html              the landing page — Arabic in the markup
  css/fonts.css           14 @font-face rules, extracted from the export
  css/site.css            the design system and all section styles
  js/main.js              AR + EN copy, language switch, FAQ, mobile nav
  assets/
    img/benyany-logo.png          header mark (navy, on light)
    img/benyany-mark-yellow.png   footer mark (yellow, on navy)
    fonts/poppins-{200..800}-{latin,latin-ext}.woff2
```

## What was implemented, and what was not

The export is **not a site** — it is a comparison canvas. Its own header reads
*"Turn 1 · two directions"*, and it contains two complete landing pages:

| | Direction | Character |
|---|---|---|
| `#1a` | **Ledger** | Editorial, content-first. Paper canvas, the record is the story. |
| `#1b` | Console | Product-led, dark hero. The screen does the arguing. |

**1a (Ledger) is what this repo implements.** 1b is not built.

The export composes a **two-sided** page — for businesses *and* for customers —
and it is implemented that way: both hero path cards, both hero CTAs, all four
nav items, and all three price plans including the free **Customer** plan.

There is no pricing page and no privacy/terms page here. The export contains a
pricing *section* (three plans, real BHD figures) and no legal pages at all.
Writing those would mean inventing content the design does not supply.

## Arabic is primary, not a translation

The export's state is `{ lang: 'ar' }` and العربية is the first tab, so:

- `index.html` ships **Arabic** in the markup, with `dir="rtl"`, so the page is
  complete with JavaScript off and for crawlers.
- `js/main.js` holds both locales in `COPY.ar` / `COPY.en`, carried verbatim
  from the export's `COPY` field. Switching language rewrites every element
  carrying `data-t="…"`, where the value is a dotted path into the dictionary
  (`nav.0` → `t.nav[0]`).
- **If you edit Arabic copy, edit it in both `index.html` and `COPY.ar`** or the
  two drift the moment someone toggles the language.

RTL/LTR is handled with logical properties (`inset-inline-start`,
`padding-inline`, `margin-inline`), so the flip is CSS rather than a second
stylesheet. Two things stay in JavaScript because they are not styling:

- the arrow glyph — the export computes `rtl ? 'arrow_back' : 'arrow_forward'`
- `document.title`

The Maya glow needed neither: the export's `mayaGlowSide: rtl ? 'right' : 'left'`
is inline-start in both directions, so it is one `inset-inline-start` rule.

## Where the implementation diverges from the export

Reported in full, per repo policy. Nothing below is an accident.

**Excluded as design-tool furniture** (the canvas, not the page):

1. The `.page` frame — `width:1280px`, `border-radius:22px`,
   `box-shadow:0 30px 90px rgba(16,16,20,.20)` — and the `#E7E5DE` canvas
   behind it. The site is full-bleed.
2. The `Turn 1 · two directions` label, the `1a` badge, and the direction's
   title and one-line description.

**Deliberate changes:**

3. **The language switch moved into the header.** In the export it floats above
   the canvas, outside both pages, because it drives the whole comparison. A
   real site has nowhere to put that, so it sits in the header. Visual spec is
   unchanged: white container, 5px padding, 34px pills, navy active state.
4. **The header is `position: sticky`.** The export's header scrolls away — it
   is a flat mock. This is new behaviour, not in the source.
5. **Responsive breakpoints at 1180 / 1000 / 760 / 430px.** The export is a
   fixed 1280px canvas and has none. **At viewports ≥ 1280 the render is 1:1
   with the export** — the content column is 1168px (1280 − 2 × 56 padding) and
   every spacing, colour and type value is the export's own. Below 1280 the type
   scale steps down (h1 76 → 64 → 44px) and columns collapse.
6. **Accessibility additions:** a skip link, visible focus rings, `aria-expanded`
   / `aria-controls` on the FAQ, and `aria-hidden` on decorative icons. The FAQ
   row is a real `<button>` rather than the export's `div[role="button"]`; the
   toggle behaviour is identical.
7. **Anchor targets** (`#for-business`, `#for-customers`, `#pricing`, `#trust`,
   `#start`). The export's nav items are non-navigating spans.
8. **Destination handling.** Product/footer navigation uses real page anchors,
   sign-in opens the Pro console, contact opens the published support
   email, and the four download badges use the authoritative Benyany/Benyany
   Pro App Store and Google Play records. Careers, blog and legal destinations
   remain visibly marked unavailable because no approved pages or copy were
   supplied; they are text, not deceptive links.

## Domains

Two hostnames, one job each:

| Host | Serves | Where from |
|---|---|---|
| `benyanypro.com` | **this marketing site** | GitHub Pages, this repo |
| `app.benyanypro.com` | the Pro console (sign-in target) | not yet pointed — see below |

Sign-in on this site links to `https://app.benyanypro.com`. **That hostname has
no DNS records yet**, so the link is dead until a CNAME is added at GoDaddy
pointing it at whichever host serves the console.

`benyanypro.com` itself was briefly repointed to an AWS host serving the console
at `/en`. For this repo to serve the domain again, the apex must resolve to
GitHub Pages: `185.199.108-111.153` (A) and `2606:50c0:800{0..3}::153` (AAAA).

**Carried as-is, on purpose:**

9. **Testimonials are placeholders.** The export's code comment is explicit —
   *"Deliberately unfilled: no real testimonials were supplied, so none are
   invented"* — and the page carries a visible chip saying so. Grey stars and
   skeleton attribution rows are the design, not a loading state. Replace them
   only with attributable quotes.
10. **Material Symbols Rounded loads from the Google Fonts CDN**, exactly as the
    export's `<helmet>` does. The standalone bundle carries the full variable
    icon font at **5.3 MB**; self-hosting that would cost far more than the CDN.
    This is the site's only external request.
11. **Poppins is self-hosted** from the export's own bundled `woff2` payloads —
    14 faces, weights 200–800, `latin` and `latin-ext`, unicode-ranges
    unmodified. The export ships **no Arabic webfont**: Arabic falls through the
    export's own stack to `SF Arabic` / `SF Pro Arabic` / `Geeza Pro`. On
    non-Apple platforms Arabic will render in a system fallback that is not
    Poppins-matched. Worth a decision before launch.

## Where the assets came from

`Benyany Site.html` (the standalone export) embeds every asset in a
`<script type="__bundler/manifest">` JSON block, keyed by UUID, with the
`@font-face` rules referencing those UUIDs. The images and the 14 Poppins faces
here were decoded from that manifest and renamed from the matching
`font-family` / `font-weight` / `unicode-range`, so they are byte-identical to
the design project's `assets/`.

## Running it

Any static server. There is nothing to build.

```bash
python3 -m http.server 8792
```

Then open <http://localhost:8792/>.

## Verified

- Renders at 1440×2400 and 390×1600, in both `rtl` and `ltr`.
- Element counts match the export exactly: 4 steps, 2 phones with 4 rows each,
  6 features, 3 trust rows, 3 plans (1 featured), 3 placeholder quotes, 5 FAQs,
  2 store badges, 3 footer columns, 3 Maya chips.
- Language switch flips `dir`, `lang`, `document.title`, every `data-t` slot and
  the arrow glyph; the FAQ opens and closes and resets on language change.

Not verified: real devices, Safari, and any screen reader.
