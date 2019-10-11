//对应 Home功能模块的配置文件
import {
  RECEIVE_HOME_BRAND,
  RECEIVE_HOME_SHOP,
  RECEIVE_HOME_SHOPPING,
  RECEIVE_HOME_MANUFACTURER,
  RECEIVE_HOME_TIMEBUY,
  RECEIVE_HOME_NEWPRODUCT,
  RECEIVE_HOME_POPULAR
} from '../mutation-types'
import { reqHomeData} from '../../api/index'
const state = {
  brand: [],   //网易自营品牌
  shop: [], //商品导航
  shopping: [], //购物导航榜单
  manufacturer: [], //私人定制
  timebuy: [], //限时购
  newproduct: [], //新品首发
  popular: [], //人气推荐
}

const actions = {
  /* 异步获取首页网易自营品牌 */
  async getBrand({commit, state}){
    //获取数据
    const result = await reqHomeData()
    if (result.code === 0 ) {
      console.log(result)
      const brand = result.data.policyDescList
      commit(RECEIVE_HOME_BRAND,brand)
    }
  },
  /* 异步获取首页商品导航 */
  async getshop({commit,state}){
    //获取数据
    const result = await reqHomeData()
    if (result.code === 0) {
      const shop = result.data.kingKongModule
      commit(RECEIVE_HOME_SHOP,shop)
    }
  },
   /* 异步获取购物导航榜单 */
  async getShopping({commit,state}){
    const result = await reqHomeData()
    if (result.code === 0) {
      const shopping = result.data.sceneLightShoppingGuideModule
      commit(RECEIVE_HOME_SHOPPING,shopping)
    }
  },
    /* 异步获取私人定制 */
  async getManufacturer({commit,state}){
    const result = await reqHomeData()
    if (result.code === 0) {
      const manufacturer = result.data.personalShop
      commit(RECEIVE_HOME_MANUFACTURER, manufacturer)
    }
  },
     /* 异步获取限时购 */
  async getTimebuy({commit,state}){
    const result = await reqHomeData()
    if (result.code === 0) {
      const timebuy = result.data.flashSaleModule
      commit(RECEIVE_HOME_TIMEBUY, timebuy)
    }
  },
     /* 异步获取新品首发 */
  async getNewproduct({commit,state}){
    const result = await reqHomeData()
    if (result.code === 0) {
      const newproduct = result.data.newItemList
      commit(RECEIVE_HOME_NEWPRODUCT, newproduct)
    }
  },
     /* 异步获取人气推荐 */
  async getPopular({commit,state}){
    const result = await reqHomeData()
    if (result.code === 0) {
      const popular = result.data.popularItemList
      commit(RECEIVE_HOME_POPULAR, popular)
    }
  },
}
const mutations = {
  [RECEIVE_HOME_BRAND](state, brand) {
    state.brand = brand
  },
  [RECEIVE_HOME_SHOP](state, shop) {
    state.shop = shop
  },
  [RECEIVE_HOME_SHOPPING](state, shopping) {
    state.shopping = shopping
  },
  [RECEIVE_HOME_MANUFACTURER](state, manufacturer) {
    state.manufacturer = manufacturer
  },
  [RECEIVE_HOME_TIMEBUY](state, timebuy) {
    state.timebuy = timebuy
  },
  [RECEIVE_HOME_NEWPRODUCT](state, newproduct) {
    state.newproduct = newproduct
  },
  [RECEIVE_HOME_POPULAR](state, popular) {
    state.popular = popular
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}