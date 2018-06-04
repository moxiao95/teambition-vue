<template>
<section class="other-task-box">
    <OtherHead />
    <router-view></router-view>
    <!-- 修改框 -->
    <Edit v-if="editShow"/>
    <!-- 遮罩层 -->
    <section class="child-mask" v-if="maskShow"></section>
</section>
</template>
<script>
import OtherHead from '@/view/main/childTask/otherTaskItem/otherHead';
import Edit from '@/view/main/childTask/samllItem/editUserItem';
import Cookies from 'js-cookie';
export default{
    computed:{
        maskShow(){ // 遮罩层显示
            return this.$store.state.childMaskShow;
        },
        editShow(){ // 修改框显示
            return this.$store.state.childEditShow;
        },
        smallEditshow(){
            return this.$store.state.smallEditShow;
        }
    },
    components:{
        OtherHead,Edit
    },
    created(){
        // 获取当前任务的所有分类
        this.http.getFindone({id:this.$route.query.itemId}).then(({data})=>{
            if(data.success){
                // 当前所在任务
                this.$store.commit('changeHeadTitle',{item:data.doc});
            }
        })
        // 如果没有cookie直接回到登录页面
        if(!Cookies.get('teamVue')){
            this.$router.push({path:'/login'});
        }
    }
}
</script>
<style>
.other-task-box{
    padding-top: 50px;
}
.child-mask{
    position: fixed;
    z-index: 77;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(109, 106, 106, .5);
}
</style>

