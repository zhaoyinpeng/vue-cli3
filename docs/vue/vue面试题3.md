1. 混入里面，假设我 vue 组件里面 data 有一个 a:'a',混入文件 data 里面有一个 a:'b',最终我代码中 this.a 的值是什么?

- this.a=a

2. 同理，生命周期函数呢，方法呢

- 值为函数的选项，如 created,mounted 等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用

3. vue 有哪些内置组件，分别是怎么用

- ~~template/anmiation/animationGroup~~
- component/transition/transition-group/keep-alive/slot
  1. component 组件：有两个属性---is inline-template 渲染一个‘元组件’为动态组件，按照'is'特性的值来渲染成那个组件
  2. transition 组件：为组件的载入和切换提供动画效果，具有非常强的可定制性，支持 16 个属性和 12 个事件
  3. transition-group：作为多个元素/组件的过渡效果
  4. keep-alive：包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
  5. slot：作为组件模板之中的内容分发插槽，slot 元素自身将被替换

4. v-model 的原理

- 其核心就是，一方面 modal 层通过 defineProperty 来劫持每个属性，一旦监听到变化通过相关的页面元素更新。另一方面通过编译模板文件，为控件的 v-model 绑定 input 事件，从而页面输入能实时更新相关 data 属性值。

5. 事件修饰符.native 作用事什么

- .native：通俗点讲：就是在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的 HTML 标签，不加'. native'事件是无法触发的。并且该修饰符对普通 HTML 标签是没有任何作用的。
- .stop 阻止事件继续传播 防止事件冒泡 event.stopPropagation()
- .prevent 等同于 JavaScript 中的 event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）
- .capture 添加事件监听器时使用事件捕获模式，即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 与事件冒泡的方向相反，事件捕获由外到内
- .self 只当在 event.target 是当前元素自身时触发处理函数，即事件不是从内部元素触发的 只会触发自己范围内的事件，不包含子元素
- .once 只会触发一次
- .passive 滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 `onScroll` 完成，这其中包含 `event.preventDefault()` 的情况

6. 函数式组件用过吗，有什么好处

- 以局部组件为例，将组件标记为 functional=ture;
- 特征
  - 渲染快
  - 没有实例，意味着没有（this）
  - 没有生命周期（没有响应式数据）
- 使用场景
  - 正是因为函数式组件精简了很多例如响应式和钩子函数的处理，因此渲染性能会有一定的提高，所以如果你的业务组件是一个纯展示且不需要有响应式数据状态的处理的，那函数式组件会是一个非常好的选择。

7. template 里面写的 html，是怎么渲染的

- https://blog.csdn.net/generon/article/details/72482844
- Vue 的渲染逻辑——Render 函数三种方法
  1. 自定义 Render 函数
  ```
    1.Vue.component('anchored-heading', {
    2.    render: function (createElement) {
    3.        return createElement(
    4.            'h' + this.level,   // tag name 标签名称
    5.            this.$slots.default // 子组件中的阵列
    6.        )
    7.    },
    8.    props: {
    9.        level: {
    10.            type: Number,
    11.            required: true
    12.        }
    13.    }
    14.})
  ```
  2. template 写法
  ```
    1.var vm = new Vue({
    2.    data: {
    3.        // 以一个空值声明 `msg`
    4.        msg: ''
    5.    },
    6.    template: '<div>{{msg}}</div>'
    7.})
  ```
  3. el 写法（这个就是入门时最基本的写法）
  ```
    1.var app = new Vue({
    2.    el: '#app',
    3.    data: {
    4.        message: 'Hello Vue!'
    5.    }
    6.})
  ```
- 这三种渲染模式最终都是要得到 Render 函数。只不过用户自定义的 Render 函数省去了程序分析的过程，等同于处理过的 Render 函数，而普通的 template 或者 el 只是字符串，需要解析成 AST，再将 AST 转化为 Render 函数。
- 记住一点，无论哪种方法，都要得到 Render 函数。
- 我们在使用过程中具体要使用哪种调用方式，要根据具体的需求来。

  - 如果是比较简单的逻辑，使用 template 和 el 比较好，因为这两种都属于声明式渲染，对用户理解比较容易，但灵活性比较差，因为最终生成的 Render 函数是由程序通过 AST 解析优化得到的；

  - 而使用自定义 Render 函数相当于人已经将逻辑翻译给程序，能够胜任复杂的逻辑，灵活性高，但对于用户的理解相对差点。

