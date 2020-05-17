const path=require('path')

module.exports = {
  title: '广西水质前端开发文档',
  description: '广西水质前端开发文档',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    sidebar: [['/', '开始'], 
    ['/开发规范/开发规范.md', '开发规范/约定'],
    ['/项目结构/项目结构.md', '项目结构'],
    ['/一张图/一张图.md', '一张图'],
    ['/数据监测/数据监测.md', '数据监测'],
    ['/专题制图/专题制图.md', '专题制图'],
    ['/电子沙盘/电子沙盘.md', '电子沙盘'],
    ['/驾驶舱/驾驶舱.md', '驾驶舱']
  ],
    sidebarDepth: 2
  },
  dest:path.resolve('public','docs'),
  base:'/docs/'
}
