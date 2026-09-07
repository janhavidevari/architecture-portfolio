// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import Icons from 'unplugin-icons/vite';
export default defineConfig({
  site: 'https://janhavidevari.github.io',
  base: '/architecture-portfolio',
  integrations: [mdx()],
  output: 'static',
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});
