import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/singlepost',
      name: 'singlepost',
      component: () => import(/* webpackChunkName: "singlepost" */ './views/singlepost.vue')
    },
    {
      path: '/newpost',
      name: 'newpost',
      component: () => import(/* webpackChunkName: "newpost" */ './views/newpost.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/admin.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard.vue')
    }
  ]
})
