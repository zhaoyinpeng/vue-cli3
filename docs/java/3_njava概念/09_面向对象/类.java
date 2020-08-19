/**
创建一个类
这个类要模拟现实中的事物
事物有属性和行为
例如学生
属性
name
age
行为
eat
sleep
在java中
成员变量（属性）
！！注意直接定义在类中，方法外
String name;
  int age;
成员方法（行为）
!!注意没有static关键字，这里成员方法
public void eat(){}
public void sleep(){}
 */
public class Student{
  //成员变量
  String name;
  int age;
  // 成员方法
  public void eat(){
    System.out.println("吃饭");
  }
  public void sleep() {
    System.out.println("睡觉");
  }
}

// 通常情况下，类不能直接，需要创建一个对象
// !!!对象创建和使用
/* 步骤
 1.导包:指出需要使用的类在哪里
import 包名称.类名称；
import zyp.demo01.Array; //一个java类
对于和当前类属于同一个包的情况，可以省略导包语句
 2.创建
 类名称 对象名 = new 类名称();
 Student stu = new Student();
 3.使用
 使用成员变量：对象名.成员变量名 例stu.name
 使用成员方法：对象名.成员方法名(参数) 例stu.sleep()
 */
