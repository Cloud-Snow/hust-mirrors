// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const mirrorConfig = {
  title: "华中科技大学开源镜像站",
  url: "https://hustmirror.cn"
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: mirrorConfig.title,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: mirrorConfig.url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitee.com/dzm91_hust/hust-mirrors/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitee.com/dzm91_hust/hust-mirrors/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: mirrorConfig.title,
        logo: {
          alt: mirrorConfig.title,
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '帮助',
          },
          {
            to: '/blog',
            label: '动态',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://gitee.com/dzm91_hust/hust-mirrors/',
            label: 'Gitee',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `HUSTMirror Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
