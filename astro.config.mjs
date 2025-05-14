import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://stupendous-otter-859a6c.netlify.app/",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});