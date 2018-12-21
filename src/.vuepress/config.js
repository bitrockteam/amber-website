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
        }
      ]
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/' },
      { text: 'Visual', link: '/visual/' },
    ]
  }
}