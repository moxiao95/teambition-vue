<template>
<div>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="fl">
                <input  
                    placeholder="搜索个人项目" 
                    class="search-item "
                ></input>
                <Icon type="ios-search-strong" 
                    class="icon-fr"
                    size="30"
                ></Icon>
                <Icon 
                    type="plus-circled"
                    size="34"
                    class="add-icon"
                    @click="addItem"
                ></Icon>
            </div>
            <h1 class="page-title">imitate-teambition-by-vue</h1>
            <div class="layout-nav fr">
                <MenuItem 
                    v-for="item in Menu"
                    :key="item.num"
                    name="{item.num}"
                >
                    {{item.name}}
                </MenuItem>
            </div>
        </Menu>
    </Header>
</div>
</template>
<script>
import {Menu} from './headMenuData';
export default {
    data(){
        return {
            Menu,
            newHash:'home'
        }
    },
    methods:{
        addItem(){

        }
    }
}
</script>
<style scoped>
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
        top: 13px;
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
    }
</style>