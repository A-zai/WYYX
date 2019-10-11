//最核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'   //多个状态数据属性的对象
// import mutations from './mutations' 
// import actions from './actions'   //间接更新状态数据的方法的对象
// import getters from './getters'  //基于state数据的getter计算属性的方法
import Home from './modules/Home'
import Thing from './modules/Thing'
import Search from './modules/Search'

//声明使用
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    Home,
    Thing,
    Search
  }
})