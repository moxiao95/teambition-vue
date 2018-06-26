<template>
<li @click="toOtherTask">
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
        item:{ // 默认的标题，因为开始的时候是没有内容的，会报错，添加默认防止报错
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
    methods:{
        clickToStar(){ // 这是点击星标的事件，点亮或取消
            this.http.postStar({id:this.item._id,bl:!this.item.itemStar}).then(({data})=>{
                if(data.success){
                    let id = JSON.parse(localStorage.getItem('userId'));
                    this.http.getItem({userId:id}).then(({data})=>{
                        let list = [...data.doc];
                        this.$store.commit('getAllData',{list});
                    })
                }
            })
        },
        clickToEdit(){ // 修改框和遮罩层显示
            this.$store.commit('wantChangeItem',{item:this.item});
            this.$store.commit('maskShow',{bl:true});
            this.$store.commit('editShow',{bl:true});
        },
        toOtherTask(){ // 这是路由跳转
            this.$router.push({name:'otherItem',query:{itemId:this.item._id,newItem:true}});
        }
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
