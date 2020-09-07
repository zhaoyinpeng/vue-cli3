// 基本数据类型（四类八种）
/**
整数型 byte(1) short(2) int(4) long(8)
浮点型 floatz(4) double(8)(科学计数法，不能精确表示数组)
字符型 char(2)
布尔型 boolean(1)
 */

// 引用数据类型 
/*
 * 字符串
 * 数组
 * 类
 * 接口
 * lambda
 */

 /**
注意事项
1. 字符串不是基本类型，而是引用类型
2. 浮点型可能只是一个近似值，并非精确值
3. 数据范围与字节数不一定相关，例如float比long更广泛，但是float是4字节，long是8字节
4. 浮点型区分float和double,默认double，如果一定要使用float类型，需要加上后缀F
5. 整数,默认int，如果一定要使用long类型，需要加上后缀L
 */
 System.out.println(100L);