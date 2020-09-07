/**
 * switch中数据类型只能是
 * 基本数据类型：byte/short/char/int
 * 引用数据类型：String/enum枚举
 */
public class test{
  private static void main() {
    /*long a = 1; //long不行可能损失精度 */
    /* float a = 1.1; //float,double不行可能损失精度 */
    int a = 1;
    switch (a) {
      case 1:  /*case这里的数据是int*/
        System.out.println("1");
        break;
      default:
        break;
    }
  }
}