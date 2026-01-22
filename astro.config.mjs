// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cto-de-lyon.fr",
  // Si votre repository GitHub n'est pas "username.github.io", 
  // décommentez la ligne suivante et remplacez "nom-du-repo" par le nom de votre repository
  // base: "/nom-du-repo",
  integrations: [tailwind(), sitemap()],
  output: "static",
});
