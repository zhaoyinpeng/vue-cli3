//生成器 Generator 也叫加星函数
//生成器， 生成迭代器！！！
function * creatIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i] //产生
  }
}
const iterator = creatIterator([3, 2, 4, 4, 5, 345, 345, 345, 36, 345, 242])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//异步加*函数
function sum2(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
    }, 2000)
  })
}
function * main() {
  yield sum2(2, 5)
}
const iterator2 = main()
iterator2.next()
iterator2.next()
iterator2.next()

// 迭代器和for...of
// for...of的步骤
// for-of循环首先调用集合的Symbol.iterator方法，紧接着返回一个新的迭代器对象。
// 迭代器对象可以是任意具有.next()方法的对象!!；
// for-of循环将重复调用这个方法，每次循环调用一次。举个例子，这段代码是我能想出来的最简单的迭代器：

function createIterator(items) {
  var i = 0;
  return {
      next: function() {
          var done = (i >= items.length);
          var value = !done ? items[i++] : undefined;
          return {
              done: done,
              value: value
          };
      }
  };
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// 之后的所有调用
console.log(iterator.next()); // "{ value: undefined, done: true }"
