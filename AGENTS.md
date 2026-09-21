# JakobMelchard.github.io — docs hub at docs.melchard.org

Zero-dependency static site listing the org's repos. No build, no tests, no
package.json. GitHub Pages serves the repo directly, `.nojekyll`, `CNAME` pins
the domain.

## Layout

- `index.html`
- `assets/repos.js` fetches the repo list from the GitHub API at runtime and
  fuzzy-filters it client side
- `assets/keyboard-nav.js`, `assets/style.css`

## Rules

- Keep it dependency-free and buildless. Edit the files, push, done.
- `repos.js` calls the unauthenticated GitHub API from the visitor's browser,
  which is rate limited at 60 requests per hour per IP and returns public repos
  only. Do not add a token to make private repos appear; it would ship a
  credential in a static asset.
- `USER` and `DOCS` are constants at the top of `repos.js`.
