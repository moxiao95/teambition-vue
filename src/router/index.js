import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import home from '@/view/mid'

let routes = [
  {
    path:'/',
    name:'home',
    component:home
  }
]

export default new Router({
  mode:'history',
  routes
})
