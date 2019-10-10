/* 路由其模块 */

import Vue from 'vue'
import VueRouter from 'vue-router'

/* home一级路由 */
import Home from '../pages/Home/Home.vue'
/* 分类一级路由 */
import Classify from '../pages/Classify/Classify.vue'
/* 识物一级路由 */
import Things from '../pages/Things/Things.vue'
/* 识物二级路由 */
import Find from '../pages/Things/Find/Find.vue' //发现
import OrderShow from '../pages/Things/OrderShow/OrderShow.vue' //甄选家
/* 识物三级路由 */
import TJ from '../pages/Things/Recommend/TJ.vue'  //推荐
import Good from '../pages/Things/Recommend/Good.vue' //好物
import ShaiD from '../pages/Things/Recommend/ShaiD.vue' //晒单
import XuanG from '../pages/Things/Recommend/XuanG.vue'  //选购指南
import HuiG from '../pages/Things/Recommend/HuiG.vue' //回购榜
import DaR from '../pages/Things/Recommend/DaR.vue' //达人
import HOME from '../pages/Things/Recommend/HOME.vue' //HOME
/* 购物车一级路由 */
import ShopCart from '../pages/ShopCart/ShopCart.vue'
/* 登录一级路由 */
import Profile from '../pages/Profile/Profile.vue'
/* 登录二级路由 */
import EmailLogin from '../pages/Profile/EmailLogin/EmailLogin.vue'
import PhoneLogin from '../pages/Profile/PhoneLogin/PhoneLogin.vue'
import RegisteredEmail from '../pages/Profile/RegisteredEmail/RegisteredEmail.vue'
/* 搜索一级路由  */
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShow:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isShow: true
      }
    },
    {
      path: '/things',
      component: Things,
      meta: {
        isShow: true
      },
      children:[
        {
          path: '/things/find',
          component: Find,
          meta: {
            isShow: true
          },
          children: [
            {
              path: '/things/find/tuijian',
              component: TJ,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/shaiD',
              component: ShaiD,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/good',
              component: Good,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/xuangou',
              component: XuanG,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/huigo',
              component: HuiG,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/daren',
              component: DaR,
              meta: {
                isShow: true
              },
            },
            {
              path: '/things/find/home',
              component: HOME,
              meta: {
                isShow: true
              },
            },
          ]
        },
        {
          path: '/things/ordershow',
          component: OrderShow,
          meta: {
            isShow: true
          },
        }
      ]
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      children: [
        {
          path: '/profile/emaillogin',
          component: EmailLogin,
        },
        {
          path: '/profile/phonelogin',
          component: PhoneLogin,
        },
        {
          path: '/profile/registeredEmail',
          component: RegisteredEmail,
        },
      ]
    },
    {
      path: '/search',
      component: Search
    },
  ]
})