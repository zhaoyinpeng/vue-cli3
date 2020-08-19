/**
与 &&
或 ||
非 ！

短路

 */
public class Demo{
  public static void main(String[] args){
    System.out.println("Demo");
    // 短路
    int a = 10;
    int b = 20;
    // false && ....
    System.out.println(3>4 && ++a < 100); //false
    System.out.println(a); //10

    //true || ....
    System.out.println(3<4 || ++b < 100);  //true
    System.out.println(b); //20
    
  }
}