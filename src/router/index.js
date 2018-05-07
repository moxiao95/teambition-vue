import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import defa from '@/view/mid/defa';


let routes = [
  {
    path:'/',
    name:'defa',
    component:defa
  }
]

export default new Router({
  mode:'history',
  routes
})
