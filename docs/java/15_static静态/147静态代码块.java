package staticInfo;

/**
 * static
 * 静态代码块
 * 特点：当第一次用到本类时，静态代码块执行唯一的一次
 * 静态内容总是优先于非静态，所以静态代码块比构造方法先执行
 *
 * 用途：
 * 用来一次性地对静态成员进行赋值
 */

public class StaticDemo2 {
    static {
        //静态代码块 静态先执行
        System.out.println("静态代码块");
    }
    public StaticDemo2(){
        System.out.println("构造方法");
    }

}
