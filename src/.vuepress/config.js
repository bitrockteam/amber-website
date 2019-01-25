module.exports = {
  title: 'Amber',
  description: 'Bitrock Design System',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#eb6400' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#eb6400' }],
    ['script', { async: true, src: 'https://unpkg.com/@amber-ds/components@1.0.0/index.js' }]
  ],
  base: '/',
  dest: './dist',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Visual guidelines', link: '/visual/color/' },
      { text: 'Components', link: '/components/overview/' },
      { text: 'Resources', link: '/resources/install/' },
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '/introduction/design-system/',
            '/introduction/install/',
          ]
        },
        {
          title: 'Visual guidelines',
          collapsable: false,
          children: [
            '/visual/color/',
            '/visual/typography/',
            '/visual/layout/',
            '/visual/grid/',
            '/visual/forms/',
            '/visual/spacing/',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/components/overview/',
            '/components/banner/',
            '/components/button/',
            '/components/card/',
            '/components/code/',
            '/components/date/',
            '/components/modal/',
            '/components/progress/',
            '/components/tabs/',
          ]
        },
        {
          title: 'Resources',
          collapsable: false,
          children: [
            '/resources/download/',
            '/resources/compatibility/',
            // '/resources/examples/',
            // '/resources/changelog/',
          ]
        },
      ]
    },

    // Git Repo in Navbar
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'bitrockteam/amber-website',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',

    plugins: [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],

    /*
    // Edit Links in Pages
    // if your docs are in a different repo from your main project:
    docsRepo: 'bitrockteam/amber-website',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub!',
    */

    // Last Updated in Pages
    lastUpdated: 'Last Updated',
    
  }
}