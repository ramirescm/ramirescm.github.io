const { description } = require('../../package')
const { nav, sideBar } = require("vuepress-bar")();

module.exports = {
  base: '',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DEPS Documentação',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentação',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    //logo: '/assets/img/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Deps',
        link: 'https://www.deps.com.br'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'DepsNet',
          children: [
            '',
            'deps/v_16',
            'deps/v_17',
          ]
        },
        {
          title: 'Portal',
          children: [
            '',
            'portal/v_16',
            'portal/v_17',
          ]
        }
      ],

      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'deps',
      //       'portal'
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }
  ]
}
