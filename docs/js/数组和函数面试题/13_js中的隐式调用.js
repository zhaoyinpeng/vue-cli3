// JavaScript中valueOf函数与toString方法深入理解
// https://www.cnblogs.com/aNd1coder/archive/2013/03/09/2951959.html

//基本上，所有JS数据类型都拥有这两个方法，null和undefined除外。它们俩解决javascript值运算与显示的问题。
var bbb = { 
  i:10, 
  toString:function () { 
      console.log('toString'); 
      return this.i; 
  }, 
  valueOf:function () { 
      console.log('valueOf'); 
      return this.i; 
  } 
}; 
alert(bbb);// 10 valueOf 
alert(+bbb); // 10 valueOf 
alert('' + bbb); // 10 valueOf 
alert(String(bbb)); // 10 toString 
alert(Number(bbb)); // 10 valueOf 
alert(bbb == '10'); // true valueOf 
alert(bbb === '10'); // false

//乍一看结果，大抵给人的感觉是，如果转换为字符串时调用toString方法，如果是转换为数值时则调用valueOf方法，但其中有两个很不和谐。一个是alert(''+bbb)，字符串合拼应该是调用toString方法，另一个我们暂时可以理解为===操作符不进行隐式转换，因此不调用它们。为了追究真相，我们需要更严谨的实验。

var aa = {
  i: 10,
  toString: function() {
      console.log('toString');
      return this.i;
  }
};

alert(aa);// 10 toString
alert(+aa); // 10 toString
alert(''+aa); // 10 toString
alert(String(aa)); // 10 toString
alert(Number(aa)); // 10 toString
alert(aa == '10'); // true toString

var bb = {
  i: 10,
  valueOf: function() {
      console.log('valueOf');
      return this.i;
  }
};

alert(bb);// 10 valueOf
alert(+bb); // 10 valueOf
alert(''+bb); // 10 valueOf
alert(String(bb)); // [object Object]
alert(Number(bb)); // 10 valueOf
alert(bb == '10'); // true valueOf

//发现有点不同吧？！它没有像上面toString那样统一规整。对于那个[object Object]，我估计是从Object那里继承过来的，我们再去掉它看看。
Object.prototype.toString = null;
var cc = {
  i: 10,
  valueOf: function() {
    console.log('valueOf');
    return this.i;
  }
}
 
alert(cc);// 10 valueOf
alert(+cc); // 10 valueOf
alert(''+cc); // 10 valueOf
alert(String(cc)); // 10 valueOf
alert(Number(cc)); // 10 valueOf
alert(cc == '10'); // true valueOf

//应用 柯里化
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
add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
