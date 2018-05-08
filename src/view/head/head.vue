<template>
<div>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="fl">
                <!-- 搜索栏 -->
                <input  
                    placeholder="搜索个人项目" 
                    class="search-item "
                    @focus="inpFocus"
                    @blur="inpBlur"
                />
                <!-- 搜索图标 -->
                <Icon type="ios-search-strong" 
                    class="icon-fr"
                    size="30"
                ></Icon>
                <!-- 添加按钮图标 -->
                <div
                    class="add-icon"
                    @click="addBtnShow"
                >
                    <Icon type="plus-circled" size="36"></Icon>
                </div>
                <!-- 点击input显示的 -->
                <div 
                    class="to-search"
                    v-show="showTask"
                >
                    <router-link 
                        v-for="item in sBtnData"
                        :key="item.num"
                        :to="{name:'defa'}"
                        tag="div"
                    >{{item.title}}</router-link>
                </div>
                <!-- 点击添加图标显示的内容 -->
                <div 
                    class="add-items"
                    v-show="showAddBtn"
                >
                    <Item />
                </div>
            </div>
            <!-- 中间的点击回到默认的页面 -->
            <router-link 
                class="page-title" 
                tag="h1"
                :to="{name:'defa'}"
            >imitate-teambition-by-vue</router-link>
            <!-- 右侧分类 -->
            <div class="layout-nav fr">
                <MenuItem 
                    v-for="item in Menu"
                    :key="item.num"
                    name="{item.num}"
                >
                    <router-link to="/" tag="span">{{item.name}}</router-link>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</div>
</template>
<script>
import {Menu} from './headMenuData';
import Item from "./item";
let sBtnData = [
    {
        title:'近期完成的任务',
        num:1
    },
    {
        title:'近期有更新的任务',
        num:2
    },
    {
        title:'我创建的任务',
        num:3
    }
]
let addData = [
    {
        title:'项目',
        num:1
    },
    {
        title:'任务',
        num:2
    },
    {
        title:'文件',
        num:3
    },
    {
        title:'日程',
        num:4
    },
    {
        title:'分享',
        num:5
    }
]
export default {
    components:{
        Item
    },
    data(){
        return {
            Menu,
            sBtnData,
            addData,
            newHash:'home',
            showTask:false
        }
    },
    methods:{
        addBtnShow(){
            this.$store.commit('addBtnShow',{bl:!this.$store.state.showAddBtn});
            this.showTask = false;
        },
        inpFocus(){
            this.showTask = true;
            this.$store.commit('addBtnShow',{bl:false});
        },
        inpBlur(){
            this.showTask = false;
        }
    },
    computed:{
        showAddBtn(){
            return this.$store.state.showAddBtn;
        }
    }
}
</script>
<style scoped>
.add-items{
    position: absolute;
    left: 345px;
    top: 13px;
    width: 100px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgb(199, 198, 198);
}
.to-search{
    width: 200px;
    border: 1px solid rgb(241, 240, 240);
    box-shadow: 0 0 3px 0 rgb(216, 214, 214);
    position: absolute;
    left: 0;
    top: 65px;
    border-radius: 5px;
}
.to-search div{
    font: 20px/40px "微软雅黑";
    color: #000;
    text-indent: 5px;
    cursor: pointer;
}
.to-search div:hover{
    background-color: #e2e4e5;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
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
.search-item{
    width: 300px;
    padding: 0;
    height: 32px;
    border-radius: 16px;
    text-indent: 20px;
    border: none;
    outline: none;
}
.fl {
    float: left;
    position: relative;
}
.fr {
    float: right;
}
.icon-fr {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 5px;
    top: 15px;
}
.add-icon {
    color: #fff;
    position: absolute;
    right: -40px;
    top: 9px;
    cursor: pointer;
}
.page-title {
    position: absolute;
    top: 0;
    left: 50%;
    width: 300px;
    height: 60px;
    color: #fff;
    font: 20px/60px "微软雅黑";
    margin-left: -150px;
    cursor: pointer;
}
</style>