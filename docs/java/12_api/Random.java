package api;

import java.util.Random;

/**
 * Random类用于生成随机数
 */
public class RandomDemo {
    public static void main(String[] args) {
        Random r = new Random();
        System.out.println("随机数："+ r.nextInt());

    }
}
