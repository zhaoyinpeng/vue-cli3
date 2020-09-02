# throw关键字
* 作用：
抛出指定异常
* 使用格式
throw new xxxException("异常原因")
* 注意
1. 必须写在方法内
2. 必须new的是Exception或者Exception的子类对象
3. throw关键字必须处理这个异常
* 如果是运行期异常，我们可以交给jvm处理
* 若果是编译器异常，我们需要处理

#throws关键字
* 异常处理的第一种方式，交给别人来处理 
* 注意：
1. throws关键字必须写在方法声明处
2. throws关键字后边生命的一场必须是Exception或者是它的子类
3. 方法内部如果抛出了多个异常对象，那么throws后面必须也声明多个异常，如果抛出的多个异常有父子关系，那么直接声明父类异常即可
4. 调用了一个声明抛出异常的方法，我们必须处理这个异常，要么继续用throws声明抛出，交给方法的调用者处理，最终交给jvm，要么try..catch自己处理
* alt+enter可以选择直接抛出

#try catch
```
try{

}catch(IOException e){
  //e可以执行方法
  1. e.getMessage() 简单描述
  2. e.toString() 和 sout（e）一样 纤细信息字符串
  3. e.printStackTrace() 最详细信息
}
```