<template>
<li class="child-del-list">
    <p class="child-item-title">{{item.itemTitle}}</p>
    <p class="child-item-info">{{item.itemInfo}}</p>
    <span class="child-edit-item" @click.stop="yesDel">
        <Icon type="close-round" size="24"></Icon>
    </span>
    <span class="child-edit-item child-no-del" @click.stop="noDel">
        <Icon type="refresh" size="24"></Icon>
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
                    itemInfo: '默认'
                }
            }
        }
    },
    methods:{
        yesDel(){
            let id = this.item._id;
            this.http.postThorough({id:id}).then(({data})=>{
                if(data.success){
                    let id = JSON.parse(localStorage.getItem('userId'));
                    this.http.getItem({userId:id}).then(({data})=>{
                        let list = [...data.doc];
                        this.$store.commit('getAllData',{list});
                    })
                }
            })
        },
        noDel(){
            let id = this.item._id;
            this.http.postDel({id:id,bl:false}).then(({data})=>{
                if(data.success){
                    let id = JSON.parse(localStorage.getItem('userId'));
                    this.http.getItem({userId:id}).then(({data})=>{
                        let list = [...data.doc];
                        this.$store.commit('getAllData',{list});
                    })
                }
            })
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
.child-del-list>.child-edit-item{
    color: rgb(102, 102, 102);
}
.child-edit-item{
    position: absolute;
    top: 6px;
    right: 15px;
    display: none;
}
.child-no-del{
    right: 45px;
}
.child-item-title{
    font: 20px/38px "微软雅黑";
}
.child-item-info{
    font: 14px/20px "微软雅黑";
}
</style>
