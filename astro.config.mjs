import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brightmindsolutions.pl',
  integrations: [react(), sitemap()],
  output: 'static',
  compressHTML: true,
});
