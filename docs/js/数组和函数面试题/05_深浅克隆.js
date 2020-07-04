//浅克隆
let arr = [1, 2, 3, [12, 3]]
let _arr = []

for (let i = 0; i < arr.length; i++) {
  _arr.push(arr[i]);
}
console.log(_arr)

//深克隆
function deepClone(o) {
  let type = typeof o
  if (type == "string" || type == "number" || type == "boolean" || type == "undefined") {
    return o
  } else if (Array.isArray(o)) {
    let _arr = []
    for (let i = 0; i < o.length; i++) {
      _arr.push(deepClone(o[i]))
    }
    return _arr
  } else if (type == 'object') {
    let _o = {}
    for (const key in o) {
      _o[key] = deepClone(o[key])
    }
    return _o
  }
}
console.log(deepClone(arr))