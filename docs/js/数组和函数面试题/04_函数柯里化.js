//函数柯里化（curry）
//维基百科上说道：柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
function fun(a, b, c, d) {
  return a + b + c + d
}
//现在提供四个参数fun就能工作
fun(3, 4, 5, 6); //18

//如果少传了一个参数,这个函数有原来函数的功能（fn在等待第四个函数）
let fn = fun(3, 4, 5)

// fn(6) //18 这个函数不能柯里化

//让你写一个柯里化函数
function curry(fn) {
  return function () {
    var args = arguments;
    return function () {
      return fn(...args, ...arguments)
    }
  }
}
let fun2 = curry(fun)
let fn2 = fun2(3, 4, 5)
console.log(fn2(6))

//案例 好处是什么
//1.===============参数复用=====================
// 正常正则验证字符串 reg.test(txt)
// 函数封装后
function check(reg, txt) {
  return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
  return function (txt) {
    return reg.test(txt)
  }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false

//2.===============提前确认===================
var on = function (element, event, handler) {
  if (document.addEventListener) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  } else {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  }
}

var on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

//换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
// 我们在做项目的过程中，封装一些dom操作可以说再常见不过，上面第一种写法也是比较常见，但是我们看看第二种写法，它相对一第一种写法就是自执行然后返回一个新的函数，这样其实就是提前确定了会走哪一个方法，避免每次都进行判断。
var on = function (isSupport, element, event, handler) {
  isSupport = isSupport || document.addEventListener;
  if (isSupport) {
    return element.addEventListener(event, handler, false);
  } else {
    return element.attachEvent('on' + event, handler);
  }
}


//3.===============延迟运行===================
Function.prototype.bind = function (context) {
  var _this = this
  //默认会保存后面的参数
  var args = Array.prototype.slice.call(arguments, 1)

  return function () {
    return _this.apply(context, args)
  }
}
//像我们js中经常使用的bind，实现的机制就是Currying.

// ============================================面试题
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  }
  return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9


function add() {
  // var args = Array.from(arguments);
  // var args = [...arguments];
  var _args = Array.prototype.slice.call(arguments);
  var _adder = function(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args)
    _args = _args.concat(args)
    return _adder
    // _args.push(...arguments);
    // console.log(...arguments)
    // return _adder;
  }
  _adder.toString = function(){
    console.log('toString方法')
    return _args.reduce(function (a, b) {
      return a + b;
    });
  }
  return _adder
}

//柯里化又称部分求值，一个柯里化的函数首先会接受一些传参，接受了这些传参之后，函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数内形成的闭包中被保存起来，到参数被真正求值的时候，之前传入的参数会被一次性用于求值。
function func(str) {
  var ret = Array.prototype.slice.call(arguments).join(', ');
  var temp = function (str) {
    ret = [ret, Array.prototype.slice.call(arguments).join(', ')].join(', ');
    return temp;
  };
  temp.toStr = function () {
    return ret;
  };
  return temp;
}
var tempFunc = func("antzone")("softwhy")("com");
console.log(tempFunc.toStr());


//bind源码
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          // 当通过new方法调用时，this就是fNOP的一个实例  
          return fToBind.apply(this instanceof fNOP
                                 ? this
                                 : oThis || this,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}