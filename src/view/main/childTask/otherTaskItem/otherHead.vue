<template>
<header class="other-head">
    <nav class="other-head-nav">
        <router-link 
            :to="{path:'/task'}"
            tag="span"
            class="go-home-page"
        >首页</router-link>
        <span>></span>
        <span class="now-item-title" @click="showJump">
            {{nowItemTitle}}
            <Icon type="ios-arrow-down" size="20"></Icon>
        </span>
    </nav>
    <div class="other-head-route">
        <router-link :to="{path:'/'}" tag="span">任务</router-link>
        <router-link :to="{path:'/'}" tag="span">文件</router-link>
    </div>
    <div class="other-item-set" @click.stop="toSetItem">
        <Icon type="android-settings" size="26"></Icon>
    </div>
</header>
</template>
<script>
export default{
    components:{
        
    },
    data(){
        return {
            
        }
    },
    methods:{
        showJump(){
            
        },
        toSetItem(){ // 显示遮罩层和修改框
            this.$store.commit('maskShow',{bl:true});
            this.$store.commit('editShow',{bl:true});
        }
    },
    computed:{
        nowItemTitle(){
            return this.$store.state.otherHeadItem.itemTitle;
        }
    },
    created(){
        
    }
}
</script>
<style>
.other-head{
    height: 40px;
    background-color: #f5f5f5;
    color: rgb(92, 88, 88);
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
}
.other-head-nav{
    font: 20px/40px "微软雅黑";
    float: left;
    margin-left: 20px;
}
.go-home-page{
    cursor: pointer;
}
.go-home-page:hover{
    color: blue;
}
.now-item-title{
    cursor: pointer;
}
.other-item-set{
    float: right;
    padding: 5px 10px;
    margin-right: 20px;
    cursor: pointer;
}
.other-head-route{
    display: flex;
    justify-content: center;
    width: 300px;
    height: 40px;
    position: absolute;
    left: 50%;
    margin-left: -190px;
    font: 20px/38px "微软雅黑";
}
.other-head-route>span{
    margin: 0 10px;
    float: left;
    border-bottom: 2px solid transparent;
    cursor: pointer;
}
.other-head-route>span:hover{
    border-bottom-color: blue;
}
</style>
