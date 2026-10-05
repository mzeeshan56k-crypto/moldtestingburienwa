# Mold Testing Burien WA — static site

Pure HTML/CSS/vanilla JS. No build step.

## Deploy to Cloudflare Pages
1. Unzip. The folder containing `index.html` is the site root.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → **Upload assets** (or connect a Git repo containing these files).
3. Project name: `moldtestingburienwa`. Build command: *none*. Output directory: `/` (root).
4. Deploy, then Custom domains → add `moldtestingburienwa.com` and `www.moldtestingburienwa.com`; follow the DNS prompts.
5. Add a redirect rule www → apex (Rules → Redirect Rules) so canonicals match.
6. Submit `https://moldtestingburienwa.com/sitemap.xml` in Google Search Console.

## Files
- `/index.html` homepage; each page at `/slug/index.html`
- `/assets/styles.css`, `/assets/main.js` (deferred), `logo.svg`, `favicon.svg`, `img/`
- `404.html` served automatically by Cloudflare Pages
- `vercel.json` caching + security headers, trailing-slash URLs (Vercel)
- `.vercelignore` keeps the project `.md` docs off the live site
- `STRATEGY.md`, `STATE.md`, `AUDIT.md` project docs (safe to delete before deploy)

## Editing
Phone number appears as `(833) 289-9993` and `tel:+18332899993`; find-and-replace both to change it.
