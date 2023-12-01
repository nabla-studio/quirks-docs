import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Quirks",
      defaultLocale: "en",
      logo: {
        light: "./src/assets/quirks-logo-text-light.svg",
        dark: "./src/assets/quirks-logo-text.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/nabla-studio/quirks",
        "x.com": "https://twitter.com/nabla_hq",
        discord: "https://discord.gg/T28vmuTSBD",
        linkedin: "https://www.linkedin.com/company/87381409",
		instagram: "https://www.instagram.com/nabla_hq/"
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
      },
    }),
  ],
  redirects: {
    "/": "https://quirks.nabla.studio",
  },
});
