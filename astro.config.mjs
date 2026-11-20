// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain later: SITE_URL=https://www.example.com BASE_PATH=/ npm run build
const site = process.env.SITE_URL || 'https://lbd-dash.github.io';
const base = process.env.BASE_PATH ?? '/local-chatbot-builders/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
