//生成器 Generator 也叫加星函数
//生成器， 生成迭代器！！！
function* creatIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i] //产生
  }
}
let iterator = creatIterator([3, 2, 4, 4, 5, 345, 345, 345, 36, 345, 242])
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
function* main() {
  yield sum2(2, 5)
}
let iterator2 = main()
iterator2.next()
iterator2.next()
iterator2.next()