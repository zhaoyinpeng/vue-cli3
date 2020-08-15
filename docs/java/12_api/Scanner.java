package api;

import java.util.Scanner; //导包

/*
Scanner类：可实现键盘输入数据，到程序当中
步骤

1.导包
import包路径.类名称;
2.创建
类名称 对象名 = new 类名称()
3.使用
对象名.成员方法名()
 */
public class ScannerDemo {
    public static void main(String[] args) {
//        创建 System.in获取键盘输入
        Scanner sc = new Scanner(System.in);
        //使用
        //获取键盘输入的一个int数字
        int num = sc.nextInt();
        System.out.println("输入的Int数字是：" + num);
        //获取键盘输入的字符串
        String str = sc.next();
        System.out.println("输入的String是：" + str);

//        匿名函数对象方式
        int num2 = new Scanner(System.in).nextInt();
        System.out.println("输出" + num2);
        //匿名对象也可以当参数和返回值，案例略
    }
}
