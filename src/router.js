import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Product from './components/Product.vue'

Vue.use(Router)
// 命名路由, 有名字的路由
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})
