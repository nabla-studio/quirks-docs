import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Quirks",
  tagline:
    "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://quirks-docs.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nabla-studio", // Usually your GitHub org/user name.
  projectName: "quirks", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  clientModules: ['./src/js/analytics.js'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/nabla-studio/quirks-docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://quirks-docs.vercel.app/img/opengraph-image.jpg",
    navbar: {
      logo: {
        alt: "Quirks Logo",
        src: "img/quirks-logo-text-light.svg",
        srcDark: "img/quirks-logo-text.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/nabla-studio/quirks",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/T28vmuTSBD",
            },
            {
              label: "X",
              href: "https://twitter.com/nabla_hq",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/87381409",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nabla_hq/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nabla-studio/quirks",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nabla Srl`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: "description",
        content:
          "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
      },
      { name: "og:title", content: "Quirks" },
      { name: "og:site_name", content: "Quirks" },
      {
        name: "og:description",
        content:
          "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
      },
      { name: "og:type", content: "website" },
      { name: "twitter:title", content: "Quirks" },
      { name: "twitter:site", content: "@nabla_hq" },
      {
        name: "twitter:description",
        content:
          "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
