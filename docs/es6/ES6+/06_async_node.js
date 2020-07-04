let fs = require('fs')
function readFile(url) {
  return new Promise((resolve, reject) => {
    fs.readFile('./haha.txt', function (err, data) {
      if (err) {
        reject(err)
        return
      }
      resolve(data.toString())
    })
  })
}
async function main(){
  console.log('异步函数前')
  let str = await readFile()
  console.log(str)
  console.log('异步函数后')
}
main()
console.log(345)