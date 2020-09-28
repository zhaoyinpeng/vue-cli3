import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import $ from 'jquery'
import './style/index.scss'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' //element ui 自带
// import './style/theme/index.css' //在线编辑的样式
// import './style/elementVariables.scss' //修改部分参数的自定义全局变量
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
