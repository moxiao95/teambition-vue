import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import defa from '@/view/mid/defa';
import other from '@/view/mid/other';

//定义路由
let routes = [
  {
    path:'/',
    name:'defa',
    component:defa
  },
  {
    path:'/other?num',
    name:'other',
    component:other
  }
]

export default new Router({
  mode:'history',
  routes
})
