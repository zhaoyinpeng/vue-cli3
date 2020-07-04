/**
 * 原型及原型链
 * */
//万物皆对象 对象皆为空 除了null之外，除了null其他数据类型都有原型
// 前提：原型是一个对象，其他的对象可以通过原型实现属性继承，但是除了prototype
const arr = [1, 2]
const obj = {}
const fun = function () {}
console.dir(arr)
console.dir(obj)
console.dir(fun)

// __proto__是每个对象都有的属性，他不是一个规范的属性，大多数情况下__proto__可以理解为其构造器的 原型，及__proto__===constructor.prototype
//prototype是函数才有的属性
