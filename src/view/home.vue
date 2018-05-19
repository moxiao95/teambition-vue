<template>
    <div class="layout">
        <Layout>
            <!-- 固定头部区域 -->
            <Header></Header>
            <!-- 显示渲染的路由出口 -->
            <router-view></router-view>
            <!-- 遮罩层 -->
            <div id="boxs" v-show="showAdd"></div>
        </Layout>
    </div>
</template>
<script>
// 引入header组件
import Header from '@/view/head/head';
export default {
    components:{
        Header
    },
    data(){
        return {
            // 这里的两个数组，是用来向localStorage中存储的，一旦有变化，就存进去
            list:this.$store.state.hasItemData,
            delList:this.$store.state.delItemData
        }
    },
    watch:{
        list:{
            // 这里是检测list是否有变化的
            deep:true,
            handler(){
                localStorage.setItem('team-list',JSON.stringify(this.list));
            }
        },
        delList:{
            // 这里是检测dellist是否有变化的
            deep:true,
            handler(){
                localStorage.setItem('del-list',JSON.stringify(this.delList));
            }
        }
    },
    computed:{
        showAdd(){
            // 返回一个布尔值，在store中存放，控制遮罩层显示
            return this.$store.state.showZIndexBox
        }
    }
}
</script>
<style scoped>
#boxs{
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.2);
}
.layout{
    position: relative;
    border-radius: 4px;
    /* overflow: hidden; */
}
.layout div{
    background-color: #fff;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>