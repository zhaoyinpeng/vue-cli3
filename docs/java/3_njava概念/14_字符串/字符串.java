package api;

/**
 * 字符串的特点
 * 1.字符串的内容永不改变。【重点】！！！
 * 2.正因为字符串不可改变，所以字符串是可以共享使用的。
 * 3.字符串相当于是char[]字符数组，但是底层原理是byte[]字节数组。
 */
public class StringDemo {

    public static void main(String[] args) {
        /**
         * 创建
         * 三种创建方法：
         * 1.public String(); 创建空的
         * 2.public String(char[] array); 创建字符数组
         * 3.public String(byte[] array); 创建字节数组
         * 一种直接创建：
         * 直接写上双引号，就是字符串对象。
         */
        String str1 = new String();
        System.out.println(str1); //''

        char[] charArray = {'a', '2', '3'};
        String str2 = new String(charArray);
        System.out.println(str2);

        byte[] byteArray = {99,21,73};
        String str3 = new String(byteArray);
        System.out.println(str3);

        //直接创建
        String str4 = "Hello";
        System.out.println(str4);

        /**
         * 共享字符串时（重复利用）
         * 字符串常量池，程序当中直接写上的双引号字符串，就在字符串常量池中，
         * 对于基本类型来说， ==是进行数值比较
         * 但是对于引用类型， ==是进行【地址值】比较
         *
         * ！！！！堆中存在字符串常量池！！！！
         */
        String a = "abc"; //这里会将字符串的byte数据地址放入堆的字符串常量池中
        String b = "abc"; //再次定义时，回去判断字符串常量池中是否存在这个字符串，如果有就重复利用这个地址
        char[] charArray1 = {'a', 'b', 'c'}; //这里放入堆char[]数组中，
        String c = new String(charArray1); //new中的东西不会放入字符串常量池中 new出来的是byte[]字节组

        System.out.println(a == b); //true
        System.out.println(a == c); //false
        System.out.println(b == c); //false
    }

    /**
     * api
     * !判断内容是否相同，不判断地址值
     * public boolean equals(boject obj)
     * 1.任何对象都可用Object进行接收
     * 2.可以交换，具有对称性 a.equals(b) <==> b.equals(a)
     * 3.如果比较方一个是常量，一个是变量，推荐常量放前面。
     * 推荐 “a”.equals(str) 不推荐str.equals("a");
     * 原因：str可能被赋值为null
     *
     * !忽略大小写进行判断
     * public boolean equalsIgnoreCase(String str)
     *
     * !获取长度
     * public int length()
     * !拼接
     * concat()
     * !索引位置单个字符
     * charAt()
     * ！搜索字符
     * indexOf()
     * ！截取方法
     * substring(int index)
     * substring(int begin,int end)
     * ！字符串柴帆成字符数组作为返回值
     * toCharArray()
     * ！字符创地城的字节数组
     * getBytes()
     * ！替换字符中的某些字符
     * repalce()
     * !切分
     * public String[] split(String regex)
     * 注意！参数是正则，里如果用英文.切割，需要转义\\.
     *
     *
     */
    public static void api() {
        String a = "abc"; //这里会将字符串的byte数据地址放入堆的字符串常量池中
        String b = "abc"; //再次定义时，回去判断字符串常量池中是否存在这个字符串，如果有就重复利用这个地址
        char[] charArray1 = {'a', 'b', 'c'}; //这里放入堆char[]数组中，
        String c = new String(charArray1); //new中的东西不会放入字符串常量池中

        System.out.println(a.equals(b)); //true
        System.out.println(b.equals(c)); //true
        System.out.println(b.equals("abc")); //true
        System.out.println("abc".equals(a)); //true

    }
}


