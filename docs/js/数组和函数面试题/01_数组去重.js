const arr = [1,'1',2,3,1,2,3,1,413,1,43,2]
//方法一
// const set =new Set(arr)
// console.log([...set])
//方法二
//时间复杂度：O(n)
function uniq(arr){
  let _result = []
  for (let i = 0; i < arr.length; i++) {
    if(!_result.includes(arr[i])){
      _result.push(arr[i])
    }
  }
  return _result;
}
console.log(uniq(arr))