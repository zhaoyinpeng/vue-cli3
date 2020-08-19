<!-- 实例共享同一类数据 -->
package staticInfo;

import com.sun.xml.internal.ws.addressing.WsaActionUtil;

/**
 * static修饰成员属性
 * 1.如果一个成员变量使用static关键字，那么这个变量不再属于对象自己，而是属于所在的类。多个对象共享同一份数据。
 * 2.每个对象都可以直接访问，直接改。
 * <p>
 * static修饰成员方法
 * 1.一个成员方法使用static关键字，那么这个变量不再属于对象自己，而是属于所在的类。
 * 2.如果没有static关键字，那么必须首先创建对象，然后通过对象才能使用它。
 * 3.如果有static关键字，那么不需要创建对象，直接就能通过类名称来使用。
 *
 * 注意：
 * 1.有static关键字，都推荐使用类名称进行调用。
 * 静态变量：类名称.静态变量
 * 静态方法：类名称.静态方法（）
 * 2.！！静态只能直接访问静态，不能直接访问非静态（静态属性赋值，静态方法调用）。
 * 原因：因为在内存中是【先】有静态内容，【后】有非静态内容
 * 3.！！静态方法当中不能用this。
 * 原因：this代表当前对象，通过谁调用的方法，谁就是当前对象。
 *
 * 内存中：
 * 静态变量全程和实例没有关系，他在方法区中。方法区中有静态空间，存放静态类和方法。
 * 改变静态属性时直接改方法区中的静态区中的值。
 *
 *
 *
 */

public class StaticDemo {
    private int id; //学号
    private String name;
    private int age; //
    //这里静态static每个实例都可以改变 static修饰成员属性
    static String room; //所在教室
    private static int idCounter = 0; //学号计数器

    public StaticDemo() {
        this.id = ++idCounter;
    }

    public StaticDemo(String name, int age) {
        this.name = name;
        this.age = age;
        this.id = ++idCounter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    //静态成员方法
    public void method() {
        //创建对象后才能使用,如下
//        StaticDemo obj = new StaticDemo();
//        obj.method();
        System.out.println("成员方法");
    }

    public static void methodStatic() {
        //静态方法可以创建对象后调用，也可以直接通过类名称来调用
        // StaticDemo obj = new StaticDemo();
        // obj.methodStatic(); 不推荐 在javac编译后，还是会变成下面的那种方法
        // StaticDemo.methodStatic() 推荐
        System.out.println("静态方法");


        //!!!静态只能直接访问静态，不能直接访问非静态。
        //System.out.println(name); 报错，不能直接访问非静态

        //！！！静态方法当中不能用this
        //System.out.println(this); 报错

    }
}
