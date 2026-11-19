# Cursor agent brief — free-diff-checker

Target: https://free-diff-checker.web-free.site
Repo name (wrangler `name`): `free-diff-checker`
English name: "Free Diff Checker". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **text and file** comparison tool. Compared text must never leave the browser. It is not a PDF comparer (Free PDF Converter already has that).

## Recommended base (use this)

- Repo: https://github.com/timoheimonen/diffvoid
- License: MIT (keep `LICENSE`, credit Timo Heimonen in the footer and on `/about`)
- Stars: 1
- Last commit: 15 Nov 2026, 17:43 CAT (Africa/Kigali) — `6aa7b89` on `main`
- Official demo: `https://diffvoid.com`
- Stack: vanilla HTML/CSS/JS in `public/` (no npm dependencies, no build). Same-origin Web Worker, Myers line diff, word-aware character highlights, moved-line detection, ignore whitespace/case, unified and side-by-side views, merge with undo, unified `.patch` export, local file drop (UTF-8 / UTF-16 / Windows-1252), virtualized rendering. Already has `public/index.html`, `privacy.html`, `tos.html`, `about.html`, `sitemap.xml`, `robots.txt`, and a `wrangler.jsonc` that serves `./public`. Tests: `npm test` / `node --test`.
- Cloudflare: yes — static assets / Workers with assets. Replace `wrangler.jsonc` with the `wrangler.toml` below (do not copy upstream `account_id` or observability settings).
- Verification (this box, 19 Nov 2026, CAT): cloned; `LICENSE` is a real MIT file (Copyright (c) 2026 Timo Heimonen). `node --test` — **128 tests passed**, 0 failed, in about 10 seconds.
- Local clone already on the box: `/workspace/repo-candidates/batch-2026-11-19/diffvoid`
- Why this one: MIT with a real `LICENSE` file, a complete static website already shaped for Cloudflare, an unusually solid tested diff engine, file upload, merge, and patch export, and no framework.

## Backup (MIT; complete site; heavier Next.js stack)

- Repo: https://github.com/rockbenben/text-diff
- License: MIT (LICENSE file, Copyright (c) 2026 rockbenben)
- Stars: 3
- Last commit: 20 Oct 2026, 13:22 CAT (Africa/Kigali) — `ce875aa` on `main`
- Official demo: `https://tools.newzone.top/en/text-diff`
- Stack: Next.js + Ant Design + `diff` + many UI language packs. Feature-complete (side-by-side and unified, first-difference jump, CSV/JSON-aware compare, `.patch` export). If you use this base, you must prerender every public page (no bare SPA fallback), keep the site English-only, and avoid pulling in the rest of the newzone tools suite.
- Local clone: `/workspace/repo-candidates/batch-2026-11-19/text-diff`

`chizkiyahu/TextDiff` (MIT, Copyright (c) 2023 Chizkiyahu, single `index.html`, demo `https://chizkiyahu.github.io/TextDiff/`, last commit 13 Feb 2025 — `3269d2c`) is a simple side-by-side tool. Use it only if both bases above fail; you would have to add file upload, a clearer line diff, and the SEO pages.

## Do not use these

- `soumendrak/diff-checker` — no license file on the repo (`license` is empty in the GitHub API).
- Server-side diff APIs, and Git hosting UIs (they are not a standalone compare-two-texts website).

## What to build on top of timoheimonen/diffvoid

