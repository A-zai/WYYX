/* 路由懒加载 */

/* home一级路由 */
const Home = () =>import ('../pages/Home/Home.vue')

/* 分类一级路由 */
const Classify = () => import('../pages/Classify/Classify.vue')

/* 识物一级路由 */
const Things = () => import('../pages/Things/Things.vue')

/* 识物二级路由 */
const Find = () => import('../pages/Things/Find/Find.vue') //发现
const OrderShow = () => import('../pages/Things/OrderShow/OrderShow.vue') //甄选家

/* 识物三级路由 */
const TJ = () => import('../pages/Things/Recommend/TJ.vue') //推荐
const Good = () => import('../pages/Things/Recommend/Good.vue') //好物
const ShaiD = () => import('../pages/Things/Recommend/ShaiD.vue') //晒单
const XuanG = () => import('../pages/Things/Recommend/XuanG.vue') //选购指南
const HuiG = () => import('../pages/Things/Recommend/HuiG.vue') //回购榜
const DaR = () => import('../pages/Things/Recommend/DaR.vue') //达人
const HOME = () => import('../pages/Things/Recommend/HOME.vue') //HOME

/* 购物车一级路由 */
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')

/* 登录一级路由 */
const Profile = () => import('../pages/Profile/Profile.vue')

/* 登录二级路由 */
const EmailLogin = () => import('../pages/Profile/EmailLogin/EmailLogin.vue')
const PhoneLogin = () => import('../pages/Profile/PhoneLogin/PhoneLogin.vue')
const RegisteredEmail = () => import('../pages/Profile/RegisteredEmail/RegisteredEmail.vue')

/* 搜索一级路由  */
const Search = () => import('../pages/Search/Search.vue')

export default [
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