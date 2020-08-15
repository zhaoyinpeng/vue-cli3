/**
局部变量和成员变量
1.位置
局部：在方法中
成员：在方法外，类中
2.作用范围
局部：只有方法中能使用
成员：类中都可以
3.默认值不同
局部：没有默认值，要使用必须手动赋值，才能使用
成员：没有赋值，也有默认值，与之前讲的数组中默认值一样
4.内存位置不同
局部：位于栈中
成员：位于堆中
5.生命周期
局部：跟着方法走，随着方法出栈而消失
成员：跟着对象走，随着对象被垃圾回收而消失
 */
public class Demo{
  Sting name;//成员
  public static void main(String[] args){
    int num = 10;
    System.out.println(num); //10
    System.out.println(name); //null
  }
  private void name(int param) { //方法的参数就是局部变量
    //!!!参数在方法调用时，必然会被赋值的。所以说可以调用
    System.out.println(param);
    int age;
    System.out.println(name); //null
    // System.out.println(age);//报错，不赋值不能用
  }
}