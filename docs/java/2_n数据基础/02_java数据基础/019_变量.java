/**
变量
1.
数据类型 变量名称; //创建一个变量
变量名 = 数据值 //赋值，将右侧的数据值赋值给左侧变量
2. 
数据类型 变量名称 = 数据值;
 */
 public class Variable(){
   public static void main(String[] args){
     //变量
     int num1;
     num1 = 10;
     System.out.println(num1); //10

     //改变
     num1 = 100;
     System.out.println(num1); //100

     int num2 = 200;
     System.out.println(num2); //200

     byte num3 = 400; //-128~127
     System.out.println(num3); //出错 超出了byte数据范围

    //使用long类型要添加L后缀
     long num6 = 3000000000L;
     System.out.println(num6); //3000000000

     float nm7 = 2.5F;
     System.out.println(num7); //2.5
   }
 }

/**
1. 变量名不能重复
2. float和long加后缀
3. 不能超出范围赋值
4. 没有赋值的变量不能直接使用
5. 变量使用不能超出作用域范围
6. 可以通过一个语句创建多个变量，但是不推荐
int a =1,b=2,c=3;
 */