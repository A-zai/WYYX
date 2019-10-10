

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import EmailLogin from '../pages/Login/EmailLogin/EmailLogin.vue'
import PhoneLogin from '../pages/Login/PhoneLogin/PhoneLogin.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/things',
    component: Things
  },
  {
    path: '/shopCart',
    component: ShopCart
  },
  {
    path: '/login',
    component: Login,
    children: [{
        path: '/login/emaillogin',
        component: EmailLogin,
      },
      {
        path: '/login/phonelogin',
        component: PhoneLogin,
      },
    ]
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search
  },
]