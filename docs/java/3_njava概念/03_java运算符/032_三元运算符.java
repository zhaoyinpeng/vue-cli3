/**
三元运算符
条件判断 ? 表达式A ： 表达式B

注意事项：
1.必须同时保证表达式A和表达式B都复合左侧数据类型要求！！
2. 三元运算符必须被使用
 */
public class Demo{
  public static void main(String[] args){
    System.out.println("Demo");

    //错误必须同时保证表达式A和表达式B都复合左侧数据类型要求
    // int res = 3>4?2.5:4; //2.5是浮点型不符合int类型
    System.out.println(3>4?2.5:4); //正确写法
    // 3>4?2.5:4 //错误写法
  }
}