/**
1. 数组长度length
2. 遍历数组 for循环
 */
public class Demo{
  public static void main(String[] args){
    //长度
    int[] arrayA = new int[3]
    System.out.println(arrayA.length);

    //数组一旦创建，程序运行期间，长度不可改变
    int[] arrayA = new int[3]
    System.out.println(arrayA.length); //3
    arrayA = new int[5]
    System.out.println(arrayA.length); //5
    // 这里new int[3]堆中的数据无法改变长度了，arrayA = new int[5]这里只是改变了指针
  }
}

/***
 * publi static String toString(数组) :数组变字符串
 * 
 * public static void sort(数组)：排序（从小到大）
 * 注意：
 * 1.数值：默认升序排
 * 2.字符串：默认字母升序
 * 3.自定义类型：那么这个自定义的类需要有Comparable或者Comparator接口的支持。
 */