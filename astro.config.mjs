import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  vite: {
    plugins: [MagicRegExpTransformPlugin.vite()]
  }
});