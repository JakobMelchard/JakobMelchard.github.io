# docs.melchard.org

GitHub Pages root for <https://docs.melchard.org>. Lists the org's public repositories,
fetched live from the GitHub API. Each project's own docs live under
`docs.melchard.org/<repo>`.

```text
index.html ──▶ assets/repos.js ──▶ api.github.com/users/JakobMelchard/repos
                     │
                     └──▶ assets/keyboard-nav.js   / to filter, arrows to move
```

## Preview

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. No build step, no runtime dependencies.

## Deploy

Push to `main`; GitHub Pages deploys automatically.

## Checks

```sh
npm ci
npm run check                # prettier --check . && tsc
npx eslint --max-warnings 0 .
```
