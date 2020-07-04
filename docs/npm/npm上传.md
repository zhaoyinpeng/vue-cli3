1. 首先创建文件，输入npm init 创建一个webpack
2. main字段是入口文件，一般为index.js文件
3. 创建index.js文件，然后编写代码
  ```
    exports.showMsg = function () {
      console.log('hello, zyp')
    }
  ```
4. 写完后，npm publish，上传
5. 如果要更新，更新后要改版本号，否则更新不上
6. 项目运行 npm update xxx,更新插件


// npm 代码
1. npm init 初始化
2. npm -v 版本
3. npm publish
4. npm install xxx 
  * npm install xxx -s 保存在dependencies
  * npm install xxx -d 保存在devDependencies
  * npm install xxx -g 全局安装
  * npm install xxx@1.2.0 固定版本
5. npm outdated 检查所有更新
6. npm update xxx 检查更新
7. npm uninstall xxx 删除
8. npm view xxx 查看某个版本信息
9. npm info xxx 查看某个版本信息