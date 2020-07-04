let arr = [1, 435, 23, 54, 123, 4534, 2, 4, 4563]
// js sort()排序
// 不传参数，将不会按照数值大小排序，按照字符编码的顺序进行排序；
var arr7 = ['General', 'Tom', 'Bob', 'John', 'Army'];
var resArr = arr7.sort();
console.log(resArr); //输出   ["Army", "Bob", "General", "John", "Tom"]

var arr2 = [30, 10, 111, 35, 1899, 50, 45];
var resArr2 = arr2.sort();
console.log(resArr2); //输出   [10, 111, 1899, 30, 35, 45, 50]
// 2.传入参数，实现升序，降序；
var arr3 = [30, 10, 111, 35, 1899, 50, 45];
arr3.sort(function (a, b) {
  return a - b;
})
console.log(arr3); //输出  [10, 30, 35, 45, 50, 111, 1899]

var arr4 = [30, 10, 111, 35, 1899, 50, 45];
arr4.sort(function (a, b) {
  return b - a;
})
console.log(arr4); //输出 [1899, 111, 50, 45, 35, 30, 10]
//冒泡排序 
//时间复杂度O((n²-n)/2)
function bubbleSort(arr) {
  let _arr = [].concat(arr)
  for (let i = 0; i < _arr.length - 1; i++) {
    for (let j = 0; j < _arr.length - 1 - i; j++) {
      if (_arr[j] > _arr[j + 1]) {
        let temp = _arr[j]
        _arr[j] = _arr[j + 1]
        _arr[j + 1] = temp
      }
    }
  }
  return _arr
}
console.log('冒泡排序：' + bubbleSort(arr))

//快速排序 二分法
//时间复杂度O(nlogn)
function quickSort(arr) {
  //停止自身迭代
  if (arr.length <= 1) {
    return arr
  }
  //标杆
  const pivot = arr[0]
  //比标杆大的
  let bigger = []
  //比标杆小的
  let smaller = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      bigger.push(arr[i])
    } else {
      smaller.push(arr[i])
    }
  }
  return quickSort(smaller).concat(pivot, quickSort(bigger))
}
console.log('快速排序法：' + quickSort(arr))


//插入排序
let ary = [123, 3, 4, 5, 2345, 34234, 131, 123, 234, 1233]

function insert(ary) {
  //1.抓牌，放入左手中，先创建一个新数组，储存牌
  let handle = []
  handle.push(ary[0])
  //2.将第一张牌放入左手后，开始依次抓牌
  for (let i = 1; i < ary.length; i++) {
    //3. A是新抓的牌，它要和左手中的每张牌进行比较（从后向前比，也可逆向）
    const A = ary[i];
    for (let j = handle.length - 1; j >= 0; j--) {
      const B = handle[j];
      if (A > B) {
        handle.splice(j + 1, 0, A)
        break
      }
      //已经比到第一项了
      if (j === 0) {
        handle.unshift(A)
      }
    }
  }
  return handle
}
console.log('插入排序法：' + insert(ary))