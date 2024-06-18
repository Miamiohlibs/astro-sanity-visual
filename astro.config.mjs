import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'h8zbt27a',
      dataset: 'visual-editing',
      studioBasePath: '/admin',
      stega: {
        studioUrl: '/admin',
      },
      useCdn: true,
      // `false` if you want to ensure fresh data
      apiVersion: '2023-03-20', // Set to date of setup to use the latest API version
    }),
    react(),
  ],
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
});