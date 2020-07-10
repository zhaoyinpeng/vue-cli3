/* 请实现一个斐波那契fibonacci函数，要求实现以下功能
斐波那契数列为：[1,1,2,3,5,8,13,21,...]

fibonacci(0)->1
fibonacci(4)->5 */
function fibonacci(count) {
  const arr = [1, 1]
  if (count < 2) {
    return 1
  } else {
    for (let i = 2; i < count; i++) {
      const num = arr[i - 2] + arr[i - 1]
      arr.push(num)
    }
  }
  return arr[arr.length - 1]
}
