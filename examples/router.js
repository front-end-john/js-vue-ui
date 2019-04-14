import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import index from './views/index'
import aboutUs from './views/aboutUs'
import NotFoundComponent from './views/404'

Vue.use(Router)

export default new Router({
  base: '/js-vue-ui',  // 浏览器URL 基础路径
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }, { path: '*', component: NotFoundComponent }
  ]
})
