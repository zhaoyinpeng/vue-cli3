function a(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000);
  })
}
a(1, 2).then(data => {
  console.log(data)
})
function* generator(){
  yield a(1,2)
}
let iterator = generator()
iterator.next()
iterator.next()
iterator.next()