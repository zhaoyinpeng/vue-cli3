https://mp.weixin.qq.com/s/anrtDgzYhEAmaQ3kXzcqkw

# js

## const es5

可以通过使用 Object.defineProperty()来实现

## 手写 call/apply

```
//变更函数调用者示例(原理)
function foo() {
    console.log(this.name)
}

// 测试
const obj = {
    name: '写代码像蔡徐抻'
}
obj.foo = foo   // 变更foo的调用者
obj.foo()       // '写代码像蔡徐抻'

//实现 call和apply只有参数不同(thisArg, ...args)和(thisArg, args)
Function.prototype.myCall = function(thisArg, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('error')
    }
    const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args)  // 执行当前函数
    delete thisArg[fn]              // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
}

//测试
foo.myCall(obj)     // 输出'写代码像蔡徐抻'
```

## 手写 bind

1. bind()除了 this 还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要传给返回的函数
2. new 的优先级：如果 bind 绑定后的函数被 new 了，那么此时 this 指向就发生改变。此时的 this 就是当前函数的实例
3. 没有保留原函数在原型链上的属性和方法

```
Function.prototype.myBind = function (thisArg, ...args) {
    if (typeof this !== "function") {
      throw TypeError("Bind must be called on a function")
    }

    var self = this
    // new优先级
    var fbound = function () {
        self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
    // 继承原型上的属性和方法(本质上是返回一个函数的，因此函数的原型链要给上)
    fbound.prototype = Object.create(self.prototype);

    return fbound;
}

//测试
const obj = { name: '写代码像蔡徐抻' }
function foo() {
    console.log(this.name)
    console.log(arguments)
}

foo.myBind(obj, 'a', 'b', 'c')()    //输出写代码像蔡徐抻 ['a', 'b', 'c']
```

## new

### 前提

```
prototype 显示原型
__proto__ 隐式原型
* 每个对象都有私有属性[[prototype]]，可以通过__proto__来访问
```

- 实例的隐式原型指向构造函数的显示原型

```
function A(){
    this.name = 'A'
}
let a = new A()
a.__proto__ === A.prototype
```

### 实现步骤

```
      function Foo(e) {
        this.name = "Foo";
        this.age = e;
        return {} //构造函数中如果return了对象，会影响实例，此时实例为{}
      }
      /**
       * @msg: newFactory
       * @param {*}
       * @return {*}
       */
      function newFactory() {
        const obj = {}; //1.创建对象
        const Constructor = [].shift.call(arguments); //3.拿到了参数的第一个,也就是构造函数Foo
        // const [Constructor, ...args] = [...arguments] //3.拿到了参数的第一个,也就是构造函数Foo
        obj.__proto__ = Constructor.prototype; //5.实现实例的隐式原型指向构造函数的显示原型
        const ret = Constructor.apply(obj, arguments); //4.将构造函数中的属性和方法复制给obj对象
        // return obj; //2.返回对象
        return typeof ret === 'object' ? ret : obj; //6.如果上面调用的构造函数返回了对象，则直接返回这个对象
      }
      console.log(new Foo(18));
      console.log(newFactory(Foo, 18));
```

## 继承

直接回答寄生组合式继承

```
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承 继承属性
    Parent.call(this, 'zhangsan')
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Object.create(Parent.prototype)  //将`指向父类实例`改为`指向父类原型`
Child.prototype.constructor = Child

//测试
const child = new Child()
const parent = new Parent()
child.getName()                  // ['zhangsan']
parent.getName()                 // 报错, 找不到getName()
```

# v8

## v8 引擎执行脚本

1. 预解析：检查语法错误但不生成 AST
2. 生成 AST：经过词法/语法分析，生成抽象语法树
3. 生成字节码：基线编译器(Ignition)将 AST 转换成字节码
4. 生成机器码：优化编译器(Turbofan)将字节码转换成优化过的机器码，此外在逐行执行字节码的过程中，如果一段代码经常被执行，那么 V8 会将这段代码直接转换成机器码保存起来，下一次执行就不必经过字节码，优化了执行速度

