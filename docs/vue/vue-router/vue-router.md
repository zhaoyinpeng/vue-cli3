# vue-router实现原理
原理核心就是 更新视图但不重新请求页面。

vue-router实现单页面路由跳转，提供了三种方式：hash模式、history模式、abstract模式，根据mode参数来决定采用哪一种方式。

# 路由模式
vue-router 提供了三种运行模式：
● hash: 使用 URL hash 值来作路由。默认模式。
● history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
● abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端

# Hash模式
hash即浏览器url中#后面的内容，包含#。hash是URL中的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会加载相应位置的内容，不会重新加载页面。
也就是说

即#是用来指导浏览器动作的，对服务器端完全无用，HTTP请求中，不包含#。
每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置。
所以说Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据。

# History模式
HTML5 History API提供了一种功能，能让开发人员在不刷新整个页面的情况下修改站点的URL，就是利用 history.pushState API 来完成 URL 跳转而无须重新加载页面；

由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由的 history 模式，只需要在配置路由规则时，加入"mode: 'history'",这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

有时，history模式下也会出问题：
eg:
hash模式下：xxx.com/#/id=5 请求地址为 xxx.com,没有问题。
history模式下：xxx.com/id=5 请求地址为 xxx.com/id=5，如果后端没有对应的路由处理，就会返回404错误；

为了应对这种情况，需要后台配置支持：
在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

# abstract模式
abstract模式是使用一个不依赖于浏览器的浏览历史虚拟管理后端。
根据平台差异可以看出，在 Weex 环境中只支持使用 abstract 模式。 不过，vue-router 自身会对环境做校验，如果发现没有浏览器的 API，vue-router 会自动强制进入 abstract 模式，所以 在使用 vue-router 时只要不写 mode 配置即可，默认会在浏览器环境中使用 hash 模式，在移动端原生环境中使用 abstract 模式。 （当然，你也可以明确指定在所有情况下都使用 abstract 模式）。


# hash和history区别
通过history api，我们丢掉了丑陋的#，但是它也有个毛病：
不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的,不玩虚的。

在hash模式下，前端路由修改的是#中的信息，而浏览器请求时是不带它玩的，所以没有问题.但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个404来。

所以，如果你想在github.io上搭一个单页博客，就应该选择hash模式。比如这个博客