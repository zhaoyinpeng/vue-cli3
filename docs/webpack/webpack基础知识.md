## 1.初体验

> index.js: webpack 入口起点文件

1. 运行指令：
   开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
   webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
   整体打包环境，是开发环境
   生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
   webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
   整体打包环境，是生产环境

2. 结论：
   1. webpack 能处理 js/json 资源，不能处理 css/img 等其他资源
   2. 生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化~
   3. 生产环境比开发环境多一个压缩 js 代码。

## 1.初体验

- 不同文件必须配置不同 loader 处理
- use 数组中 loader 执行顺序：从右到左，从下到上 依次执行(顺序固定的！)

```
module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // **use数组中loader执行顺序：从右到左，从下到上 依次执行**
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production'
}
```

# 3. html 资源

- html-webpack-plugin

```
plugins: [
  // plugins的配置
  // html-webpack-plugin
  // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
  // 需求：需要有结构的HTML文件
  new HtmlWebpackPlugin({
    // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
    template: './src/index.html'
  })
],
```
# 4. 打包其他资源

```
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    // 打包其他资源(除了html/js/css资源以外的资源)
    {
      // 排除css/js/html资源
      exclude: /\.(css|js|html|less)$/,
      loader: 'file-loader',
      options: {
        name: '[hash:10].[ext]'
      }
    }
  ]
},
```