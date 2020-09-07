/**
 * 构造方法时专门用与创建对象的方法，当我们通过关键字new来创建对象时，其实就是在调用构造方法。
 * 格式：
 * public 类名称（参数类型 参数名称）{
  方法体
  }
 * 注意事项：
 * 1.构造方法的名称必须和所在类的名称完全一样。
 * 2.构造方法不要写返回值类型，练void都不写。
 * 3.不能return一个具体的返回值
 * 4.如果没有编写任何构造方法，那么编译器会默认赠送一个构造方法，没有参数、方法体什么事情都不做。
 * 5.一旦编写了至少一个构造方法，编译器就不赠送了。
 * 6.构造函数也可以进行重载
 */
// 定义
public class Demo{
  private string name;
  //无参数构造方法
  public Demo(){
    System.out.println("构造函数创建Demo");
  }
  //全参数构造方法
  //两个构造函数，重载了
  public Demo(String name){
    this.name = name;
  }
}

// 使用
public class use{
  public Demo(){
    Demo demo = new Demo();
    Demo demo2 = new Demo("123");
  }
}