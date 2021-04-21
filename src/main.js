import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/reset.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入mockjs
import './mock/index.js'


//引入axios
import http from './api/config.js'
//添加到vue的原型中，使他变成全局变量
Vue.prototype.$http  = http
// console.log(Vue.prototype);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
