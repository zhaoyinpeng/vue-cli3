// https://www.jianshu.com/p/ef93ac41b511
// 1.Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 "symbol"
// 2.Symbol 函数前不能使用 new 命令，否则会报错
// 3.instanceof 的结果为 false
// 4.Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述
// 5.如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串
// 6.Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的
// 7.Symbol 值不能与其他类型的值进行运算，会报错。
// 8.Symbol 值可以显式转为字符串。
// 9.Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。
// 10.Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。
// 11.如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
// 12.Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。

