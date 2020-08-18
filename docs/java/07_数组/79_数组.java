/**
数组 
特点：
1.引用类型
2.数组中的数据类型统一
3.长度在运行期间不能改变

初始化
1. 动态初始化数组(直接指定长度)
格式：数据类型[] 数组名称 = new 数据类型[数组长度(int)]
2. 静态初始化数组(直接指定内容)
格式：数据类型[] 数组名称 = new 数据类型[] {元素1，元素2.。。。}
注意：虽然没有直接告诉长度但是他的长度是固定的，根据内容来的

省略格式
格式：数据类型[] 数组名称 = {元素1，元素2.。。。}
 */
public class Demo{
  public static void main(String[] args){
    // 动态创建数组（可拆分为两个步骤）
    int[] arrayA = new int[300];
    double[] arrayB = new double[10];
    String[] arrayC = new String[10];

    //静态创建数组（可拆分为两个步骤）
    int[] array1 = new int[] {5,2,3,4}
    //省略格式（不可拆分为两个步骤）
    int[] array2 = {5,2,3,4}
    array2[1] = 9
    // ！直接打印数组名称，得到的是数组对应内存地址的哈希值
    System.out.println(array2); //[x@xxx

    //访问数组中的元素
    // 格式：数组名称[索引值]
    System.out.println(array2[0]);
    System.out.println(array2[1]);
    System.out.println(array2[2]);

    //!动态创建数组时，会拥有一个默认值，规则如下：
    // 1.如果是整数类型，默认0
    // 2.如果是浮点类型，默认0.0
    // 3.如果是字符类型，默认'\u0000' 表现为''
    // 4.如果是布尔类型，默认false
    // 5.如果是引用类型，默认为null
    //!同样的静态创建数组时，也拥有一个默认值，只是马上会被后面的值替换
    int[] array3 = new int[300];
    System.out.println(array3[0]); //0
  }
}