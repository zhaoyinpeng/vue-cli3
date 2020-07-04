/* ...
1.剩余参数
2.强制展开运算符 
*/
// 1
function fun(a, ...b) {
  console.log(a)
  console.log(b)
}
fun(1, 2, 3, 4)

// 2 强制展开这个数组
let arr = [2, 3, 4, 5, 234, 34, 123]
console.log(Math.max.apply(null, arr))
console.log(Math.max(...arr))

//使用方法
//1.浅拷贝
let a = {a:1,b:2}
let b = {...a}

var arr = [1,2,3];
var arr2 = [...arr]; // 和arr.slice()差不多


//2.Object.assign({},obj)
let c = {a:123,b:456}
let d = {a:456}
let e = {...c,...d} //{a:456,b:456}

//3.合并数组
arr1.push(...arr2) // 将arr2 追加到数组的末尾
arr1.unshift(...arr2)

//4.不使用Apply的函数调用
function doStuff (x, y, z) { }
var args = [0, 1, 2];
// 调用函数，传递args参数
doStuff.apply(null, args);

doStuff(...args);
