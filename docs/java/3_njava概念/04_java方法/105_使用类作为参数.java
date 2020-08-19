/**
 * 使用类作为参数
 * 当对象座位参数，传递到方法中时，其实传递的是实例地址
 */
public class Demo{
  public static void main(String[] args){
    System.out.println("Demo");
  }
  // 类作为参数
  private static void method(Phone param) {
    // param 为实例地址
  }
  // 实例作为返回值
  public static Phone getPhone() {
    Phone one = new Phone();
    one.brand = "苹果";
  }
}