## 介绍一下引用计数和标记清除

•引用计数：给一个变量赋值引用类型，则该对象的引用次数+1，如果这个变量变成了其他值，那么该对象的引用次数-1，垃圾回收器会回收引用次数为 0 的对象。但是当对象循环引用时，会导致引用次数永远无法归零，造成内存无法释放。
•标记清除：垃圾收集器先给内存中所有对象加上标记，然后从根节点开始遍历，去掉被引用的对象和运行环境中对象的标记，剩下的被标记的对象就是无法访问的等待回收的对象。

## V8 如何进行垃圾回收

1. 栈内存和堆内存，栈内存存储基本类型数据以及引用类型数据的内存地址，堆内存储存引用类型的数据

- 栈内存的回收：

栈内存调用栈上下文切换后就被回收，比较简单

- 堆内存的回收：

V8 的堆内存分为新生代内存和老生代内存，新生代内存是临时分配的内存，存在时间短，老生代内存存在时间长

null

•新生代内存回收机制：

•新生代内存容量小，64 位系统下仅有 32M。新生代内存分为 From、To 两部分，进行垃圾回收时，先扫描 From，将非存活对象回收，将存活对象顺序复制到 To 中，之后调换 From/To，等待下一次回收

•老生代内存回收机制

•晋升：如果新生代的变量经过多次回收依然存在，那么就会被放入老生代内存中
•标记清除：老生代内存会先遍历所有对象并打上标记，然后对正在使用或被强引用的对象取消标记，回收被标记的对象
•整理内存碎片：把对象挪到内存的一端

# 网络相关

## HTTP/1.0 和 HTTP/1.1 有什么区别

•长连接： HTTP/1.1 支持长连接和请求的流水线，在一个 TCP 连接上可以传送多个 HTTP 请求，避免了因为多次建立 TCP 连接的时间消耗和延时
•缓存处理： HTTP/1.1 引入 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等新的请求头来控制缓存，详见浏览器缓存小节
•带宽优化及网络连接的使用： HTTP1.1 则在请求头引入了 range 头域，支持断点续传功能
•Host 头处理： 在 HTTP/1.0 中认为每台服务器都有唯一的 IP 地址，但随着虚拟主机技术的发展，多个主机共享一个 IP 地址愈发普遍，HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会 400 错误

## 介绍一下 HTTP/2.0 新特性

•多路复用： 即多个请求都通过一个 TCP 连接并发地完成
•服务端推送： 服务端能够主动把资源推送给客户端
•新的二进制格式： HTTP/2 采用二进制格式传输数据，相比于 HTTP/1.1 的文本格式，二进制格式具有更好的解析性和拓展性
•header 压缩： HTTP/2 压缩消息头，减少了传输数据的大小

## 说说 HTTP/2.0 多路复用基本原理以及解决的问题

HTTP/2 解决的问题，就是 HTTP/1.1 存在的问题：

•TCP 慢启动： TCP 连接建立后，会经历一个先慢后快的发送过程，就像汽车启动一般，如果我们的网页文件(HTML/JS/CSS/icon)都经过一次慢启动，对性能是不小的损耗。另外慢启动是 TCP 为了减少网络拥塞的一种策略，我们是没有办法改变的。
•多条 TCP 连接竞争带宽： 如果同时建立多条 TCP 连接，当带宽不足时就会竞争带宽，影响关键资源的下载。
•HTTP/1.1 队头阻塞： 尽管 HTTP/1.1 长链接可以通过一个 TCP 连接传输多个请求，但同一时刻只能处理一个请求，当前请求未结束前，其他请求只能处于阻塞状态。

为了解决以上几个问题，HTTP/2 一个域名只使用一个 TCP ⻓连接来传输数据，而且请求直接是并行的、非阻塞的，这就是多路复用

实现原理： HTTP/2 引入了一个二进制分帧层，客户端和服务端进行传输时，数据会先经过二进制分帧层处理，转化为一个个带有请求 ID 的帧，这些帧在传输完成后根据 ID 组合成对应的数据。

