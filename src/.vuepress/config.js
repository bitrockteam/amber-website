module.exports = {
  title: 'Amber',
  description: 'Bitrock Design System',
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