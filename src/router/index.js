import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Pay from '@/views/pay'
import Layout from '@/views/layout'
import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Classify from '@/views/layout/classify.vue'
import Home from '@/views/layout/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/', redirect: '/login' },
  { path: '/pay', component: Pay },
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

export default router
