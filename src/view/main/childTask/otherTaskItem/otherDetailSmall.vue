<template>
<li class="small-list-box">
    <!-- 正常的没点击的 -->
    <div class="small-no-click" v-show="!smallItem.smallClick" @click.stop="showNowItem">
        <div class="small-is-hover"></div>
        <span class="small-click" @click.stop="changeSmallClick">
            <Icon type="ios-circle-outline" size="30"></Icon>
        </span>
        <span class="small-title">{{smallItem.smallTitle}}</span>
        <span class="small-del-icon" @click.stop="delSmallItem">
            <Icon type="ios-close-empty" size="30"></Icon>
        </span>
    </div>
    <!-- 点击过的 -->
    <div class="small-yes-click" v-show="smallItem.smallClick" @click.stop="showNowItem">
        <span class="small-click" @click.stop="changeSmallClick">
            <Icon type="ios-checkmark-outline" size="30"></Icon>
        </span>
        <span class="small-title">{{smallItem.smallTitle}}</span>
    </div>
    <div class=""></div>
</li>
</template>
<script>
export default{
    props:['id'],
    data(){
        return {
            smallItem:{}
        }
    },
    methods:{
        changeSmallClick(){ // 改变当前的小任务的完成状态
            this.http.postChangeClick({id:this.smallItem._id,bl:!this.smallItem.smallClick}).then(({data})=>{
                if(data.success){
                    this.http.getOneSmall({id:this.id}).then(({data})=>{
                        if(data.success){
                            this.smallItem = data.doc;
                        }
                    })
                }
            })  
        },
        showNowItem(){ // 显示出来修改框
            this.$store.commit('maskShow',{bl:true});
            this.$store.commit('smallNewItem',{item:this.smallItem});
            this.$store.commit('smallShowEdit',{bl:true});
        },
        delSmallItem(){ // 删除当前小任务
            this.http.postDelSmall({id:this.smallItem._id}).then(({data})=>{
                if(data.success){
                    this.http.getOneSmall({id:this.id}).then(({data})=>{
                        if(data.success){
                            this.smallItem = data.doc;
                        }
                    })
                }
            })
        }
    },
    created(){
        // 获取当前的小任务
        this.http.getOneSmall({id:this.id}).then(({data})=>{
            if(data.success){
                this.smallItem = data.doc;
            }
        })
    },
    computed:{
    }
}
</script>
<style>
.small-no-click,
.small-yes-click{
    min-height: 50px;
    position: relative;
    color: #000;
}
.small-list-box .small-yes-click{
    color: rgb(185, 183, 183);
    background-color: rgb(233, 229, 229);
    border-radius: 5px;
}
.small-is-hover{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 100%;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
}
.small-no-click:hover .small-is-hover{
    background-color: rgb(161, 128, 128);
}
.small-click{
    float: left;
    margin-left: 20px;
    padding-top: 10px;
}
.small-title{
    float: left;
    font: 20px/50px "微软雅黑";
    margin: 0 15px;
}
.small-list-box{
    cursor: pointer;
}
.small-del-icon{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 10px;
}
.small-show-time{
    float: left;
    width: 100%;
    height: 20px;
    font: 10px/16px "微软雅黑";
}
</style>
