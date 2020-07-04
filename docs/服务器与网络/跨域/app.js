let http = require('http')
let fs = require('fs')
http.createServer(function (request, response) {
  if (request.url === '/') {
    fs.readFile('./index.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
      response.end(data);
    })
  } else if (request.url === '/data') {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    response.end('Hello World');
  }
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  // response.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });

  // // 发送响应数据 "Hello World"
  // response.end('Hello World\n');
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');