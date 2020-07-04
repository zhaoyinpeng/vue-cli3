// 执行WriteNumber时，其作用域内并没有找到声明过的变量i，直接对i进行赋值，则隐式的将i声明为全局变量，（!!!!对于函数内部未声明过的变量，如果给它赋值，会隐式的将它声明为全局变量。!!!!） 循环开始，i = 1，调TenTimes方法，发现TenTimes方法也没有声明过变量i ，所以TenTimes里的i就是全局变量i，就和WriteNumber的i成了同一个。  这时line9 alert出来的自然是1了。TenTimes循环了10次，使得全局的i变成了11，自然WriteNumber就不会执行第2次循环操作了。
//情况一
function WriteNumber() {
  for (i = 1; i <= 10; i++) {
    console.log(TenTimes(i))
  }
}
function TenTimes(v) {
  var result = 0;
  alert(i);
  for (i = 1; i <= 10; i++) {
    result += v;
  }
  return result;
}
WriteNumber(); //结果 alert(1) 页面console.log(10)
alert(i) //这里是12 10+两次++

//情况二
// WriteNumber声明了i变量，即line3: var i=1，TenTimes未声明i变量，即line10: i=1。

// 　　运行结果：line9 alert(i)处报i未定义错误 ，因为WriteNumber有声明过变量i，所以没有成为全局的i，TenTimes执行时又没有声明过i，所以报未定义。若注释掉line9，输出结果正确。因为当TenTimes里运行到i=1时，隐式将i声明是全局变量，不影响WriteNumber里的i。WriteNumber仍然会执行10次循环。

// 　　验证：如果在WriteNumber();语句后加alert(i)，即取消line16的注释，会发现alert出11（11=10+TenTimes里的i++），证明了此时有windows.i。
function WriteNumber() {
  for (var i = 1; i <= 10; i++) {
    console.log(TenTimes(i))
  }
}
function TenTimes(v) {
  var result = 0;
  // alert(i); //报错未定义i
  for (i = 1; i <= 10; i++) {
    result += v;
  }
  return result;
}
WriteNumber(); //结果 页面console.log(10，20,30,40,50,60,70,80,90,100)
alert(i) //这里是11 10+一次++


//变量提升面试题
console.log(a);//function a(){}
console.log(b);//undefined
var a = 1;
function a() { }
var b = function () { };
console.log(a)//1

//!!!!做错了
console.log(a);//function a(){}
console.log(b);//undefined
function a() { }
var a = 1;
var b = function () { };
console.log(a)//1

var a = 10;
(function () {
  console.log(a) //undefined
  a = 5
  console.log(window.a) //10
  var a = 20;
  console.log(a) //20
})()

//!!!!做错了
if ("a" in window) {
  var a = 10;
}
console.log(a); //10

//!!!!做错了
function test() {
  if ("a" in window) {
    var a = 10;
  }
  console.log(a);
}

test();//undefined

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar()//10

//!!!做错
function Foo() {
  getName = function () {
    console.log("1");
  };
  return this;
}
Foo.getName = function () {
  console.log("2");
};

Foo.prototype.getName = function () {
  console.log("3");
};

var getName = function () {
  console.log("4");
};
function getName() {
  console.log("5");
}
Foo.getName();  //!3 //2
getName(); //4
Foo().getName();   //!3 //1
getName(); //!4 //1
new Foo.getName(); //!3 //2
new Foo().getName(); //3
new new Foo().getName(); //!报错 //3

// ******真正的解析*********
function Foo() {
  getName = function () {
    console.log("1");
  };
  return this;
}
// var getName;被下面的getName函数忽略掉
function getName(){
  console.log("5");
}
Foo.getName = function() {
  console.log("2");
};

Foo.prototype.getName = function () {
  console.log("3");
};

getName = function() {
  console.log("4");
};

Foo.getName();//2
getName();//4
Foo().getName(); // 1 //(Foo()).getName();执行了Foo()方法相当于执行了window.getName = functon(){console.log(1);}，全局getName变量被重写  return this;this就是window啊！，执行了window.getName(),那就是1啊！
getName(); //1
//https://www.bilibili.com/video/BV1At41137DG?p=2
//解析 首先需要理解，暂且讲内存分为栈内存（用于存储值类型变量，或引用变量指代的堆内存地址）和堆内存（引用变量真正的值所在位置！）
// 1. var p = new Person('zs', 18, 1000)，相当于在栈内存中放置了变量p，和它指代的堆内存指针(例如地址为0x110),在堆内存中放置了new Person('zs',18,1000)这个实例,console.log(p.name)直接找栈内存对应的堆内存中的实例，输出‘zs’
// 2. 看上面的案例
new Foo.getName(); //2 //.的优先级大于new所以转化为 **new (Foo.getName)()** 接下来，就相当于new (function(){console.log(2)})()，new 一个函数时就会执行这个函数，并生成实例对象
new Foo().getName(); //3 //.的优先级最高然后就转换成 (new Foo()).getName() --> foo.getName()(ps:foo是Foo的实例对象) -->找到Foo原型链中的方法 就是Foo.prototype.getName
//这里就涉及到实例对象找方法了，默认是先从自身找，找不到的话，就从隐式原型里中找，就是__proto__,如果还没有就会找Object中的属性
new new Foo().getName();//3 //new (new Foo()).getName() -->new ((new Foo()).getName)() -->new (foo.getName)()

//考点: // 1.变量提升
        // 2.this指向问题 
        // 3.变量查找规则，如果函数中为定义变量，就找全局 
        // 4.变量优先级,.的优先级最高，new Foo.getName()-->new (Foo.getName)() 
        // 但是如果.遇到(), new Foo().getName()--> (new Foo()).getName() --> ((new Foo()).getName)()
        // 5.实例属性的访问规则，隐式原型链__proto__


//新面试题4.17 值类型和引用类型传递
var num1 = 55;
var num2 = 66;
function f1(num, num1) {
  // let num = 55;
  // let num1 = 66;
  num = 100;
  num1 = 100;
  num2 = 100; //window.num2 = 100

  console.log(num); //100
  console.log(num1); //100
  console.log(num2) //100
}
f1(num1, num2)
console.log(num1); //55
console.log(num2); //100
console.log(num); //报错

//面试2 !!!!!!!!!!!!!!!!!!!卧槽，重要的基础啊
function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary
}
function f1(person) {
  //var person //首先在栈内存中创建了person这个变量
  //person = p //传入的值p,就相当于把指针赋值给了person，此时person中存储的其实是指向堆内存的指针(例如地址为0x110)
  person.name = 'ls'; //此时这个是将person指针指向的0x110堆内存中的实例的name值修改为‘ls’
  person = new Person('aa', 19, 10); //这个相当于在堆内存中又添加了new Person('aa', 19, 10)实例，(例如地址为0x111)，此时是将person变量里面的指针从0x110改为0x111，对变量p指针无影响！！！！！
  //因此p.name无变化
}
var p = new Person('zs', 18, 1000)
console.log(p.name) //zs
f1(p)
console.log(p.name) //aa ??? ls
