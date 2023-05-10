import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import { imagetools } from 'vite-imagetools';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), image(), partytown({
    config: {
      forward: ["dataLayer.push"]
    },
  })],
  vite: {
    plugins: [imagetools()]
  }
});