1. Import the base into this repo, keep the MIT license, and credit Timo Heimonen. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them). Do not turn the site into a promo for diffvoid.com; a short credit is enough. Replace or rewrite the existing legal pages so they are for this site, not the upstream domain.
2. Rebrand to "Free Diff Checker". English primary. No FR/SW translations of the site.
3. Keep comparison 100% client-side. No APIs, no keys, no accounts. Compared text must not be sent to a server (including for “share a diff” links). Keep side-by-side and unified views, ignore-whitespace and ignore-case, file drop, change navigation, merge, and `.patch` / copy-diff export.
4. Adsterra only, never AdSense. Use **only** the codes in `/workspace/ads-free-diff-checker.md` (that file will be filled in before you start; do not invent codes). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `atOptions {key, format:'iframe', height, width, params:{}}`, `src https://bauval.org/22/<key>`, `public/ads.json`. Never set COEP/COOP headers. Ads must not break the editors, the diff view, or copy/download.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-diff-checker.web-free.site`; English how-to pages, at least `/how-to-compare-two-text-files` and `/how-to-make-a-unified-diff-patch`; prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-diff-checker.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site`.
7. On every prerendered HTML page, before `</body>`, add:
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the four other sites in this batch. Show **Free Diff Checker** as bold text, not a self-link.
     - **Documents & writing:** Free Word Counter, Free PDF Converter, Free CV Maker, Free Invoice Generator, Free Typing Test, Free Signature Generator, and Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/`).
     - **Images & codes:** Free QR Code Creator, Free Image Resizer, Free Image to Text, Free Background Remover, Free Image Compressor.
     - **Calculators & currency:** Free Online Calculator, Free Currency Converter, Free Unit Converter, Free Loan Calculator, Free Age Calculator, Free Percentage Calculator, Free BMI Calculator.
     - **Text & SEO:** Free AI Humanizer, Free SEO Generator, Free Backlink Generator, Free JSON Formatter, Free Text to Speech, Free Speech to Text, and **Free Diff Checker**.
     - **Audio & video:** Free Video to MP3 Converter, Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/`), and Free Screen Recorder (`https://free-screen-recorder.web-free.site/`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/`).
     - **Test data:** Free Fake Address Generator, Free Fake Name Generator.
     - **Security & passwords:** Free Password Generator.
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-diff-checker"`, `[assets]` pointing at `public`. Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-diff-checker.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box.
9. Test: run `node --test` and report the result; in the UI, paste two short texts that differ, confirm added/removed/changed lines; drop two text files; export a `.patch` (or copy the unified diff) and check it; try ignore-whitespace; check mobile at 390px; confirm nothing is uploaded; fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Read `/workspace/ads-free-diff-checker.md` and use only the codes in that file. It will be filled in separately, before this agent is launched. Do not invent Adsterra keys, URLs, or site IDs.


---
NOTE: any /workspace/... box path mentioned above is NOT accessible to you; everything you need is inline below. Clone the base repo from GitHub yourself.

# COMMON RULES (contents of agent-brief-common.md)
COMMON RULES (from Gentil, mandatory):
- Start from an existing, usable open-source repository: search GitHub, then compare stars, activity, license (MIT/Apache/BSD preferred; avoid AGPL/GPL unless nothing else fits) and code quality. Import its code into this repo, keep its LICENSE, and credit it in the footer and on /about.
- Do NOT write the tool from scratch. If no suitable open-source base exists, STOP before coding and report the 2-3 best candidates and why they fail. Gentil must approve any from-scratch work, and he only allows it for one or two simple pages.
- Keep the model you were launched with. Do not switch models.
- Must be hostable on Cloudflare Workers with static assets (free plan). No paid APIs, no server costs, no API keys. Client-side processing preferred.
- Monetization: Adsterra only, never AdSense. The real codes for this site are in the attached adsterra-new-codes.md, in this site's section (use only that section). Integrate all 10 units following the free-invoice-generator pattern: Popunder and Social Bar in the HTML; 728x90 at the top; sidebar 160x600 and 160x300; mid-page 728x90, 468x60 and Native; 300x250; sticky 320x50 on mobile; Smartlink as a discreet link. Banners go in isolated iframes with atOptions {key, format:'iframe', height, width, params:{}} and src https://bauval.org/22/<key>. Also write public/ads.json with all the codes. Never set COEP/COOP headers. Ads must not break the tool.
- SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical and OG tags; JSON-LD (WebApplication + FAQPage); hreflang en/fr; sitemap.xml and robots.txt using the site's own URL; a long-tail keyword page or two; FAQ and how-to content; /privacy, /terms, /about and /contact pages (prerendered); plus a French landing page.
- Name: "Free <Tool>". English primary.
- Add wrangler.toml with name = <repo name> and [assets] pointing to the build output. Do NOT deploy: Gentil's box deploys it.
- Test: build, run it locally, exercise the main feature in a browser, check mobile at 390px, and fix bugs. Critique your own result and fix the issues you find.
- Push everything to main of this repo.
- Final report: the base repo and its license, the pages, the tests and their results, the remaining caveats, and the commit hash.


# ADSTERRA CODES FOR THIS SITE (use only these)
Code formats (KEY = the 32-char hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-diff-checker.web-free.site — site ID 6213252
Popunder f6ba4b22631d0daee5daabeea0c1d143
Native Banner eef038c5968f116f5d074b877fec828e
Smartlink fa1ccfeddbd34e0b655abef91266a7c6
Social Bar 82dc497890847b316dfb78ed935ea20e
468x60 b18b6f3f2a64238dd00dc0fee9eb82cb
160x300 4de44b14d2a2769b94e21e86c3b99645
320x50 b20eb9a379bdd14c101ddbeb28263eda
300x250 901294c463afbe28c4b1802c03953942
160x600 55565bf9d5719863ef55765dd713c51e
728x90 6f957697df2e22ac814cb68621698576

## 