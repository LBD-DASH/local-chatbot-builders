# Playbook: add one trade page

## Routine
1. Pick the next trade from the priority list below.
2. Copy `src/content/trades/salons.md` to `src/content/trades/<slug>.md`.
3. Edit the front matter. Schema limits: `title` 20-70 chars, `description` 70-160 chars, at least 4 `commonQuestions`, 3 `leadFields`, 3 `faq` items. `handoff` states when the bot passes to a human.
4. Content rules: describe the service we plan to deliver only. No prices, stats, testimonials, clients, results, reviews, response-time or conversion claims. Any fact needs a source link and "last checked <date>", otherwise leave it out. CTA text is "Request a quote". No "guaranteed" or "passive income".
5. Regulated trades (clinics, vets, real estate, electricians): the bot gives no clinical, legal, safety or technical advice; say so in `handoff`.
6. Add the page to the home grid (automatic from the collection) and to the Trades list in `src/pages/services.astro`. Sitemap updates automatically.
7. `npm run build`. Then check: `grep -rlP '\x{2014}' src dist` returns nothing, and `grep -rliE 'guarantee|passive income' src dist` returns nothing.
8. Commit "Add <trade> page", push to `main`, wait for the Pages workflow, then `curl -sI https://lbd-dash.github.io/local-chatbot-builders/trades/<slug>/` must show 200.

## Priority list of next trades
1. Dentists
2. Vets
3. Gyms and fitness studios
4. Electricians
5. Auto repair shops
6. Real estate agents
7. Accountants and bookkeepers
8. Cleaning services

## Do not do without Kevin
Publish prices, add a contact email or phone, add affiliate IDs, buy a domain, set up payments.
