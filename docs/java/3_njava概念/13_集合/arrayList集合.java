/**
 * ArrayList<E>集合
 * <E>为泛型！代表装在集合当中的所有元素，全都是统一的类型。只能装引用类型，想装基本类型得转义
 * 注意：泛型只能是引用类型，不能是基本类型。
 * 泛型是指定义的arrayList是什么类型的，之后add等方法添加的也是什么类型。
 * 
 * 长度不固定
 * 
 */
public arrayList集合() {
  public static void main() {
    ArrayList<String> list = new ArrayList<>();
  }
}


package api;

import java.sql.SQLOutput;
import java.util.ArrayList;

/***
 * 数组集合
 * <E>表示泛型
 * 注意事项：
 * 1.直接打印ArrayList得到的不是地址，而是内容；
 * 2.如果是空，得到空[]
 */
public class ArrayListDemo {

    public static void main(String[] args) {
//        String类型的数组集合
        ArrayList<String> list = new ArrayList<>();
        System.out.println(list); //[]

        //添加add
        list.add("zyp");
        list.add("zyp2");
        System.out.println(list); //[zyp,zyp2]
        //获取
        list.get(0);
        //删除
        String remove = list.remove(0);
        //长度
        int size = list.size();


        /**
         * 如果数组类型要想装基本类型，需要使用基本类型的“包装类“
         * 基本类型    包装类（引用类型）
         * byte         Byte
         * short        Short
         * int          Integer
         * long         Long
         * float        Float
         * double       Double
         * char         Charater
         * boolean      Boolean
         *
         * 从jdk1.5+，支持如下：
         * 自动装箱：基本类型--》包装类型
         * 自动拆箱：包装类型--》基本类型
         *
         */
//        ArrayList<int> listB = new ArrayList<int>(); //错误，泛型不能放基本类型
        ArrayList<Integer> listB = new ArrayList<>();
        listB.add(123);//这里方的基本类型会自动转换为包装类型

    }

}
