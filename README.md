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

This is a plain static HTML site — no build step, no framework. Every page
is a normal file you can open and edit directly.

## Deploying to GitHub Pages

1. Create a new empty repo on GitHub (suggested name: `fiddle`).
2. Add these files to the repo — either drag-and-drop upload on github.com,
   or clone the repo locally, copy these files in, then:
   ```
   git add .
   git commit -m "initial site"
   git push
   ```
3. In the repo, go to **Settings → Pages**, and set the source to the
   branch you pushed to (usually `main`), root folder.
4. The site will be live in a minute or two at:
   `https://johnsolk.github.io/fiddle/`
   (a project page, since only one repo per account — the existing
   `johnsolk.github.io` — can be the root site).

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
