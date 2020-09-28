//设计一个机制，可以多次迭代，每次调用next()方法，会返回一个对象结果

// 迭代器是一种特殊对象，它具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都返回一个结果对象。结果对象有两个属性：
// 一个是value，表示下一个将要返回的值；
// 另一个是done，它是一个布尔类型的值，当没有更多可返回数据时返回true。
// 迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next()方法，都会返回下一个可用的值

// 如果在最后一个值返回后再调用next()方法，那么返回的对象中属性done的值为true，属性value则包含迭代器最终返回的值，这个返回值不是数据集的一部分，它与函数的返回值类似，是函数调用过程中最后一次给调用者传递信息的方法，如果没有相关数据则返回undefined

function creatIterator(arr) {
  //闭包中的i
  let i = 0
  return {
    next() {
      const done = (i >= arr.length)
      const value = !done ? arr[i++] : undefined
      return {
        done,
        value
      }
    }
  }
}
const iterator = creatIterator([1, 2, 3, 4])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
