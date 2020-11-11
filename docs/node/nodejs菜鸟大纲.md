# node.js

## 回调函数

- 阻塞
- 非阻塞

## 事件循环 events

- events

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

<!-- 以下程序绑定事件处理程序： -->

// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
我们可以通过程序触发事件：

// 触发事件
eventEmitter.emit('eventName');
```

- events.EventEmitter

1. events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装.
2. error 事件
   EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
3. 继承 EventEmitter
   大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

## buffer 缓冲区

- 概念
  JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。但在处理像 TCP 流或文件流时，必须使用到二进制数据。因此在 Node.js 中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
  在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理 I/O 操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

## Stream 流

- 概念
  Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对 http 服务器发起请求的 request 对象就是一个 Stream，还有 stdout（标准输出）。

- 管道流 （文件复制粘贴）
  管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
- 链式流 （文件复制粘贴带解压压缩等操作）
  链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
  例如用管道和链式来压缩和解压文件。

## 模块系统
- require (需要一个判断过程，判断内存中是否有，是不是内置的，不是就进行加载)
- exports 和 module.exports