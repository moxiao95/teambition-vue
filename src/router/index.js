import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 引入组件
import defa from '@/view/mid/defa';
import other from '@/view/mid/other';

// 定义路由
let routes = [
  {
    path:'/',
    name:'defa',
    component:defa
  },
  {
    path:'/other',
    name:'other',
    component:other
  }
]

// 暴露出去路由
export default new Router({
  // 使用history模式
  mode:'history',
  routes
})
