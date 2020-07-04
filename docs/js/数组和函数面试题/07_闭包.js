//闭包，函数能够记住自己定义时候的所在作用域，哪怕这个函数被放在其他地方执行
function fun() {
  a = 10
  console.log(a)
}
var a = 20
fun() //10

//！！！！！！！！！！！！！！！震惊
var b = 'b'
function funa() {
  console.log('funa',this) //window
  console.log(this.b)
}
(function (fn) {
  console.log('fn',this) //window
  var b = 'bbb'
  // var c = 'ccc'
  this.ccc = 'cccccc'
  fn() //b
})(funa);
// console.log(c) //报错
console.log(ccc) ///cccccc

//！！！！！！！！！！！！！！！震惊 也是b
var b = 'b'
var c = function() {
  console.log(b)
}
(function (fn) {
  var b = 'bbb'
  fn() //b
})(c);

//！！！！！！！！！！！！！！！震惊 也是b
let b = 'b'
let c = function() {
  console.log(b)
}
(function (fn) {
  let b = 'bbb'
  fn() //b
})(c);

//1.理解 这考的有点不像是闭包
function funa() {
  console.log(b)
}
(function (fn) {
  var b = 'bbb'
  fn() //直接报错
})(funa);


function funa() {
  console.log(b)
}
(function () {
  var b = 'bbb'
  funa() //bbb
})();