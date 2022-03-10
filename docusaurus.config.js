// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Skylooker 博客",
  tagline: "你好，我是一名前端程序员，在这里分享知识存档、书签和博客",
  url: "https://skylooker-hub.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Skylooker-hub", // Usually your GitHub org/user name.
  projectName: "Skylooker-hub.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/Skylooker-hub/Skylooker-hub.github.io/",
        },
        blog: {
          showReadingTime: true,
          blogTitle: "博客",
          // Please change this to your repo.
          blogSidebarTitle: "最近的博客",
          // editUrl:
          //   "https://github.com/Skylooker-hub/Skylooker-hub.github.io/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Skylooker",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "知识存档",
          },
          { to: "/mark", label: "书签", position: "left" },
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/Skylooker-hub",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skylooker`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: "ca68be632c1e2c339de03664c600423a",
        indexName: "docsearch",
        appId: "4KIRLWOA9Z",
      },
    }),
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },
};

module.exports = config;
