module.exports = {
  title: 'Amber Design System',

  description: 'Amber is an open source Design System crafted by the team at Bitrock to help designers and developers build great digital products and experiences.',

  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#eb6400' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#eb6400' }],
    ['meta', { property: 'og:title', content: 'Amber Design System' }],
    ['meta', { property: 'og:description', content: 'Amber is an open source Design System crafted by the team at Bitrock to help designers and developers build great digital products and experiences.' }],
    ['meta', { property: 'og:url', content: 'https://amber.bitrock.it/' }],
    ['meta', { property: 'og:image', content: '/img/cover.png' }],
    ['script', { async: true, src: 'https://unpkg.com/@amber-ds/components@1.2.0/index.js' }]
  ],

  base: '/',

  dest: './dist',

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Visual guidelines', link: '/visual/color/' },
      { text: 'Components', link: '/components/overview/' },
      { text: 'Resources', link: '/resources/compatibility/' },
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: true,
          children: [
            '/introduction/design-system/',
            '/introduction/install/',
          ]
        },
        {
          title: 'Visual guidelines',
          collapsable: true,
          children: [
            '/visual/color/',
            '/visual/typography/',
            '/visual/layout/',
            '/visual/grid/',
            '/visual/forms/',
            // '/visual/spacing/',
          ]
        },
        {
          title: 'Components',
          collapsable: true,
          children: [
            '/components/overview/',
            '/components/banner/',
            '/components/button/',
            '/components/card/',
            '/components/code/',
            '/components/date/',
            '/components/modal/',
            '/components/progress/',
            '/components/progress-bar/',
            '/components/tabs/',
          ]
        },
        {
          title: 'Resources',
          collapsable: true,
          children: [
            // '/resources/download/',
            '/resources/compatibility/',
            // '/resources/examples/',
            // '/resources/changelog/',
            '/resources/faq/',
          ]
        },
      ]
    },

    repo: 'bitrockteam/amber-website',

    repoLabel: 'GitHub',

    plugins: [],

    lastUpdated: 'Last Updated',

  }
}