const path = require('path')

module.exports = {
  title: '广西水质前端开发文档',
  description: '广西水质前端开发文档',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      ['/', '开始'],
      ['/html5/css_1.md', 'html5']
    ],
    sidebarDepth: 2
  },
  dest: path.resolve('public', 'docs'),
  base: '/docs/'
}