8. 组件内自定义 directive 和 filters，哪个可以通过 this 访问到当前组件的实例

- 自定义指令可以通过传入函数的方式访问当前实例
  - http://www.imooc.com/wenda/detail/416369
  - 用函数方法，v-mydirective='fun',fun 中返回 this 就行
  - 直接用 bind 函数中的第三个参数中的 context,这个就是当前 vm 实例
- 自定义过滤器不推荐访问 vm 实例
  - https://github.com/vuejs/vue/issues/5998

## 自定义指令

- 全局

```
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

- 局部

```
directives: {
  color: {
    bind: function (el, binding,vnode,arg) {//被绑定
      console.log('1 - bind');
      el.style = 'color:' + binding.value;
      console.log('vm实例直接是bing第三个参数中的vndoe.context', vnode.context);
    },
    inserted: function () {//绑定到节点
      console.log('2 - inserted');
    },
    update: function () {//组件更新
      console.log('3 - update');
    },
    componentUpdated: function () {//组件更新完成
      console.log('4 - componentUpdated');
    },
    unbind: function () {//解绑
      console.log('5 - unbind');
    }
  }
}
```

## 自定义过滤器

- 全局

```
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

- 局部

```
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

- 方式

```
  <!-- 在双花括号中 -->
  {{ message | capitalize }}

  <!-- 在 `v-bind` 中 可并联-->
  <div v-bind:id="rawId | filter1 | filter2"></div>
```

9. 插件的语法是怎样的

## 插件 plugin

- 使用

```
  Vue.use(MyPlugin, { someOption: true })
```

- 开发

```
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
```

10. 父组件和子组件都有 created 和 mounted 生命周期，执行顺序是？

- 一般情况下：父 created -> 子 created -> 子 mounted -> 父 mounted
- https://www.cnblogs.com/zmyxixihaha/p/10714217.html
  ```
    父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
  ```

11. 路由传参有哪几种方式？

https://www.jianshu.com/p/d276dcde6656
答：三种
第一种方法 页面刷新数据不会丢失：
可以看出需要在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值
```
<!-- 具体代码中 -->
methods：{
  insurance(id) {
    //直接调用$router.push 实现携带参数的跳转
    this.$router.push({
      path: `/particulars/${id}`,
    })
  }
}
<!-- 路由配置中 -->
{
  path: '/particulars/:id',
  name: 'particulars',
  component: particulars
}
<!-- 获取参数 -->
this.$route.params.id
```

第二种方法 页面刷新数据会丢失：
通过路由属性中的name来确定匹配的路由，通过params来传递参数。
```
<!-- 具体代码中 -->
methods：{
  insurance(id) {
    name: 'particulars',
    params: {
      id: id
    }
  }
}
<!-- 路由配置中 -->
{
  path: '/particulars',
  name: 'particulars',
  component: particulars
}
<!-- 获取参数 -->
this.$route.params.id
```

第三种方法：
使用path来匹配路由，然后通过query来传递参数
```
<!-- 具体代码中 -->
methods：{
  insurance(id) {
    name: 'particulars',
    query: {
      id: id
    }
  }
}
<!-- 路由配置中 -->
{
  path: '/particulars',
  name: 'particulars',
  component: particulars
}
<!-- 获取参数 -->
this.$route.query.id
```

12. vuex 怎么做模块化处理
https://www.jeremyjone.com/432/
* 将一个文件分为多个：
actions.js
getter.js
mutations.js
state.js
index.js
* 其中index.js引入它上面四个js
* 每个模块创建不同的index.js通过namespaced:true来区分
* 给个main.js，用vuex中的modules引入不同模块的index
13. 路由怎么做动态添加
三种方式
14. 怎么全局注册组件，指令，过滤器
