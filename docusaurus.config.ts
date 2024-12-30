import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LÖVEBrew',
  tagline: 'LÖVE Potion',
  favicon: 'images/favicon.ico',
  url: 'https://lovebrew.github.io',
  baseUrl: '/',

  trailingSlash: false,

  organizationName: 'lovebrew',
  projectName: 'lovebrew.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [['@docusaurus/plugin-ideal-image', { disableInDev: false }]],

  themeConfig: {
    algolia: {
      appId: 'V4GA8BFAID',
      apiKey: 'b69b81a4fcaa91ed94022b5faa467f2e',
      indexName: 'lovebrew',
      contextualSearch: true,
      // externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
      searchPagePath: false,
      insights: false,
    },
    navbar: {
      title: 'LÖVE Potion',
      logo: {
        alt: 'My Site Logo',
        src: 'images/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'welcome',
          label: 'Wiki',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'bundlerSidebar',
          label: 'Bundler',
        },
        { to: '/showcase', label: 'Showcase', position: 'left' },
        {
          type: 'doc',
          position: 'left',
          docId: 'faq',
          label: 'FAQ',
        },
        {
          type: 'custom-badge',
          position: 'right',
          version: '12.0',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          to: 'https://discord.gg/ggbKkhc',
          position: 'right',
          className: 'header-discord-link',
        },
        {
          href: 'https://github.com/lovebrew/lovepotion',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua', 'batch', 'bash', 'toml', 'ini'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
