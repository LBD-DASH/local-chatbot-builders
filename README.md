# Local Chatbot Builders

Astro static site for a done-for-you FAQ and lead-capture chatbot service for local businesses. One page per trade.

- `npm ci && npm run dev` to work locally, `npm run build` to build (schema in `src/content.config.ts` is validated at build time).
- Trade pages: `src/content/trades/<slug>.md`. Partner links: `src/data/partners.json` only (empty `affiliateUrl`).
- Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`. Base path `/local-chatbot-builders/`.
- Custom domain later: set `SITE_URL` and `BASE_PATH=/` in the workflow env.
- Rules: no invented facts, prices or results; CTA is always "Request a quote"; no em dashes.
See PLAYBOOK.md and STATUS.md.
