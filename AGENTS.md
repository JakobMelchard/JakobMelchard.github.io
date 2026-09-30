# JakobMelchard.github.io (docs.melchard.org root)

GitHub Pages landing page. Lists the org's public repos, fetched live from the
GitHub API, plus links to big.feelz.dev and lil.feelz.dev.

Zero-dependency static page. No build, no tests, no package.json.
GitHub Pages serves the repo directly, `.nojekyll`, `CNAME` pins the domain.

## Layout

```
index.html              # landing page
assets/style.css
assets/repos.js         # fetches and renders public, non-fork, non-archived repos
assets/keyboard-nav.js  # / to filter, arrow keys to move, Enter to open
```

## Deploy

Push to `main` and GitHub Pages deploys to https://docs.melchard.org.

## Rules

- Keep it dependency-free and buildless. Edit the files, push, done.
- The repo list is fetched at runtime; never hardcode repos. A name links to
  its docs site when the repo has Pages, otherwise to GitHub.
