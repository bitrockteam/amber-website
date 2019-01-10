module.exports = {
  base: '/',
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
  dest: './dist',
  themeConfig: {
    sidebar: {
      '/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/overview/introduction/',
            '/overview/principles/',
          ]
        },
        {
          title: 'Design',
          collapsable: false,
          children: [
            '/design/color/',
            '/design/typography/',
            '/design/spacing/',
            '/design/grid/',
            '/design/iconography/',
            '/design/forms/',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/components/banner/',
            '/components/button/',
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
    
    nav: [
      { text: 'Overview', link: '/overview/' },
      { text: 'Design', link: '/design/' },
      { text: 'Components', link: '/components/' },
      { text: 'Resources', link: '/resources/' },
    ]
  }
}