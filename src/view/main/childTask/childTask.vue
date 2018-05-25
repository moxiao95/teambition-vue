<template>
<section class="child-task-box">
    <section class="child-box-main">
        <!-- 星标 -->
        <div class="child-item-text" v-show="this.starItem.length>0?true:false">星标项目</div>
        <ul class="child-item-star clearfix" v-show="this.starItem.length>0?true:false">
            <!-- 这是所有的星标项目 -->
            <Li v-for="user in starItem" :item="user" :key="user._id"/>
        </ul>
        <!-- 我的 -->
        <div class="child-item-text">我的项目</div>
        <ul class="child-item-box clearfix">
            <!-- 已有 -->
            <Li v-for="item in allItem" :item="item" :key="item._id"/>
            <!-- 创建 -->
            <li class="add-user-item" @click.stop="addUserItem">
                <div class="add-user-img">
                    <Icon type="plus-circled" size="40" ></Icon>
                </div>
                <div class="add-user-text">创建新项目</div>
            </li>
        </ul>
        <!-- 删除的项目 -->
        <div class="child-item-text" >
            <div>项目回收站</div>
            <span v-show="!delShow" @click.stop="delItemShow">显示</span>
            <span v-show="delShow" @click.stop="delItemShow">隐藏</span>
        </div>
        <ul class="child-item-del clearfix" v-show="delShow">
            <DelLi v-for="item in delItem" :item="item" :key="item._id"/>
        </ul>
    </section>
    <!-- 添加框 -->
    <Add v-show="addShow"/>
    <!-- 修改信息框 -->
    <Edit v-if="editShow"/>
    <!-- 遮罩层 -->
    <section class="child-mask" v-if="maskShow"></section>
</section>
</template>
<script>
import Li from '@/view/main/childTask/childTaskItem/childTaskItem'
import DelLi from '@/view/main/childTask/childTaskItem/childTaskItemDel'
import Add from '@/view/main/childTask/samllItem/addUserItem'
import Edit from '@/view/main/childTask/samllItem/editUserItem'
import {get} from '@/server/index.js';
export default{
    components:{
        Li,DelLi,Add,Edit
    },
    data(){
        return {
            delShow:false
        }
    },
    computed:{
        starItem(){ // 所有星标项目
            return this.$store.state.allData.filter(item=>item.itemStar)
        },
        delItem(){ // 所有删除的项目
            return this.$store.state.allData.filter(item=>item.itemDel)
        },
        allItem(){ // 所有的未删除项目
            return this.$store.state.allData.filter(item=>!item.itemDel)
        },
        maskShow(){ // 遮罩层显示
            return this.$store.state.childMaskShow;
        },
        addShow(){ // 添加框的显示
            return this.$store.state.childAddShow;
        },
        editShow(){ // 修改框显示
            return this.$store.state.childEditShow;
        }
    },
    created(){
        // 现获取到当前的用户所有的任务
        let id = JSON.parse(localStorage.getItem('userId'));
        this.http.getItem({userId:id}).then(({data})=>{
            let list = [...data.doc];
            this.$store.commit('getAllData',{list});
        })
    },
    methods:{
        addUserItem(){  // 点击添加新项目，添加框显示，遮罩显示
            this.$store.commit('addShow',{bl:true});
            this.$store.commit('maskShow',{bl:true});
        },
        delItemShow(){ // 项目回收站旁边的文字显示
            this.delShow = !this.delShow;
        }
    }
}
</script>
<style>
.child-box-main .add-user-item{
    background-image: none;
    cursor: pointer;
}
.add-user-img{
    text-align: center;
    padding-top: 20px;
}
.add-user-text{
    font: 20px/60px "微软雅黑";
    text-align: center;
}
.child-task-box{
    padding-top: 50px;
}
.child-item-text{
    width: 100%;
    font: bold 20px/50px "微软雅黑";
}
.child-item-text>div{
    float: left;
    margin-right: 30px;
}
.child-item-text>span{
    font: 14px/50px "微软雅黑";
    cursor: pointer;
}
.child-box-main{
    width: 76%;
    margin: 0 12%;
}
.clearfix:after{
    content:'';
    display: block;
    clear: both;
}
.child-box-main li{
    float: left;
    width: 254px;
    height: 128px;
    background: url(../../../assets/cover-media.jpg) no-repeat;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px rgb(219, 218, 218);
    margin: 15px 40px;
    transition: .2s;
    position: relative;
}
.child-box-main li:hover{
    transform: translateY(-4px);
}
.child-box-main .add-user-item:hover {
    background-color: rgb(242, 241, 247, .5);
    color: blue;
}
.child-box-main li:hover .child-edit-item{
    display: block;
}
.child-box-main li:hover .child-star-item{
    display: block;
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

