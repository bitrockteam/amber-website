module.exports = {
  title: 'Amber Design System',
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
    }
  }
}