<template>
<li>
    <p class="child-item-title">123</p>
    <p class="child-item-info">123</p>
    <span class="child-edit-item" @click.stop="clickToEdit">
        <Icon type="edit" size="24"></Icon>
    </span>
</li>
</template>
<script>
export default{
    
} 
</script>
<style>
.child-item-title,
.child-item-info{
    text-indent: 20px;
    color: #fff;
}
.child-edit-item{
    position: absolute;
    top: 6px;
    right: 15px;
    display: none;
}
.child-item-title{
    font: 20px/38px "微软雅黑";
}
.child-item-info{
    font: 14px/20px "微软雅黑";
}
</style>
