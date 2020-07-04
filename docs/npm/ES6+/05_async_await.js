//使用promise 方法
function sum2(a, b, time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
    }, time)
  })
}
async function main(time = 2000) {
  const m = await sum2(3, 4, time).then(data => data)
  console.log(m)
}
main()

//与Generator函数十分类似，就是生成器函数的语法糖
 

//1.await函数会返回一个promise对象
async function fun1() {
  return await sum2(...arguments)
}
fun1(4, 5).then(res => {
  console.log('1', res)
})

//2.任意类型函数转换成async声明
const fun2 = async (...args) => {
  return await sum2(...args)
}
fun2(1, 1).then(data => {
  console.log('fun2', data)
});

// 类里使用
class API {
  async fun2() {
    return await sum2(1, 2)
  }
}
let api = new API()
api.fun2().then(data => {
  console.log('fun2', data)
});
//3.nodejs或者浏览器环境在顶级作用域下使用async是非法的
!(async () => { //***这里如果不加！号会报错！！！！！！***
  const m = await sum2(2, 2).then(data => data)
  console.log('fun3', m)
})()

//4.try catch处理错误
function sum4(a, b, time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('出错')
    }, time)
  })
}
async function fun4() {
  try {
    const m = await sum4(3, 4).then(data => data)
    console.log('fun4', m)
  } catch (error) {
    console.log('fun4', error)
  }
}
fun4()
//5.多个请求
//https://www.cnblogs.com/JRliu/p/9004304.html
async function main5(a, b, time = 2000) {
  const m = await sum2(a, b, time).then(data => data)
  return await m
}
const fun5_1 = async () => {
  //串行====时间为4000ms以上
  console.time('fun5_1')
  let a1 = await main5(1, 1, 2000) //这里遇到了await就开始执行异步了，后面的代码都会延后执行，所以是串行
  let a2 = await main5(1, 2, 2000)
  console.log('fun5_1', a1)
  console.log('fun5_1', a2)
  console.timeEnd('fun5_1')
  //串行====时间为4000ms以上
}
const fun5_2 = async () => {
  //并行====时间为3000ms以上
  console.time('fun5_2')
  let p1 = main5(1, 1, 3000) //这里先生成所有 promise 实例
  let p2 = main5(1, 2, 1000)
  let r1 = await p1
  let r2 = await p2
  console.log('fun5_2', r1)
  console.log('fun5_2', r2)
  console.timeEnd('fun5_2')
  //并行====时间为3000ms以上
}
//promise.all实现并行
const fun5_3 = async () => {
  //并行====时间为3000ms以上
  console.time('fun5_3')
  let p1 = main5(1, 1, 3000)
  let p2 = main5(1, 2, 1000)
  let [r1, r2] = await Promise.all([p1, p2])
  console.log('fun5_3', r1)
  console.log('fun5_3', r2)
  console.timeEnd('fun5_3')
  //并行====时间为3000ms以上
}
fun5_1()
fun5_2()
fun5_3()

//6.循环中使用async await
const fun6_1 = async () => {
  //串行====时间为6000ms以上
  console.time('fun6_1')
  let paramsList = [
    [1, 2, 4000],
    [2, 3, 2000]
  ]
  for (const p of paramsList) {
    let res = await main5(...p)
    console.log('fun6_1', res)
  }
  console.timeEnd('fun6_1')
  //串行====时间为6000ms以上
}
const fun6_2 = async () => {
  //并行====时间为1000ms以上
  console.time('fun6_2')
  let paramsList = [
    [1, 2, 1000],
    [2, 3, 1000]
  ]
  let promiseList = paramsList.map(x => main5(...x))
  //循环串行
  for (const p of promiseList) {
    let res = await p
    console.log('fun6_2', res)
  }
  //循环串行
  console.timeEnd('fun6_2')
  //并行====时间为1000ms以上
}
fun6_1()
fun6_2()