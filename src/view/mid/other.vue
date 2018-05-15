<template>
  <div class="route-other-box">
        <div class="other-head">
            <!-- 左侧的导航 -->
            <div class="link-box">
                    <div>
                        <router-link to="/" tag="span">首页</router-link>
                        <Icon type="chevron-right"></Icon>
                    </div>
                    <div class="now-btn" @click="showAllItem">
                        <span>{{nowItem.title}}</span>
                        <Icon type="chevron-down" size="10"></Icon>
                    </div>
                    <p :class="{'item-is-star':nowItem.star}">
                        <Icon type="star" size="24"></Icon>
                    </p>
            </div>
            <!-- 点击上面导航显示的东西 -->
            <AllItem class="link-click-show" v-show="showClickBox"/>
            <h4 class="other-box-title">任务</h4>
        </div>
        <section class="other-child-item clearfix">
            <ItemTask class="other-item-task"/>
            <ItemTask class="other-item-task"/>
            <ItemTask class="other-item-task"/>
            <ItemTask class="other-item-task"/>
            <ItemTask class="other-item-task"/>
        </section>
  </div>
</template>
<script>
import AllItem from '@/view/mid/smallModular/allItem'
import ItemTask from '@/view/mid/smallModular/itemTask'
export default{
    components:{
        AllItem,ItemTask
    },
    data(){
        return {
            showClickBox: false
        }
    },
    methods:{
        showAllItem(){
            this.showClickBox = !this.showClickBox;
        }
    },
    computed:{
        nowItem(){
            let id = this.$route.query.user===[]?1526108914994:this.$route.query.user;
            let item = this.$store.state.hasItemData.find(item=>item.id=== +id);
            return item;
        }
    }
}
</script>
<style>
.other-item-task{
    float: left;
    width: 280px;
    height: 700px;
    border-radius: 5px;
    box-shadow: 2px 3px 3px 3px rgb(165, 165, 165);
    margin-right: 10px;
    background-color: rgb(236, 234, 234);
    overflow: auto;
}
.other-box-title{
    font: bold 20px/40px "微软雅黑";
    position: absolute;
    left: 50%;
    margin-left: -20px;
}
.link-click-show{
    width: 300px;
    height: auto;
    border-radius: 5px;
    position: absolute;
    top: 44px;
    left: 30px;
    background: rgb(253, 248, 248);
    box-shadow: 2px 2px 2px 2px rgb(161, 161, 161, .4);
    z-index: 99;
    font: 20px/30px "微软雅黑";
}
.route-other-box{
    position: relative;
}
.other-child-item{
    padding: 20px 80px;
}
.other-child-item>div{
    float: left;
    width: 200px;
    height: 300px;
    border: 2px solid #000;
    margin-bottom: 10px;
}
.other-head{
    height: 40px;
    background-color: rgb(243, 241, 241, .7);
    position: relative;
}
.link-box{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #000;
    margin: 0 20px;
}
.link-box span{
    cursor: pointer;
}
.link-box>div{
    float: left;
    margin-right: 10px;
} 
/* .now-btn{
    margin-left: 10px;
} */
.link-box>p{
    float: left;
    margin-top: 2px;
}
.item-is-star{
    color: yellow;
}
</style>
