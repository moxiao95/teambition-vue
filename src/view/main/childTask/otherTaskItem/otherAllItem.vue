<template>
<ul class="other-all-item">
    <li>
        <header class="item-li-head">
            <div class="li-head-title">完成 · 1</div>
            <div class="li-head-btn">
                <Icon type="android-arrow-dropdown-circle"></Icon>
            </div>
        </header>
        <ul class="item-li-list">
            <li>1</li>
            <li>2</li>
            <li class="li-list-add">+</li>
        </ul>
    </li>
</ul>
</template>
<script>
export default{
    data(){
        return {

        }
    }
}
</script>
<style>
.other-all-item{
    margin-top: 40px;
    position: absolute;
    left: 0;
    top: 50px;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    white-space: nowrap;
    padding-left: 20px;
}
.other-all-item>li{
    margin: 20px 12px 0 0;
    display: inline-block;
    width: 288px;
    height: 93%;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgb(219, 218, 218);
    background-color: #eee;
}
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
