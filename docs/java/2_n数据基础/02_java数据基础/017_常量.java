/**
# 常量
* 固定不变，在程序运行期不会发上改变
# 分类
1. 字符串常量:用双引号引起来的。“123”，“false”
2. 整数常量：直接写的数字 1,200，-1,0
3. 浮点数常量：小数 1.2，-213.12,0.0
4. 字符常量：用单引号引起来的单个字符(有且仅有一个)，例如：'A'、'B'、'1'、'中'
5. 布尔常量：true false
6. 空常量： null
 */
 public class Demo {
   public static void main(String[] args){
     System.out.println("abc");
     System.out.println("");
     System.out.println(300);
     System.out.println(-300);
     System.out.println(30.0);
     System.out.println(-30.0);
     System.out.println('a');
    //  System.out.println(''); //报错，空字符
     System.out.println(true);
    //  System.out.println(null); //报错，不能直接打印
   }
 }

