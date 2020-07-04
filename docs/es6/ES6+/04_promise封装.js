//封装promise
class Chengnuo {
  constructor(fn) {
    let _this = this
    _this.state = 'pending' //状态码
    _this.resultCB = undefined //成功或者失败时调用的方法then
    let resolve = value => {
      if (_this.state === 'pending') {
        _this.state = 'fulfilled'
        _this.resultCB({
          state: _this.state,
          value
        }, undefined)
      }
    }
    let reject = value => {
      if (_this.state === 'pending') {
        _this.state = 'rejected'
        _this.resultCB(undefined, {
          state: _this.state,
          value
        })
      }
    }
    try {
      fn(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(fun) {
    this.resultCB = fun
  }
}

//使用Chengnuo 方法
function sum2(a, b) {
  return new Chengnuo((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
      // reject(new Error('错误'))
    }, 2000)
  })
}
let m = sum2(5, 2).then((resolve, reject) => {
  console.log(resolve)
  console.log(reject)
  return sum2(4, 5)
}).then((resolve, reject) => {
  console.log(resolve)
  console.log(reject)
})