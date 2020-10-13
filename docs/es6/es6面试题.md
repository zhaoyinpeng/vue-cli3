# es5和es6的区别，说一下你所知道的es6
1. js遵循的标准，ecmascript6,
2. 使用一些新特性简化开发
3. 新特性
```
1. let const 
2. 箭头函数
3. * class 
4. promise 
5. async await
6. ...
7. set
8. map
9. 迭代器

10. ` 模板字符串
11. * 解构赋值ES6
12. * import export
13. SymbolSymbol是一种基本类型。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的
14. * Proxy代理使用代理（Proxy）监听对象的操作，然后可以做一些相应事情
```

# var、let、const之间的区别
1. 暂时性死区 不能在定义前使用 for循环，块级作用域
2. 不能重复定义
3. const必须定义，定以后不能改变
4. * 在快级中let不与window映射

#使用箭头函数应注意什么？
1. * 不可以使用yield命令，因此箭头函数不能用作 Generator 函数
2. 绑定的this为固定为父级
3. 箭头函数无法作为构造函数，因为没有constructor，不能够使用new命令
4. 不能够使用arguments对象


# ES6的模板字符串有哪些新特性？并实现一个类模板字符串的功能
1. 基本的字符串格式化。
2. 将表达式嵌入字符串中进行拼接。
```
`${a} 123`

let name = 'abc'
let age = 12
let str = '你好，${name},今年${age}'
str.replace(/\$\{([^\}]*)\}/g,(a,b)=>{
  console.log(a)
  console.log(b)
  return eval(b)
})

```


# 介绍下 Set、Map的区别？
应用场景Set用于数据重组，Map用于数据储存Set：　
（1）成员不能重复
（2）只有键值没有键名，类似数组
（3）可以遍历，方法有add, delete,has
Map:
（1）本质上是健值对的集合，类似集合
（2）可以遍历，可以跟各种数据格式转换


# ECMAScript 6 怎么写 class ，为何会出现 class？
```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

```
1. ES6的class可以看作是一个语法糖，它的绝大部分功能ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法

# Promise构造函数是同步执行还是异步执行，那么 then 方法呢？
promise构造函数是同步执行的，then方法是异步执行的

# setTimeout、Promise、Async/Await 的区别
事件循环中分为宏任务队列和微任务队列
其中setTimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行async函数表示函数里面可能会有异步方法，await后面跟一个表达式
async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行

# promise有几种状态，什么时候会进入catch？
3种，pending,fulfilled,reject
在出现异常的情况下进入catch
如果Promise 对象状态变为fulfilled，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

#下面的输出结果是多少
```
window.setTimeout(()=>{
  console.log(5)
},0)
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})


promise.then(() => {
    console.log(3);
})


console.log(4);

1 2 4 3 5
```
# 使用结构赋值，实现两个变量的值的交换
let a = 2,b=3; 
let c = [a,b] = [b,a]

# 设计一个对象，键名的类型至少包含一个symbol类型，并且实现遍历所有key
var s = Symbol('foo');
var k = 'bar';
var o = { [s]: 1, [k]: 1 };
// getOwnPropertyNames获取到String类型的key，getOwnPropertySymbols获取到Symbol类型的key
var keys = Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));

let name = Symbol('name');
let product = {
    [name]:"洗衣机",
    "price":799
};
Reflect.ownKeys(product);

# 下面Set结构，打印出的size值是多少
```
let s = newSet();
s.add([1]);s.add([1]);
console.log(s.size); //2
```

# Promise 中reject 和 catch 处理上有什么区别
1. reject 是用来抛出异常，catch 是用来处理异常
2. reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch
网络异常（比如断网），会直接进入catch而不会进入then的第二个回调

# 使用class 手写一个promise

# 如何使用Set去重
let arr = [12,43,23,43,68,12];
let item = [...new Set(arr)];
console.log(item);//[12, 43, 23, 68]

# 将下面for循环改成for of形式
```
let arr = [11,22,33,44,55];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
答案：
let arr = [11,22,33,44,55];
let sum = 0;
for(value of arr){
    sum += value;
}
```
# 理解 async/await以及对Generator的优势
async await 是用来解决异步的，async函数是Generator函数的语法糖
使用关键字async来表示，在函数内部使用 await 来表示异步
async函数返回一个 Promise 对象，可以使用then方法添加回调函数
当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
async较Generator的优势：
（1）内置执行器。Generator 函数的执行必须依靠执行器，而 Aysnc 函数自带执行器，调用方式跟普通函数的调用一样
（2）更好的语义。async 和 await 相较于 * 和 yield 更加语义化　　
（3）更广的适用性。yield命令后面只能是 Thunk 函数或 Promise对象，async函数的await后面可以是Promise也可以是原始类型的值
（4）返回值是 Promise。async 函数返回的是 Promise 对象，比Generator函数返回的Iterator对象方便，可以直接使用 then() 方法进行调用

#forEach、for in、for of三者区别
forEach更多的用来遍历数组
for in 一般常用来遍历对象或json
for of数组对象都可以遍历，遍历对象需要通过和Object.keys()
for in循环出的是key，for of循环出的是value

# 说一下es6的导入导出模块
导入通过import关键字
导出通过export关键字
export default xxx 单个对象 
export {xx,xx,xx} 多个对象

//可以将export放在任何变量,函数或类声明的前面
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
//也可以使用大括号指定所要输出的一组变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
//使用export default时，对应的import语句不需要使用大括号
let bosh = function crs(){}
export default bosh;
import crc from 'crc';
//不使用export default时，对应的import语句需要使用大括号
let bosh = function crs(){}
export bosh;
import {crc} from 'crc';

# 宏任务和微任务
```
setTimeout(() => console.log('setTimeout1'), 0);  //1宏任务
setTimeout(() => {								//2宏任务
    console.log('setTimeout2');
    Promise.resolve().then(() => {
        console.log('promise3');
        Promise.resolve().then(() => {
            console.log('promise4');
        })
        console.log(5)
    })
    setTimeout(() => console.log('setTimeout4'), 0);  //4宏任务
}, 0);
setTimeout(() => console.log('setTimeout3'), 0);  //3宏任务
Promise.resolve().then(() => {//1微任务
    console.log('promise1');
})


<!-- 这个是错误理解！！！ -->
promise1
setTimeout1
setTimeout2
setTimeout3
promise3
5
setTimeout4
promise4
<!-- 遇到微任务立即执行 -->
promise1
setTimeout1
setTimeout2
promise3
5
promise4
setTimeout3
setTimeout4

```
# 退出循环
https://blog.csdn.net/guanguan0_0/article/details/100152199
1. forEach map无法退出循环
2. every ，return false可替代跳出循环
3. some ，return true可替代跳出循环
4. try catch，throw error 可替代跳出循环