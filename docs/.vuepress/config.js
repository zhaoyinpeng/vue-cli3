const path = require('path')

module.exports = {
  title: 'study',
  description: 'study',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      ['/', '开始'],
      ['/html5/css_1.md', 'html5'],
      ['/nginx/nginx.md', 'nginx'],
      ['/前端部署/前端部署.md', '前端部署']
    ],
    sidebarDepth: 2
  },
  dest: path.resolve('public', 'docs'),
  base: '/docs/'
}
