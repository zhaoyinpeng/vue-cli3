const arr = [0, [1, 4, 5], [[[[1, 3], 5], 2, 34, 5]], 213]
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