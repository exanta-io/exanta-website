import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://stupendous-otter-859a6c.netlify.app/",
  integrations: [
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
