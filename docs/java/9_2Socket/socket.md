#socket
##客户端
###java.net.Socket（客户端）
* 客户端向服务器发送连接请求，收取返回信息
* 构造函数
* getOutputStream()
* getInputStream()
* 注意：
1. 客户端和服务器交互时，必须使用socket中提供的网络流，不能用自己的。
2. 创建客户端对象Socket的时候，会3次握手创建连接，失败了会抛出异常。ConnectException错误

###java.net.ServerSocket（服务器端）
* 服务器端接受请求
* accept()