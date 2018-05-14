<template>
<div class="content-box">
    <section class="star-items" v-show="starItemShow">
        <h5>标记项目</h5>
        <ul class="items-list clearfix">
            <ChildItem
                v-for="item in starList"
                :key="item.id"
                :item="item"
            >{{item.title}}</ChildItem>
        </ul>
    </section>
    <!-- 拥有的项目 -->
    <section class="dis-item">
        <h5>我拥有的项目</h5>
        <!-- 上面的显示的项目 -->
        <ul class="items-list clearfix">
            <!-- 已有的项目 -->
            <ChildItem
                v-for="item in hasItemData"
                :key="item.id"
                :item="item"
            ></ChildItem>
            <!-- 创建新项目按钮 -->
            <li 
                @mouseenter.self="liMouseOver"
                @mouseleave.self="liMouseUp"
                class="add-item"
                :class="{'blue':disBlue}"
                @click.stop="addItem"
            >
                <Icon type="plus-circled" size="40"></Icon>
                <div>创建新项目</div>
            </li>
        </ul>
    </section>
    <!-- 删除掉的项目 -->
    <section>
        <h5>
            <span>项目回收站</span>
            <span @click="showOrDis" class="dis-show">
                <span v-show="!showRecycle">显示</span>
                <span v-show="showRecycle">隐藏</span>
            </span>
        </h5>
        <!-- 底下删除的项目 -->
        <ul 
            class="items-list clearfix"
            v-show="showRecycle"
        >
            <li
                style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
                v-for="item in showDelList"
                :key="item.id"
            >
                <span class="del-title">{{item.title}}</span>
            </li>
        </ul>
    </section>
    <!-- 点击添加之后显示的定义框 -->
    <section 
        class="show-add-item"
        v-show="showAddBox"
    >
        <AddData />
    </section>
    <!-- 这是点击修改的时候显示的框 -->
    <section
        class="more-item"
        v-show="showChangeBox"
    >
        <Edit />
    </section>
</div>
</template>
<script>
import AddData from "./smallModular/addData";
import ChildItem from "./smallModular/childItem";
import Edit from "./smallModular/edit"
export default {
    components:{
        AddData,
        ChildItem,
        Edit
    },
    data(){
        return{
            disBlue:false,
            showRecycle:false
        }
    },
    methods:{
        liMouseOver(){ // 添加蓝色字体calss
            this.disBlue = true;
        },
        liMouseUp(){ // 去掉蓝色字体calss
            this.disBlue = false;
        },
        showOrDis(){ //显示or隐藏
            this.showRecycle = !this.showRecycle;
        },
        addItem(){ // 添加数据
            this.$store.commit('disAddBox',{bl:true})
            this.$store.commit('addBtnShow',{bl:true})
        }
    },
    computed:{
        hasItemData(){
            return this.$store.state.hasItemData;
        },
        showAddBox(){
            return this.$store.state.showAddBtn;
        },
        starItemShow(){
            let data = this.$store.state.hasItemData.filter(item=>item.star);
            return data.length>0?true:false;
        },
        starList(){
            let data = this.$store.state.hasItemData.filter(item=>item.star);
            return data;
        },
        showChangeBox(){
            return this.$store.state.showChangeBox;
        },
        showDelList(){
            return this.$store.state.delItemData;
        }
    }
}
</script>
<style scoped>
.del-title{
    text-indent: 20px;
}
.more-item{
    position: absolute;
    z-index: 88;
    top: 100px;
    left: 50%;
    margin-left: -250px;
    width: 500px;
    background-color: #fff;
    padding-bottom: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px 3px rgb(199, 198, 198);
}
.star-items{
    padding-top: 10px;
}
.blue{
    color: rgb(172, 83, 245);
}
.content-box {
    width: 70%;
    margin: 0 auto;
}
.clearfix:after{
    content: '';
    display: block;
    clear: both;
}
.dis-item {
    padding-top:30px;
    margin-bottom: 20px;
}
h5 {
    font: 16px/50px "微软雅黑";
}
h5 span{
    margin-right:20px;
}
.dis-show {
    font-size: 14px;
    cursor: pointer;
}
.items-list li{
    float: left;
    width: 254px;
    height: 128px;
    margin: 20px 35px;
    border-radius: 5px;
}
.items-list .star-li-show{
    border-color: rgb(157, 255, 0);
}
.add-item {
    background-color: rgb(244, 248, 252);
}
.add-item i{
    margin: 20px 110px 5px;
}
.add-item div{
    font: 22px/30px "微软雅黑";
    text-align: center;
}
ul{
    list-style: none;
}
ul li:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px 3px rgb(199, 198, 198);
    transform: translateY(-3px);
    transition: 0.3s;
}
.show-add-item {
    width: 300px;
    background-color: #fff;
    position: fixed;
    top: 150px;
    left:50%;
    margin-left: -150px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px 3px rgb(199, 198, 198);
    z-index: 99;
}

</style>