## 说说 HTTP/3.0

尽管 HTTP/2 解决了很多 1.1 的问题，但 HTTP/2 仍然存在一些缺陷，这些缺陷并不是来自于 HTTP/2 协议本身，而是来源于底层的 TCP 协议，我们知道 TCP 链接是可靠的连接，如果出现了丢包，那么整个连接都要等待重传，HTTP/1.1 可以同时使用 6 个 TCP 连接，一个阻塞另外五个还能工作，但 HTTP/2 只有一个 TCP 连接，阻塞的问题便被放大了。

由于 TCP 协议已经被广泛使用，我们很难直接修改 TCP 协议，基于此，HTTP/3 选择了一个折衷的方法——UDP 协议，HTTP/2 在 UDP 的基础上实现多路复用、0-RTT、TLS 加密、流量控制、丢包重传等功能。

## HTTP 和 HTTPS 有何区别

•HTTPS 使用 443 端口，而 HTTP 使用 80
•HTTPS 需要申请证书
•HTTP 是超文本传输协议，是明文传输；HTTPS 是经过 SSL 加密的协议，传输更安全
•HTTPS 比 HTTP 慢，因为 HTTPS 除了 TCP 握手的三个包，还要加上 SSL 握手的九个包

# html

## doctype 的作用是什么？

声明文档类型，告知浏览器用什么文档标准解析这个文档：

•怪异模式：浏览器使用自己的模式解析文档，不加 doctype 时默认为怪异模式
•标准模式：浏览器以 W3C 的标准解析文档

## href 和 src 有什么区别

href（hyperReference）即超文本引用：当浏览器遇到 href 时，会并行的地下载资源，不会阻塞页面解析，例如我们使用<link>引入 CSS，浏览器会并行地下载 CSS 而不阻塞页面解析. 因此我们在引入 CSS 时建议使用<link>而不是@import

<link href="style.css" rel="stylesheet" />
src（resource）即资源，当浏览器遇到src时，会暂停页面解析，直到该资源下载或执行完毕，这也是script标签之所以放底部的原因

<script src="script.js"></script>

## meta 有哪些属性，作用是什么

meta 标签用于描述网页的元信息，如网站作者、描述、关键词，meta 通过 name=xxx 和 content=xxx 的形式来定义信息，常用设置如下：

•charset：定义 HTML 文档的字符集

 <meta charset="UTF-8" >
•http-equiv：可用于模拟http请求头，可设置过期时间、缓存、刷新

＜ meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT"＞
•viewport：视口，用于控制页面宽高及缩放比例

<meta 
    name="viewport" 
    content="width=device-width, initial-scale=1, maximum-scale=1"
>

1. 先写一个题，一个长度为 n 的数组，求出其中 m 个项组成的全排列
2. 移动端 click 延迟的原因

- 1.控制浏览器宽度不让他进行缩放操作 2.使用 fastClick（原理是监听 touchstart 和 touchend 事件）

3. 词法分析变成抽象语法书的原因
4. http 能取消吗？如何取消？

- 能 abort()

5. promise 如何取消？

- 直接调用 reject
- 使用 promise.race

  6.co 模块内部是如何运行的？

7. await 内部的原理？

- async/await 会被编译成 generator+promise 的语法代码

  8.双向数据绑定 
9. 写代码，两个数组的交集，并集 
```
var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
//交集
var c = a.filter(function(v){ return b.indexOf(v) > -1 })
//差集
var d = a.filter(function(v){ return b.indexOf(v) == -1 })
//补集
var e = a.filter(function(v){ return !(b.indexOf(v) > -1) })
 .concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))
//并集
var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
console.log("数组a：", a);
console.log("数组b：", b);
console.log("a与b的交集：", c);
console.log("a与b的差集：", d);
console.log("a与b的补集：", e);
console.log("a与b的并集：", f);

```
10.讲一个印象最深的你封装的组件
