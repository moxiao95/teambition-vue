import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import login from '@/view/login/login';
import task from '@/view/main/task';
import childTask from '@/view/main/childTask/childTask';
import otherTask from '@/view/main/childTask/otherTask';

let routes = [
    {
        path:'/',
        name: 'login',
        component:login
    },
    {
        path:'/task',
        component:task,
        children:[
            {
                path:'',
                name:'childTask',
                component: childTask
            },
            {
                path:'otherTask',
                name:'otherTask',
                component:otherTask
            }
        ]
    }
]
export default new Router({
    mode:'history',
    routes
})
