import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://0xAlexandeeer.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
