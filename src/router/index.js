import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/registerUser',
    alias: '/registerUser',
    name: 'registerUser',
    component: () => import('../views/RegisterUser.vue')
  },
  {
    path: '/editUser',
    alias: '/editUser',
    name: 'editUser',
    component: () => import('../views/EditUser.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
