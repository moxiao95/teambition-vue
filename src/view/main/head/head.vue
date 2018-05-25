<template>
<header class="task-head">
    <router-link 
        :to="{path:'/task'}"
        tag="h3"
        class="task-head-title"
    >Teambition-By-Vue</router-link>
    <span 
        class="head-sign-out"
        @click.stop="toSignOut"
    >退出</span>
</header>
</template>
<script>
import Cookies from 'js-cookie';
export default{
    methods:{
        toSignOut(){
            Cookies.remove('teamVue');
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style>
.task-head{
    height: 50px;
    position: fixed;
    z-index: 66;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(183, 183, 250);
    font: 20px/50px "微软雅黑";
    box-shadow: 0px 1px 1px 1px rgb(204, 228, 252);
}
.task-head-title{
    width: 300px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -200px;
    cursor: pointer;
}
.head-sign-out{
    float: right;
    font-size: 16px;
    cursor: pointer;
    margin-right: 50px;
    padding: 0 10px;
}
</style>
