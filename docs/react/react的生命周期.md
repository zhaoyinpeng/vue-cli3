https://www.jianshu.com/p/b331d0e4b398

1. 挂载卸载过程
   
   1.1.constructor()

> constructor()中完成了 React 数据的初始化，它接受两个参数：props 和 context，当想在函数内部使用这两个参数时，需使用 super()传入这两个参数。 注意：只要使用了 constructor()就必须写 super(),否则会导致 this 指向错误。
  1.2.componentWillMount()

  1.3.componentDidMount()

  1.4.componentWillUnmount ()

2. 更新过程
   2.1. componentWillReceiveProps (nextProps)

```
  componentWillReceiveProps (nextProps) {
    nextProps.openNotice !== this.props.openNotice&&this.setState({
        openNotice:nextProps.openNotice
    }，() => {
      console.log(this.state.openNotice:nextProps)
      //将state更新为nextProps,在setState的第二个参数（回调）可以打         印出新的state
    })
  }
```

2.2.shouldComponentUpdate(nextProps,nextState)

>因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断

2.3.componentWillUpdate (nextProps,nextState)

2.4.componentDidUpdate(prevProps,prevState)

2.5.render()
> render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。

3. React 新增的生命周期(个人补充)

   3.1. getDerivedStateFromProps(nextProps, prevState)
   > componentWillReceiveProps的替代方法

   3.2. getSnapshotBeforeUpdate(prevProps, prevState)
   > componentWillUpdate的替代方法
