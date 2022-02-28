// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Engula',
  tagline: 'A cloud-native data structure store',
  url: 'https://engula.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'engula',
  projectName: 'engula',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: false,
          editUrl: 'https://github.com/engula/engula.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/engula/engula.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Engula',
        logo: {
          alt: 'Engula',
          src: 'img/favicon.png',
        },
        items: [
          { label: 'Blog', to: '/blog', position: 'right' },
          { label: 'Events', to: '/events', position: 'right' },
          { label: 'Community', to: "/docs/general/community", position: 'right' },
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Zulip',
                href: 'https://engula.zulipchat.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/engulaio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/engula/engula',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/engula/engula/discussions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Engula.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'shell',
        additionalLanguages: ['toml', 'rust'],
      },
      // algolia: {
      //   // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      //   appId: 'YOUR_APP_ID',
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'engula',
      //   contextualSearch: true,
      // },
    }),
  plugins: [path.resolve(__dirname, 'plugins', 'getReleaseNotes'), [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
    },
  ],],
};

module.exports = config;
