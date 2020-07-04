// 不知道用隐式调用来形容是否确切,其行为总是隐藏在背后，时不时出来露脸一下，作用貌似不大，但是了解一下还是有用处的，保不准在你的使用下大有作为。
// 所谓的隐式调用简单来说就是自动调用一些方法，而这些方法像钩子一样可以在外部修改，从而改变既定行为。
// 下面我会列举一些最近看到的隐式调用，例子都是点到即止，欢迎补充

// 1.数据类型转换 toSting 和 valueOf
var obj = {
  a: 1,
  toString: function () {
    console.log('toString')
    return '2'
  },
  valueOf: function () {
    console.log('valueOf')
    return 3
  }
}
console.log(obj == '2'); //依次输出 'valueOf' false
console.log(String(obj)); //依次输出 'toString' '2'
var obj = {
  a: 1,
  toString: function () {
    console.log('toString')
    return '2'
  },
  valueOf: function () {
    console.log('valueOf')
    return 3
  }
}
console.log(obj == '2'); //依次输出 'valueOf' false
console.log(String(obj)); //依次输出 'toString' '2'

var obj = {
  a: 1,
  toString: function () {
    console.log('toString')
    return '2'
  },
  valueOf: function () {
    console.log('valueOf')
    return {} //修改为对象
  }
}
console.log(obj == '2'); //依次输出 'valueOf' 'toString' true
console.log(Number(obj)); //依次输出 'valueOf' 'toString' 2
// 在相等运算符的操作中，对象会先调用 valueOf 如果返回的值是一个对象, 就会调用 toSting， null除外，然后用返回的值进行比较，第一个例子 相当于 3 == '2' 输出 false， 第二个例子由于执行valueOf 返回的是一个对象， 然后执行 toString， 最后相当于 '2' == '2' 输出true在 Number 和 String 方法中 Number会先调用 valueOf, 后调用 toString， String方法中是相反的。
// 数据类型的转换除了上面的两个例子外，还存在在各种其他操作中，如数值运算，当涉及到引用类型时，都会调用valueOf 或 toString 方法，只要是对象都会继承这两个方法,我们可以重新覆盖这两个方法，从而影响数据类型转换的行为

// 2.DOM2事件中的 handleEvent
var eventObj = {
  a: 1,
  handleEvent: function (e) {
    console.log(this, e); //返回 eventObj 和 事件对象
    alert(this.a)
  }
}
document.addEventListener('click', eventObj)
// 你没有看错， addEventListener 第二个参数除了函数外还可以是一个对象, 事件触发后会执行对象的handleEvent方法, 方法执行时的this指向eventObj, 你可以把想传入的数据绑定在eventObj对象上

// 3.JSON对象 toJSON
var Obj = {
  a: 10,
  toJSON: function () {
    return {
      a: 1,
      b: function () {},
      c: NaN,
      d: -Infinity,
      e: Infinity,
      f: /\d/,
      g: new Error(),
      h: new Date(),
      i: undefined,

    }
  }
}
console.log(JSON.stringify(Obj));
//{"a":1,"c":null,"d":null,"e":null,"f":{},"g":{},"h":"2018-02-09T19:29:13.828Z"}
// 如果JSON的stringify方法传入的对象有toJSON方法, 那么该方法执行的对象会转为toJSON执行后返回的对象, 有一点要注意的是， 如下面代码


var Obj1 = {
  a: 10,
  toJSON: function () {
    console.log(this === Obj1); //true
    return this
  }
}
console.log(JSON.stringify(Obj1)); //{"a":10}

var Obj2 = {
  a: 10,
  toJSON: function () {
    console.log(this === Obj2); //true
    return {
      a: this
    }
  }
}
console.log(JSON.stringify(Obj2)); //报错 Maximum call stack size exceeded
// 如果按上面的说法很明显报错是我们所预期的， 但是当直接
// return this 根本没有报错， 不妨可以大胆猜测一下其内部对toJSON返回的对象和原对像进行比较, 如果相等就直接使用原对象

// 4.promise对象的 then
var obj = {
  then: function (resolve, reject) {
    setTimeout(function () {
      resolve(1000);
    }, 1000)
  }
}
Promise.resolve(obj).then(function (data) {
  console.log(data); // 延迟1秒左右输出 1000
})
// 当Promise.resolve方法传入对象时, 如果存在 then 方法会立即执行then方法, 相当于把方法放入new Promise中, 除了Promise.resolve有这个行为外, Promise.all也有这个行为
var timePromise = function (time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time)
  })
}
var timePromise1 = timePromise(1000);
var timePromise2 = timePromise(2000);
var timePromise3 = timePromise(3000);
Array.prototype.then = function (resolve) {
  setTimeout(function () {
    resolve(4000);
  }, 4000)
}
Promise.all([timePromise1, timePromise2, timePromise3]).then(function (time) {
  console.log(time); // 等待4秒左右输出 4000
})
// 5.对象属性存取器 get 和 set
var obj = {
  _age: 100,
  get age() {
    return this._age < 18 ? this._age : 18;
  },
  set age(value) {
    this._age = value;
    console.log(`年龄设置为${value}岁`);
  }
}
obj.age = 1000; //年龄设置为1000岁
obj.age = 200; //年龄设置为200岁
console.log(obj.age); // 18
obj.age = 2; ////年龄设置为2岁
console.log(obj.age); // 2
// 可以看到不管把年龄设置为多少, 我的年龄都是18岁或以下的, 当执行属性存取时实际上是调用对象属性相应的 get set函数， 除了以上写法还有下面的写法

var input = document.createElement('input');
var span = document.createElement('span');
document.body.appendChild(input);
document.body.appendChild(span);
var obj = {
  _age: ''
}
var obj = Object.defineProperty(obj, 'age', {
  get: function () {
    return this._age;
  },
  set: function (value) {
    this._age = value;
    input.value = value;
    span.innerHTML = value;
  }
});
input.onkeyup = function (e) {
  if (e.keyCode === 37 || e.keyCode === 39) {
    return;
  }
  obj.age = this.value
}
// 现在input的value值和obj.age的属性值span的innerHTML值都绑定在一起了


// 6.遍历器接口 Symbol.iterator
var arr = [1, 2, 3];
arr[Symbol.iterator] = function () {
  const self = this;
  let index = 0;
  return {
    next() {
      if (index < self.length) {
        return {
          value: self[index] ** self[index++],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}
console.log([...arr, 4]); //返回 [1, 4, 27, 4]
for (let value of arr) {
  console.log(value); //依次返回 1 4 27
}
// 可以看到凡是调用扩展运算符， 或者使用
// for... of 循环遍历对象都会调用对象的遍历器接口, 像Array, String, Map, Set, TypedArray还有一些类数组对象如arguments, NodeList原生具备了遍历器接口， 而普通对象没有部署这个接口， 如果要让对象能够使用扩展运算符或者for...of循环可以在对象上添加该方法, 也可以在原来具备接口的对象上重写方法, 从而改变其行为