<template>
<li>
    <header class="item-li-head">
        <div class="li-head-title">{{item.detailTitle}} · 1</div>
        <div class="li-head-btn">
            <Icon type="android-arrow-dropdown-circle"></Icon>
        </div>
    </header>
    <ul class="item-li-list">
        <li>1</li>
        <li class="li-list-add">+</li>
    </ul>
</li>
</template>
<script>
export default{
    props:['item'],
    data(){
        return {

        }
    },
    created(){
        
    }

}
</script>
<style>
.item-li-head{
    padding:0 10px 0 20px;
    height: 40px;
    font: bold 16px/40px "微软雅黑";
    margin-bottom: 5px;
}
.li-head-title{
    float: left;
}
.li-head-btn{
    float: right;
    padding: 0 10px;
}
.item-li-list{
    width: 260px;
    margin: 0 14px;
}
.item-li-list>li{
    background-color: #fff;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 5px;
}
.item-li-list .li-list-add{
    background-color: transparent;
}
</style>
