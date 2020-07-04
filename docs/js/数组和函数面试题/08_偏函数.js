//高阶函数，是返回函数的函数
function a() {
  return function () {
    console.log(123)
  }
}

//偏函数预定了一些功能，是能够产生一个特定功能函数的高阶函数
//我的理解，它是一个生成函数的工厂
//和柯里化有点像

function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}

let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 偏函数，绑定第一个参数，say的time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow = function(...args) { 我自己的理解
//   function say(time, phrase) {
//     alert(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
//   return say.call(this, new Date().getHours() + ':' + new Date().getMinutes(), ...args);
// }
//调用新函数提供第二个参数phrase
user.sayNow("Hello");
// [10:00] Hello, John!