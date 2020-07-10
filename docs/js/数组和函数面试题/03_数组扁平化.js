// 第一种
const arr = [0, [1, 4, 5],
  [
    [
      [
        [1, 3], 5
      ], 2, 34, 5
    ]
  ], 213
]

function flattenArray(arr) {
  let _arr = []
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      _arr.push(arr[i])
    } else {
      _arr = _arr.concat(flattenArray(arr[i]))
    }
  }
  return _arr
}
console.log(flattenArray(arr))

// 第二种 es6flat
let arr2 = [0, [1, 4, 5],
  [
    [
      [
        [1, 3], 5
      ], 2, 34, 5
    ]
  ], 213
]
arr2 = arr2.flat(Infinity)
console.log(arr2)

//第三种 toString
let arr3 = [0, [1, 4, 5],
  [
    [
      [
        [1, 3], 5
      ], 2, 34, 5
    ]
  ], 213
]
arr3 = arr3.toString().split(',').map(item => parseFloat(item))
console.log(arr3)

//第四种 JSON.stringify
let arr4 = [0, [1, 4, 5],
  [
    [
      [
        [1, 3], 5
      ], 2, 34, 5
    ]
  ], 213
]
arr4 = JSON.stringify(arr4).replace(/(\[|\])/g, '').split(',').map(item => parseFloat(item))
console.log(arr4)

// 第五种 while
let arr5 = [0, [1, 4, 5],
  [
    [
      [
        [1, 3], 5
      ], 2, 34, 5
    ]
  ], 213
]
while (arr5.some(item => Array.isArray(item))) {
  arr5 = [].concat(...arr5)
}
console.log(arr5)
