/**
四则运算符：
加: +
减: -
乘: *
除: /
取模（去余数）: %

注意：
1. 运算当中有不同的类型数据，结果会是数据类型范围大的那种 long+int-->long
2. 注意 char/byte/short 会转化为int
3. 字符串变量加法，用于连接操作
 */
public class Demo{
  public static void main(String[] args){
    int a = 10;
    int b = 3;
    System.out.println(20+30);
    System.out.println(20-30);
    System.out.println(a*30);
    System.out.println(20*30);
    
    
    System.out.println(a/b); //3
    System.out.println(a%b); //1

    //字符串加法
    String str1 = "hello";
    System.out.println(str1);
    System.out.println(str1 + "world");

    //String + int --> String
    System.out.println(str1 + 10); //hello10
    System.out.println(str1 + 10 + 20); //hello1020
  }
}