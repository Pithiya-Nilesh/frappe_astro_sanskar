import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), tailwind()],
  // outDir: '../astro_sanskar/www',
  build: {
    format: "file",
    // assetsPrefix: ['', '', '', ''],
  },
});
                  