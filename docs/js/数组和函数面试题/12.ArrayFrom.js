//Array.from方法
//一.简介
/**
 * 在开始之前，我们先回想一下 Array.from() 的作用。语法:
 * Array.from(arrayLike[, mapFunction[, thisArg]])
 * 
 * arrayLike：必传参数，想要转换成数组的伪数组对象或可迭代对象。
 * mapFunction：可选参数，mapFunction(item，index){...} 是在集合中的每个项目上调用的函数。返回的值将插入到新集合中。
 * thisArg：可选参数，执行回调函数 mapFunction 时 this 对象。这个参数很少使用。
 */
// 二.用法
//1.类数组对象 转换成数组！
const someNumbers = { '0': 10, '1': 15, length: 3 };//注意这里的length属性！！！
Array.from(someNumbers, value => value * 2); // => [20, 30]
Array.from('Hey');                   // => ['H', 'e', 'y']
Array.from(new Set(['one', 'two'])); // => ['one', 'two']
const map = new Map();
map.set('one', 1)
map.set('two', 2);
Array.from(map); // => [['one', 1], ['two', 2]]

//2.克隆一个数组
const numbers = [3, 6, 9];
const numbersCopy = Array.from(numbers);
numbers === numbersCopy; // => false

//3.使用值填充数组
const length = 3;
const init   = 0;
const result = Array.from({ length }, () => init);
result; // => [0, 0, 0]
//替代方案
const length = 3;
const init   = 0;
const result = Array(length).fill(init);
fillArray2(0, 3); // => [0, 0, 0]

//4.生成数字范围
function range(end) {
  return Array.from({ length: end }, (_, index) => index);
}
range(4); // => [0, 1, 2, 3]

//5.数组去重 ?
function unique(array) {
  return Array.from(new Set(array));
}
unique([1, 1, 2, 3, 3]); // => [1, 2, 3]



