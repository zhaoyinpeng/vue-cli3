package 内部类;

import 接口.接口;

/**
 * 如果一个事物的内部包含另一个事物，那么这个就是一个类内部包含另一个类。
 * 例如：汽车和发动机的关系。
 * 分类：
 * 1.成员内部类
 * 格式
 * 修饰符 class 外部类名称{
 *     修饰符 class 内部类名称{
 *         。。。
 *     }
 * }
 * 注意：内用外，随意访问，外用内，需要借助内部类对象
 * 如果属性重名了，可以使用外部类.this.xxx
 * 使用：
 * a.间接使用。在外部类的方法中，调用内部类
 * b.直接使用。
 * 外部类名称.内部类名称 对象名 = new 外部类名称().new 内部类名称();
 * 2.局部内部类（包含匿名内部类）
 * 类定义在方法内部，就是局部内部类
 * 注意：只能在方法内部使用，外部无法用
 * 使用：在方法内部创建类，然后调用这个类实力的方法
 *
 *
 * 类的权限修饰符：
 * 1.外部类：public/(default)
 * 2.成员内部类：public/protected/(default)/private
 * 3.局部内部类：什么都不能写与（default）还不一样,因为外部无法访问它。
 *
 * ！！！匿名内部类
 * 如果接口的实现类（或者是父类的子类）只需要使用唯一的一次
 * 那么这种情况下可以省略掉该类的定义，而改为使用【匿名内部类】
 * 格式：
 * 接口名称 对象名 = new 接口名称(){
 *     //覆盖重写接口中所有方法
 * }
 * 相当于省略一个实现类
 * myInterface obj = new MyInterface() {
 *      @Override
 *      public void method(){}
 * }
 * 注意：
 * 1.匿名内部类，在创建对象的时候，只能使用唯一一次,如果创建多个对象，那么就需要一个一个创建了
 * 2.匿名对象在【调用方法】的时候，只能调用唯一一次，可以赋值给一个对象，则可以多次使用。
 *
 */
//外部类
public class 内部类 {
    private String name;
    int age = 10;
    public void method(){
        System.out.println("12");
    }
//成员内部类
    public class 成员内部类{
        int age = 20;
        public void method2(){
            int age = 30;
            //可以访问外部类的属性
            System.out.println(name);

            //访问外部属性和内部属性
            System.out.println(age); //30
            System.out.println(this.age); //20
            System.out.println(内部类.this.age); //10
        }
    }
    //局部内部类
    public void methodOuter(){
        /**
         * 从java8开始，局部内部变量中如果希望访问所在方法的局部变量
         * 那么这个局部变量必须是【有效final的】。
         * 备注：只要局部变量事实不变，那么final关键字可以省略
         * 原因：
         * 1.new出来的对象再堆内存当中。
         * 2.局部变量跟着方法走的，在栈内存当中。
         * 3.方法运行结束后，立即出栈，局部变量就会消失。
         * 3.但是new出来的对象会在堆中持续存在，知道垃圾回收消失。
         *
         */
        String name = "123"; //局部变量
        class 成员内部类{
            /*final*/ int age = 20; //这个final是省略的，如果局部类要访问，则最好添加上
            public void method2(){
                int age = 30;
                //可以访问外部类的属性
                System.out.println(name);
                System.out.println(age);

                //访问外部属性和内部属性
                System.out.println(age); //30
                System.out.println(this.age); //20
            }
        }
    }
    /**
     * 匿名内部类
     */
    public void 匿名内部类(){
        接口 objA = new 接口() {
//            里面的内容跟Impl一样
            @Override
            public void methodAbs() {

            }

            @Override
            public void methodAbs2() {

            }

            @Override
            public void methodAbs3() {

            }

            @Override
            public void methodAbs4() {

            }
        };
        objA.methodAbs();
        接口 objB = new 接口() {
            @Override
            public void methodAbs() {

            }

            @Override
            public void methodAbs2() {

            }

            @Override
            public void methodAbs3() {

            }

            @Override
            public void methodAbs4() {

            }
        };
        objB.methodAbs();
    }
}
