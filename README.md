# vue-cli3
1. 基础安装
* npm install -g @vue/cli
* vue create vuecli3test

2. 搭建基本框架
* 根目录创建vue.config.js
  * 用于配置开发环境和生产环境等配置
    * build时去掉console.log[https://www.cnblogs.com/iPing9/p/10826197.html]
* npm run build即为混淆后代码，不用再次处理，不过会生成js.map文件，可在vue.config.js中删除
* sass,less支持：只需要安装依赖即可使用，不用设置！**注意，在基础安装中就可以设置css预编译器，就不用再次安装依赖**

3. eslint
* **eslintrc.js**文件