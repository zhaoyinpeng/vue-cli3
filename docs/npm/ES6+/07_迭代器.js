//设计一个机制，可以多次迭代，每次调用next()方法，会返回一个对象结果
function creatIterator(arr) {
  //闭包中的i
  let i = 0
  return {
    next() {
      let done = (i >= arr.length);
      let value = !done ? arr[i++] : undefined
      return {
        done,
        value
      }
    }
  }
}
let iterator = creatIterator([1, 2, 3, 4])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
