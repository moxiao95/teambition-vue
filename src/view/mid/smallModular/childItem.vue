<template>
    <router-link style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
        tag="li"
        :to="{name:'other',query:{user:item.id}}"
    >
        <span class="title-text">{{item.title}}</span>
        <!-- 点击收藏的星标 -->
        <span 
            class="star-btn"
            @click.stop="toStar"
        >
            <Icon 
                type="star" 
                size="24"
            ></Icon>
        </span>
        <!-- 己经是收藏的显示 -->
        <span 
            class="star-btn-yes"
            v-show="item.star"
            @click.stop="toStar"
        >
            <Icon 
                type="star" 
                size="24"
            ></Icon>
        </span>
        <!-- 修改详情 -->
        <span
            class="edit-btn"
            @click.stop="editData(item)"
        >
            <Icon type="edit"></Icon>
        </span>
        <div class="item-info-text">{{item.info}}</div>
    </router-link>
</template>
<script>
export default{
    data(){
        return {
            starShow:false
        }
    },
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        itemDetails(){ // 进去详情页面
            console.log(123)
        },
        liOver(){
            this.starShow = true;
        },
        liOut(){
            this.starShow = false;
        },
        toStar(item){
            this.$store.commit('toStar',this.item);
        },
        editData(item){
            this.$store.commit('disAddBox',{bl:true});
            this.$store.commit('changeBox',{bl:true});
            this.$store.commit('wantChangeItems',{i:item});
        }
    }
}
</script>
<style>
.item-info-text{
    float: left;
    width: 70%;
    margin-left: 10px;
    font: 14px/20px "微软雅黑";
    color: #fff;
    overflow: hidden;
}
li:hover .star-btn{
    display: block;
}
li:hover .edit-btn{
    display: block;
}
.title-text{
    margin-left: 16px;
}
.edit-btn{
    display: none;
    position: absolute;
    top: 0px;
    right: 10px;
    padding: 0 10px;
    color: rgb(132, 135, 136);
}
li{
    position: relative;
}
.star-btn{
    display: none;
    opacity: .8;
    position: absolute;
    top: 0;
    right: 50px;
    padding: 2px 5px;
    color: rgb(132, 135, 136);
}
.star-btn-yes{
    opacity: .8;
    position: absolute;
    top: 0;
    right: 50px;
    padding: 2px 5px;
    color: yellow;
}
li span{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #fff;
}
</style>
