# of
* 可以往集合中添加元素，比add一个一个添加快
* 使用前提：
当集合中存储的元素的个数已经确定了，不在改变时使用（返回的list）
* 注意事项：
1. 只适用于List,set,Map，不适用于接口的实现类
2. of方法返回值是一个不能改变的集合，结合不能再使用add,put方法添加元素，会抛出异常。
3. Set和Map在调用Of时不能有重复的元素，会抛出异常
* 代码
```

List<?> list = List.of(x,x,x,x)
//list.add(x) 报错
Set<?> set = Set.of(x,x,x,x)
//set.add(x) 报错
Map<String, Integer> map = Map.fo("x",10,"x2",11,"x3",10)
//map.put("x4",10) 报错

```
