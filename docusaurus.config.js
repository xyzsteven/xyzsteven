import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'xyzsteven.',
  tagline: 'Cybersecurity Engineering Student. Exploring about SIEM, VAPT and System Customization. Also an Open Source and Android Custom ROMs Enthusiast.',
  url: 'https://xyzsteven.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'xyzsteven',
  projectName: 'portfolio',
  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/mini.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#6366f1',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/mob-2.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/mob-2.png',
            color: '#6366f1',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/mob-2.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#6366f1',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'xyzsteven.',
      logo: {
        alt: 'xyzsteven.',
        src: 'img/mini.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/xyzsteven',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/stevenjuliano',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `${new Date().getFullYear()} xyzsteven. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'keywords', content: 'cyber security, student, vapt, penetration testing, siem, network security, linux, open source, polibatam' },
      { name: 'author', content: 'xyzsteven' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'xyzsteven' },

    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
          },
          postsPerPage: 3,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
