// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cto-de-lyon.fr",
  // Base path pour GitHub Pages
  // Utilise "/" pour un domaine personnalisé, ou "/nom-du-repo/" pour l'URL GitHub Pages par défaut
  // La valeur est définie via la variable d'environnement ASTRO_BASE dans le workflow
  base: process.env.ASTRO_BASE || "/",
  integrations: [tailwind(), sitemap()],
  output: "static",
});
