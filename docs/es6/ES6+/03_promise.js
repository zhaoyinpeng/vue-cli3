//请编写一个函数，接收（a,b）两个参数，能够返回a+b
// function sum(a, b) {
//   return a + b
// }
// let m = sum(2, 2)
// console.log(m)

//请编写一个函数，接收（a,b）两个参数，2000ms后能够返回a+b
// function sum2(a, b) { 错误写法
//   setTimeout(function () {
//     return a + b
//   }, 2000)
// }
// let m = sum2(2, 2)
// console.log(m)

// function sum2(a, b, cb) { //回调地狱，callback hell
//   setTimeout(function () {
//     cb(a + b)
//   }, 2000)
// }
// let m = sum2(2, 2, function (m) {
//   console.log(m)
// })

//使用promise 方法
function sum2(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
    }, 2000)
  })
}
let m = sum2(2, 2).then(resolve => {
  console.log(resolve)
  return sum2(4, 5)
}).then(resolve => {
  console.log(resolve)
})

//1.promise是异步编程的一种解决方案。
//2.解决的问题是回调地狱。
// promise有三种状态：pending/reslove/reject 。pending就是未决，resolve可以理解为成功，reject可以理解为拒绝。状态一旦改变，就不会再改成其他状态。
//3.主要方法
// promise.resolve ,参数有四种，
// (1).空值，返回resolve状态的Promise实例
// (2).Promise,返回Promse
// (3).非Thenable对象（对象带有then方法），直接返回值
// (4).Thenable对象，返回执行then方法后的值
var thenable = {
  then: function (resolve, reject) {
    // resolve(42);
    setTimeout(()=>{
      resolve(41);
    },3000)
  }
};
var p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value); // 42
});
// https://www.jianshu.com/p/d8a901dd72ac
//=========promise.all
//=========promise.race
//=========promise.finall
//=========promise.reject 返回状态为reject的promise实例
//=========promise.try