# JakobMelchard.github.io (docs.melchard.org root)

GitHub Pages landing page. It links to big.feelz.dev and lil.feelz.dev and nothing else.

Zero-dependency static page. No build, no tests, no package.json.
GitHub Pages serves the repo directly, `.nojekyll`, `CNAME` pins the domain.

## Layout

```
index.html              # landing page
assets/style.css
```

## Deploy

Push to `main` and GitHub Pages deploys to https://docs.melchard.org.

## Rules

- Keep it dependency-free and buildless. Edit the files, push, done.
- Do not list repos here: no repo list, project cards, or GitHub API calls,
  neither hardcoded nor fetched. The owner does not want an index of their
  repos on this site.
