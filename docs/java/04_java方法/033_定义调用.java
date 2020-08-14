/**
  定义方法
  public static void 方法名() {
    方法体
  }
  完整格式
  修饰符 返回值类型 方法名称（参数类型 参数名称,...){
    方法体
    return 返回值;
  }
  修饰符： public static
  返回值类型：略
  方法名称： 小驼峰
  参数类型：略
  参数名称：小驼峰
  return：结束当前方法，返回值，返回值必须和方法名称前面的返回值类型，保持对应
  注意：
  1. 方法定义的向后顺序无所谓
  2. 方法定义不能产生嵌套包含关系
 */
public class Demo{
  public static void main(String[] args){
    // 调用
    fun1()
    fun2()
  }
  //方法一
  public static void fun1(){
    System.out.println("fun1");
  }

  //方法二
  public static void fun2(){
    System.out.println("fun2");
  }
}