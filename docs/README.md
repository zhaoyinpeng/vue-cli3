# Start
开始开发前，请仔细阅读本文档，以提高协作与开发效率


## 项目前端开发

### 脚手架版本
```
@vue/cli v3.6.3
```

### 开发环境
```
vscode 最新版
nodejs v10.1.0
npm v6.0.1
```

### 安装依赖
```
npm install
```

### 运行调试
```
npm run start
```

### 打包生产模式
```
npm run build
```

## 项目开发文档
本项目文档使用vue官方推荐文档编写工具VuePress进行编写

### 如何进行开发文档编写
```
npm run docs:dev
```
::: danger 文档更新频率
理论上，开发过程中，文档一定要实时跟进，最迟周更新
:::

### 开发文档编写完后，在开发过程中如何查看文档

因开发文档的时候，其实没有运行代码，因为两者无法同时进行开发和查看

我们只需要按照以下步骤来进行
1. 文档编写完之后，执行 <code>npm run docs:build</code>
2. 启动项目 <code>npm run start</code>
3. 假设我们的开发浏览地址为:<code>http://localhost:8080/#/</code>,我们只需要稍微手动改变我们的地址为 <code>http://localhost:8080/docs</code>即可

建议开发时多开一个页面专门打开文档，即可做到开发的时候也可以看文档

::: warning 未完成
现代前端中，应该做到工程化，自动化，以上方式需要手动打包文档，体验不够好，待处理
:::

## 在线帮助文档

### vue开发官方文档
See [Devlopment Refrence](https://cn.vuejs.org/v2/guide/).

### 脚手架配置官方文档
See [Configuration Reference](https://cli.vuejs.org/config/).

### 文档编写工具官方文档
See [VuePress](https://vuepress.vuejs.org/).