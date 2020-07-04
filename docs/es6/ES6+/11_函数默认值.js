//函数默认值得判断条件是undefined
// 默认值会形成暂时性死区


//默认参数和arguments的面试题
// function fun(a,b){
//   console.log(a === arguments[0]) //true
//   console.log(b === arguments[1]) //true
//   a = 123;
//   b = 234;
//   console.log(a === arguments[0]) //true
//   console.log(b === arguments[1]) //true
// }
// fun(2,3)

// function fun(a,b){
//   'use strict';
//   console.log(a === arguments[0]) //true
//   console.log(b === arguments[1]) //true
//   a = 123;
//   b = 234;
//   console.log(a === arguments[0]) //false
//   console.log(b === arguments[1]) //false
// }
// fun(2,3)

//默认参数 !!!!!!!!!!!!!!!!!!!!!!!有了默认参数时，a,b变了不会对arguments造成影响，这里的arguments跟传入的参数数量有关
function fun(a, b = 4) {
  // 'use strict'; //报错不能用
  console.log(arguments.length) //1
  console.log(a === arguments[0]) //true
  console.log(b === arguments[1]) //false
  a = 123;
  b = 234;
  console.log(a === arguments[0]) //false
  console.log(b === arguments[1]) //false
}
fun(233)


//!!!!!!暂时性死区
//后面的参数可以用前面的值，b可以用a，但是前面的参数不能用后面的值
function add(a = b, b) {
  return a + b
}
console.log(add(3, 4)) //7
// console.log(add(undefined, 4)) //报错