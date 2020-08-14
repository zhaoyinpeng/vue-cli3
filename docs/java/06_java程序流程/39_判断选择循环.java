/**
  判断 if else
  选择注意事项：
  1. 不能重复
  2. 小括号中只能是下列数据类型：
  基本数据类型：byte/short/char/int
  引用数据类型：String/enum枚举
 */
public class Demo{
  public static void main(String[] args){
    // 判断
    if( true ){
      System.out.println("true");
    } else {
      System.out.println("false");
    }
    // 选择
    int a = 1
    switch (a) {
      case 1:
      System.out.println("1");
        break;
      default:
        break;
    }
    // 循环
    for (int i = 0; i < max; i++) {
      // doshomething
      break; //结束整个循环
      continue; //跳过当前循环
    }
    while (条件判断) {
      // 条件判断满足后
      // 循环体
    }
    do {
      // 先执行一遍
      // 循环体
      // 条件判断满足后
      // 循环体
    } while (条件判断);
  }
}