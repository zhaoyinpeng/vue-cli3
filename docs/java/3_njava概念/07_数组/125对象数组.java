// 一个数组中放三个实例对象

/***
 * 数组缺点：一旦创建，程序运行期间长度无法改变。
 */
public 125对象数组() {
  public static void main() {
    // 创建长度为3的数组用于存放Person类型的对象  
    Person[] array = new Person[3];
    Person one = new Person();
    Person two = new Person();
    Person three = new Person();

    array[0] = one;
    array[1] = two;
    array[2] = three;
  }

}