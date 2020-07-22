/* 模块作用
  1.模块间通信
  2.系统中某个类的对象只存在一个
  3.保护自己的属性和方法
*/

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
