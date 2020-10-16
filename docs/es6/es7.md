1. Array.prototype.includes()
includes()作用,是查找一个值在不在数组里,若是存在则返回true,不存在返回false.
- 注意
由于它对NaN的处理方式与indexOf不同，假如你只想知道某个值是否在数组中而并不关心它的索引位置，建议使用includes()。如果你想获取一个值在数组中的位置，那么你只能使用indexOf方法。
2. 求幂运算符
```
//基本用法
3 ** 2  //9
效果同
Math.pow(3, 2) //9

//由于是运算符，所以可以和 +=一样的用法
var b = 3;
b **= 2;
console.log(b); //9
```