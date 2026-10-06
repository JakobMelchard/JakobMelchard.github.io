# JakobMelchard.github.io (docs.melchard.org root)

GitHub Pages landing page. Lists the org's public repos, fetched live from the
GitHub API, plus links to big.feelz.dev and lil.feelz.dev.

Zero-dependency static page. No build, no tests, no package.json.
GitHub Pages serves the repo directly, `.nojekyll`, `CNAME` pins the domain.

## Layout

```
index.html              # landing page
assets/style.css
assets/repos.js         # fetches (all pages) and renders public, non-fork, non-archived repos
assets/keyboard-nav.js  # / to filter, arrow keys to move, Enter to open
assets/github.svg       # row icon, local so the page loads nothing from third parties
```

`assets/*.js` are ES modules with no site-specific values: the owner, docs origin and
hidden repos come from `<body data-user data-docs data-skip>` in `index.html`, so the
same files serve lilfeelz.github.io. Rows are cloned from `<template id="row">`.

## Checks

CI (`.github/workflows/ci.yml`) runs `node --check` and eslint on `assets/*.js`, plus the
prek hooks (`.pre-commit-config.yaml`). Locally: `prek install`, then

```sh
npx --yes eslint@10.12.0 --no-config-lookup --global document,window,fetch,AbortSignal \
  --rule '{"no-undef": "error", "no-unused-vars": "error"}' assets
```

## Deploy

Push to `main` and GitHub Pages deploys to https://docs.melchard.org.

## Rules

- Keep it dependency-free and buildless. Edit the files, push, done.
- The repo list is fetched at runtime; never hardcode repos. A name links to
  its docs site when the repo has Pages, otherwise to GitHub.
