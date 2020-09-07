/**
 * 成员变量可以使用this.xx来访问
 * 局部变量前不能加this
 * 通过谁调动的方法，谁就是this
 */
public class Demo{
  String name; //名字
  public static void main(String[] args){
    System.out.println(this.name);
    System.out.println("Demo");
  }
}