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
    ['meta', { name: 'theme-color', content: '#eb6400' }]
  ],
  base: '/',
  dest: './dist',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Overview', link: '/overview/' },
      { text: 'Visual', link: '/visual/' },
      { text: 'Components', link: '/components/' },
      { text: 'Resources', link: '/resources/' },
    ],
    sidebar: {
      '/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/overview/introduction/',
          ]
        },
        {
          title: 'Visual',
          collapsable: false,
          children: [
            '/visual/color/',
            '/visual/typography/',
            '/visual/grid/',
            '/visual/iconography/',
            '/visual/forms/',
            '/visual/spacing/',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/components/banner/',
            '/components/button/',
            '/components/datepicker/',
            '/components/card/',
            '/components/code/',
            '/components/modal/',
            '/components/progress/',
            '/components/tabs/',
          ]
        },
        {
          title: 'Resources',
          collapsable: false,
          children: [
            '/resources/',
          ]
        },
      ]
    },

    /*
    // Last Updated
    lastUpdated: 'Last Updated',
    */

    /*
    // Git Repo and Edit Links
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'bitrockteam/amber-website',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub!',
    */
    
  }
}