/**
当数据类型不同时会发生数据转换
自动类型转换（隐式）
1.不需要特殊处理，自动执行
2.符合从小到大的规则，例如int-->long float-->double
 */
public class HelloWorld{
  public static void main(String[] args){
    //左边是long类型，右边默认是int类型，左右不一样
    long num1 = 100; //右侧可不加L
    System.out.println(num1); //100

    //float --> double 从小到大
    double num2 = 2.5F;
    System.out.println(num2); //2.5
    //long --> float 从小到大
    float num3 = 100F;
    System.out.println(num3); //100.0
    
  }
}

/**
强制类型转换
1. 需要特殊格式处理，不能自动
2. 范围从小到大
格式：
范围小的类型 范围想的变量名 = (范围小的类型) 原来范围大的数据

注意！！！
1.强制类型转换会发生精度损失、数据溢出
2.不推荐使用
3. byte/short/char这三种类型都可以进项数学运算，不过运算前先提升成为int类型，然后再计算

！！编译器的两个好处
！！4.对于 byte/short/char这三种类型来说，如果右侧数值没有超出范围，那么javac编译器会自动隐含地为我们添加一个(byte)(short)(char)。

!!5.byte/short/char这三种类型来说，如果右侧表达式的值都是常量，没有任何变量，那么编译器javac将会直接将右侧表达式计算得到的结果。short d = 3+3; 编译后，得到的.class字节码文件当中相当于【直接就是】：short d = 6;
 */
 public class HelloWorld{
  public static void main(String[] args){
    //左边是int类型，右边long类型，左右不一样
    int num1 = (int) 100L; //右侧可不加L
    System.out.println(num1); //100

    //强制后数据溢出
    //左边是int类型，右边long类型，左右不一样
    int num2 = (int) 6000000000L;
    System.out.println(num2); //溢出 17亿左右

    //double-->int 经度损失
    int num3 = (int) 3.99; //
    System.out.println(num3); //3 这不是四舍五入,小数都舍弃掉了

    char zifu1 = 'A';
    System.out.println(zifu1 + 1); //66 A变成了65 A的阿斯科(ASCII)码65 中文队形unicode码

    byte num4 = 40;
    byte num5 = 50;
    short num6 = 60;
    //byte + byte --> int + int --> int
    // byte res = num4 + num5; //报错 int-->byte
    int res = num4 + num5; //用 int
    System.out.println(res) //90

    short res2 = (short)(num4 + num6)
    System.out.println(res) //100

    // ！！！
    //右侧是int，但是没有超过左侧byte范围，就是正确的。
    // int --> byte,按理论来说是大转小，应该要加上强制类型转换才行，javac编译器默认跟我们补上了一个转换
    byte byte1 = /* (byte) */ 40;
    System.out.println(byte1) //40

    char zifu2 = /* (char) */65;
    System.out.println(zifu2) //A


    //!!!
    short number1 = 10; //正确
    short a = 3;
    short b = 3;
    short c = a + b; //错误写法！左侧需要int型

    //byte/short/char这三种类型来说，如果右侧表达式的值都是常量，没有任何变量，那么编译器javac将会直接将右侧表达式计算得到的结果。short d = 3+3; 编译后，得到的.class字节码文件当中相当于【直接就是】：short d = 6;
    short d = 3+3;
    System.out.println(d); //6
  }
}