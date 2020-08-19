/**
赋值运算符
=
+=
-=
*=
/=
%=

注意：
1.常量不能用
2.复合赋值运算符中隐含了一个强制类型转换
 */
public class Demo{
  public static void main(String[] args){
    System.out.println("Demo");
    byte num = 30;
    // num = num + 5
    // num = byte + int
    // num = int + int
    // num = int
    // num = (byte) int
    num += 5;
    System.out.println(num); //35

  }
}