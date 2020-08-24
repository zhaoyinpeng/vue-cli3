#Map集合<k,v>
1. Map集合是一个双列结合，一个元素包含两个值（一个key，一个value）
2. 集合中的元素，key和value的数据类型可以相同，可以不同。
3. 集合中的元素，key是不允许重复的，value是可以重复的。

## HashMap<k,v>
1. 底层是哈希表:查询速度特别快
2. 是一个无序的集合
3. 多线程，速度快，线程不安全
4. 可以存储null
## LinkedHashMap<k,v>
1. 底层是哈希表+链表
2. 是一个有序的集合

#Map方法：
1. put
2. get
3. remove
4. containsKey

## 遍历Map
* keySet
* 步骤
1. 把Map集合中所有的key取出来存到Set集合中
2. 遍历set集合，获取Map集合中每一个key
3. 通过Map集合中的方法get（key），通过key找到value
```
//Set<k> keySet
```

##Map.Entry接口 
* Map.Entry<k,v>
* 相当于结婚证，记录key和value

* entrySet()
1. 把Map中的Entry对象取出来放在Set集合中。
2. Set集合中的Entry对象使用getKey()和getValue()遍历数据

##HashMap存储自定义键值对
1. 需要向之前Set一样，重写hashCode方法和equals方法

##HashTable（被HashMap给取代了，但是它的子类，properties依然活跃）
1. 底层是哈希表
2. 是一个无序的集合
3. 元素非空
4. 同步的，单线程，速度较慢，安全的
5. 不可以存储null
