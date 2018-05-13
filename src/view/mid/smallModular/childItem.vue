<template>
    <li style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
        @click='itemDetails'
        @mouseover="liOver"
        @mouseout="liOut"
        :class="{'star-li-show':item.star}"
    >
        <span class="title-text">{{item.title}}</span>
        <span 
            class="star-btn"
            v-show="starShow"
            @click.stop="toStar"
        >
            <Icon 
                type="star" 
                size="24"
                :class="{'is-star':item.star}"
            ></Icon>
        </span>
        <span
            class="edit-btn"
            v-show="starShow"
            @click.stop="editData(item)"
        >
            <Icon type="edit"></Icon>
        </span>
    </li>
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
.title-text{
    margin-left: 16px;
}
.edit-btn{
    position: absolute;
    top: 0px;
    right: 10px;
    padding: 0 10px;
    color: rgb(132, 135, 136);
}
li{
    position: relative;
}
li .star-btn{
    opacity: .8;
    position: absolute;
    top: 0;
    right: 50px;
    padding: 2px 5px;
    color: rgb(132, 135, 136);
}
li span{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #fff;
}
.is-star{
    color: yellow;
}
</style>
