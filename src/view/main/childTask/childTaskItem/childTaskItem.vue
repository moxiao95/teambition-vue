<template>
<li>
    <p class="child-item-title">{{item.itemTitle}}</p>
    <p class="child-item-info">{{item.itemInfo}}</p>
    <span class="child-star-item" @click.stop="clickToStar">
        <Icon type="star" size="24"></Icon>
    </span>
    <span class="is-star" @click.stop="clickToStar" v-show="item.itemStar">
        <Icon type="star" size="24"></Icon>
    </span>
    <span class="child-edit-item" @click.stop="clickToEdit">
        <Icon type="edit" size="24"></Icon>
    </span>
</li>
</template>
<script>
export default{
    props:{
        item:{
            type:Object,
            default(){
                return {
                    itemTitle: '默认',
                    itemInfo: '默认',
                    itemStar: false
                }
            }
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        clickToStar(){
            console.log(this.item)
        },
        clickToEdit(){
            console.log(123)
        },
    },
    created(){
        console.log(this.item)
    }
} 
</script>
<style>
.child-item-title,
.child-item-info{
    text-indent: 20px;
    color: #fff;
}
.child-star-item{
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 50px;
    display: none;
}
.child-edit-item{
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 15px;
    display: none;
}
.is-star{
    cursor: pointer;
    z-index: 10;
    color: yellow;
    position: absolute;
    top: 6px;
    right: 50px;
}
.child-item-title{
    font: 20px/38px "微软雅黑";
}
.child-item-info{
    font: 14px/20px "微软雅黑";
}
</style>
