/* 入口文件 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  'lib-flexible/flexible'

import './mock/mockServe'

import store from './vuex/store'
import Footer from './components/Footer/Footer.vue'
//注册全局组件
Vue.component('Footer',Footer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
