/**
 * 定义年龄时怎么阻止不合理的数据被设置进来
 * 解决方法：使用private（私有）关键字，将需要保护的关键字进行修饰
 * 使用private后，变为私有变量，无法被外界直接访问，可以间接访问。
 * 间接访问就是定义getter和setter
 */
public class Person{
  // int age; //年龄
  private int age; //年龄
  private boolean male; //性别
  public void shuo(String[] args){
    System.out.println("年龄："+age);
  }
  //可以间接访问
  public void setAge(int num){
    age = num;
  }
  public int getAge(int num){
    return age;
  }

  public void setMale(boolean b) {
   male = b; 
  }
  //对于基本类型当中的boolean值，Getter方法一定写成is
  public boolean isMale() {
    return male;
  }
}