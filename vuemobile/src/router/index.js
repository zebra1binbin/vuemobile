import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from  '../views/login.vue'
import User from  '../components/user.vue'
import Order from  '../components/order.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    children:[
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
