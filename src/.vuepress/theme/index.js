const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    ['@vuepress/google-analytics', {
      'ga': 'UA-132704648-1'
    }],
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      'serviceWorker': true,
      'popupComponent': 'UpdatePopup',
      'updatePopup': true,
    }]
  ]
})