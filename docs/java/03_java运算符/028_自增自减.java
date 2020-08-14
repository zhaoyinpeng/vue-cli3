/**
自增++
自减--
格式：
++num/num++
方法：
1.单独使用
2.混合使用：和其它操作混用，例如和赋值混合，或者与打印操作混合，等。
使用区别：
1.单独使用，前++和后++没有任何区别
2.在混合使用时有重大区别
A.前++,立刻马上+1，【先加后用】
B.后++，使用变量后再+1，【先用后 加】

注意：
只有变量才能用自增自减，常量不能用
 */
public class Demo{
  public static void main(String[] args){
    //和打印混用
    System.out.println("Demo");
    int num1 = 20;
    //先加后用
    System.out.println(++num1); //21
    System.out.println(num1); //21

    //先用后加
    System.out.println(num1++); //21
    System.out.println(num1); //22

    //和赋值混用
    int num2 = 20;
    int res = --num2;
    //先加后用
    System.out.println(num2); //19
    System.out.println(res); //19

    //先用后加
    int num3 = 20;
    int res2 = num2--;
    System.out.println(num3); //19
    System.out.println(res2); //20
  }
}