# JakobMelchard.github.io (docs.melchard.org root)

GitHub Pages landing page. Lists the org's public repos, fetched live from the
GitHub API, plus links to big.feelz.dev and lil.feelz.dev.

Zero-dependency static page, no build. `package.json` holds dev tooling only (prettier,
eslint, tsc); nothing from `node_modules` is served.
GitHub Pages serves the repo directly, `.nojekyll`, `CNAME` pins the domain.

## Layout

```
index.html              # landing page
assets/style.css
assets/repos.js         # fetches (all pages) and renders public, non-fork, non-archived repos
assets/keyboard-nav.js  # / to filter, arrow keys to move, Enter to open
assets/tu-redirect.js   # 404.html: sends /tu/<path> to /notes/<path>
assets/github.svg       # row icon, local so the page loads nothing from third parties
```

`assets/*.js` are ES modules with no site-specific values: the owner, docs origin and
hidden repos come from `<body data-user data-docs data-skip>` in `index.html`, so the
same files serve lilfeelz.github.io. Rows are cloned from `<template id="row">`.

## Checks

`assets/*.js` carry JSDoc types checked by `tsc` (strict, checkJs). HTML has no inline
`<script>`, `<style>` or `style=`. CI (`.github/workflows/ci.yml`) runs, after `npm ci`:

```sh
npm run check                      # prettier --check . && tsc
npx eslint --max-warnings 0 .      # org base config with JSDoc rules
```

plus the prek hooks (`.pre-commit-config.yaml`, prettier and eslint need `npm ci`).
`npm run format` fixes formatting.

## Deploy

Push to `main` and GitHub Pages deploys to https://docs.melchard.org.

## Rules

- Keep it buildless with no runtime dependencies. Edit the files, push, done.
- The repo list is fetched at runtime; never hardcode repos. A name links to
  its docs site when the repo has Pages, otherwise to GitHub.
