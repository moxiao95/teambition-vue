import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import login from '@/view/login/login';
import task from '@/view/main/task';
import childTask from '@/view/main/childTask/childTask';
import otherTask from '@/view/main/childTask/otherTask';
import otherItem from '@/view/main/childTask/otherTaskItem/otherAllItem';
import otherUser from '@/view/main/childTask/otherTaskItem/otherUserContent';

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
                component:otherTask,
                children:[
                    {
                        path:'',
                        name:'otherItem',
                        component:otherItem
                    },
                    {
                        path:'otherUser',
                        name:'otherUser',
                        component:otherUser
                    }
                ]
            }
        ]
    }
]
export default new Router({
    mode:'history',
    routes
})
