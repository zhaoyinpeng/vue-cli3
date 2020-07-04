// 创建一个的对象
function Store() {
  this.action = function () { //this指向，不确定
    console.log('vue store')
  }
}
// let a = new Store() //这时this指向a
//创建一个静态方法
Store.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new Store()
    }
    return instance
  }
})()
