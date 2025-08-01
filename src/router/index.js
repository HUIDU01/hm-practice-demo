import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Pay from '@/views/pay'
import Layout from '@/views/layout'
import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Search from '@/views/search'
import Classify from '@/views/layout/classify.vue'
import Home from '@/views/layout/home.vue'
import SearchList from '@/views/search/searchList.vue'
import Prodetail from '@/views/prodetail'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/search', component: Search },
  { path: '/', redirect: '/layout' },
  { path: '/pay', component: Pay },
  { path: '/searchList', component: SearchList },
  { path: '/prodetail/:id', component: Prodetail },
  {
    path: '/layout',
    redirect: '/home',
    component: Layout,
    children: [
      { path: '/home', component: Home },
      { path: '/user', component: User },
      { path: '/classify', component: Classify },
      { path: '/cart', component: Cart }

    ]
  }
]
const router = new VueRouter({
  routes
})

const authUrl = ['/pay']
router.beforeEach((to, from, next) => {
  const token = store.getters.getToken
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  if (!token) {
    next('login')
  } else {
    next()
  }
})

export default router
