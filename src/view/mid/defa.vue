<template>
<div class="content-box">
    <!-- 拥有的项目 -->
    <section class="dis-item">
        <h5>我拥有的项目</h5>
        <!-- 上面的显示的项目 -->
        <ul class="item-list clearfix">
            <!-- 已有的项目 -->
            <li style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
                v-for="item in hasItemData"
                :key="item.num"
                @click='itemDetails'
            >
                <span>{{item.title}}</span>
            </li>
            <!-- 创建新项目按钮 -->
            <li 
                @mouseenter.self="liMouseOver"
                @mouseleave.self="liMouseUp"
                class="add-item"
                :class="{'blue':disBlue}"
                @click="addItem"
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
            class="item-list clearfix"
            v-show="showRecycle"
        >
            <li
                style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
                v-for="i in 5"
                :key="i"
            >
                <span>{{i}}</span>
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
</div>
</template>
<script>
import AddData from "./smallModular/addData";
export default {
    components:{
        AddData 
    },
    data(){
        return{
            num:4,
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
        showOrDis(e){ //显示or隐藏
            this.showRecycle = !this.showRecycle;
        },
        addItem(){ // 添加数据
            this.$store.commit('disAddBox',{bl:true})
        },
        itemDetails(){ // 进去详情页面
            console.log(123)
        }
    },
    computed:{
        hasItemData(){
            return this.$store.state.hasItemData
        },
        showAddBox(){
            return this.$store.state.showAddBox
        }
    }
}
</script>
<style scoped>
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
    margin-top:64px;
    padding-top:20px;
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
.item-list li{
    float: left;
    width: 254px;
    height: 128px;
    margin: 20px 35px;
    border-radius: 5px;
}
.item-list li span{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #fff;
    margin-left: 16px;
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