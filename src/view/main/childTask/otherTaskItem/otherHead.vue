<template>
<header class="other-head">
    <!-- 这是左边的导航 -->
    <nav class="other-head-nav">
        <router-link 
            :to="{path:'/task'}"
            tag="span"
            class="go-home-page fl"
        >首页</router-link>
        <span class="fl">></span>
        <span class="now-item-title fl" >
            {{nowItemTitle.itemTitle}}
        </span>
        <span class="now-item-star fl" @click="itemToStar">
            <Icon 
                type="star" 
                class="item-star-icon item-is-star"
                size="20"
                v-show="nowItemTitle.itemStar"
            ></Icon>
            <Icon 
                type="star" 
                class="item-star-icon" 
                size="20"
                v-show="!nowItemTitle.itemStar"
            ></Icon>
        </span>
    </nav>
    <!-- 这是中间的路由跳转 -->
    <div class="other-head-route">
        <router-link 
            :to="{name:'otherItem',query:{itemId:$route.query.itemId,newItem:true}}" 
            tag="span" 
            :class="{'bor-bot-blue':$route.query.newItem}"
        >任务</router-link>
        <router-link 
            :to="{name:'otherUser',query:{itemId:$route.query.itemId,newItem:false}}" 
            tag="span" 
            :class="{'bor-bot-blue':!$route.query.newItem}"
        >文件</router-link>
    </div>
    <!-- 右侧的设置 -->
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
            nowItem:true
        }
    },
    methods:{
        toSetItem(){ // 显示遮罩层和修改框
            this.$store.commit('maskShow',{bl:true});
            this.$store.commit('editShow',{bl:true});
        },
        itemToStar(){ // 这是点击星标的事件，点亮或取消
            let id = this.$route.query.itemId;
            let bl = this.$store.state.otherHeadItem.itemStar;
            this.http.postStar({id:id,bl:!bl}).then(({data})=>{
                if(data.success){
                    this.http.getFindone({id:this.$route.query.itemId}).then(({data})=>{
                        if(data.success){
                            // 当前所在任务
                            this.$store.commit('changeHeadTitle',{item:data.doc});
                        }
                    })
                }
            })
        }
    },
    computed:{
        nowItemTitle(){
            return this.$store.state.otherHeadItem;
        }
    },
    created(){
        
    }
}
</script>
<style>
.fl{
    float: left;
}
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
.other-head .other-head-route .bor-bot-blue{
    border-bottom-color: blue;
}
.now-item-star{
    padding: 0 15px;
    position: relative;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
}
.now-item-star .item-star-icon{
    position: absolute;
    left: 0;
    top: 10px;
}
.item-is-star{
    color: rgb(120, 221, 4);
}
</style>
