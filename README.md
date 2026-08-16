# The Fiddle — site files

Personal projects site for Lisa K. Johnson: music, homesteading, and writing,
organized under four sections — Build, Grow, Think, Make.

Kept deliberately separate from the professional site (johnsolk.github.io).

## What's here

- `index.html` — home page: logo, tagline, links to the four sections
- `build.html`, `grow.html`, `think.html`, `make.html` — stub landing pages
  for each section (currently empty — "Nothing posted here yet")
- `about.html` — stub, content not yet finalized
- `assets/fiddle_heart.png` — the logo (fiddlehead fern / cello scroll /
  heart mark, based on Lisa's own reference drawing)

The HTML/CSS/assets are still plain and hand-edited — no framework. Vite is
used only as a build/dev tool: `npm run dev` serves the pages with live
reload, `npm run build` bundles everything into `dist/` with asset hashing
and rewrites paths for the `/fiddle/` subpath.

## Deploying to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):
on every push to `main`, it runs `npm run build` and publishes the `dist/`
output to the `gh-pages` branch (using `peaceiris/actions-gh-pages`).

One-time setup after the first push:

1. Push this repo to GitHub (suggested name: `fiddle`).
2. Wait for the "Deploy to gh-pages" Action to finish — it creates the
   `gh-pages` branch.
3. In the repo, go to **Settings → Pages**, and set the source branch to
   `gh-pages`, root folder.
4. The site will be live in a minute or two at:
   `https://johnsolk.github.io/fiddle/`
   (a project page, since only one repo per account — the existing
   `johnsolk.github.io` — can be the root site). `vite.config.js` sets
   `base: '/fiddle/'` so built asset URLs resolve correctly under that path.

To build/preview locally: `npm install`, then `npm run dev` (or
`npm run build && npm run preview`).

## Still open / decisions made so far

- **Name & tagline:** "The Fiddle" — "Ideas, experiments, and things worth
  trying." (final)
- **Sections:** Build, Grow, Think, Make (final)
- **Writing/publishing workflow:** not yet built. Plan discussed: markdown
  posts with front matter (title, date, tags, and a `public: true/false`
  flag for privacy), most likely via a static site generator like Jekyll
  (native to GitHub Pages) rather than plain HTML like this first pass.
- **Privacy for posts:** each post gets its own public/private flag rather
  than one login gating a whole section. Important caveat: a flag alone
  doesn't hide a file in a *public* GitHub repo — private drafts need to
  stay out of the public repo (e.g. in a separate private repo, or just
  unpushed) until they're meant to be public.
- **Tags on posts:** planned, via front matter (`tags: [...]`) once on a
  static site generator.
- **YouTube / Instagram embeds:** planned, via a simple reusable snippet
  (YouTube iframe, Instagram embed code) once on a static site generator —
  not yet built into these plain HTML stub pages.
- **Section descriptions, "About" bio, and real post content:** all still
  pending — intentionally left blank ("bare bones, fill in later").
- **Logo:** based directly on Lisa's own reference image
  (`assets/fiddle_heart.png`) — not a redrawn/vector version yet. A clean
  vector version (for scaling, recoloring, favicon use, etc.) would need a
  proper design tool or illustrator pass.

## Separate, related project

There's also a **professional site** (existing repo: `johnsolk.github.io`,
plus its blog at `johnsolk.github.io/blog/`) being revamped in parallel —
About page content was drafted (current role, PhD background, research
history, publications links) but not yet finalized or built. That's
tracked as a separate effort from this one.
