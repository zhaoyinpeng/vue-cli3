//基本类型值：string、number、bollean、undefined (null) (Symbol)
//引用类型值：Array、object、function、regexp
let a = 3
const b = a
a++
console.log(b)

const c = [1, 2, 3]
const d = c
c.push(4)
console.log(d)
