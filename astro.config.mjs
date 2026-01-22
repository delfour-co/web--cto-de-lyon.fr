// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cto-de-lyon.fr",
  // Base path pour GitHub Pages
  // Si vous utilisez un domaine personnalisé configuré dans GitHub Pages,
  // changez cette valeur en "/" ou définissez la variable d'environnement ASTRO_BASE="/"
  base: process.env.ASTRO_BASE || "/web--cto-de-lyon.fr/",
  integrations: [tailwind(), sitemap()],
  output: "static",
});
