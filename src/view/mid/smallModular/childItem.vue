<template>
    <li style="background-image:url('https://mailimg.teambition.com/logos/cover-media.jpg')"
        @click='itemDetails'
        @mouseover="liOver"
        @mouseout="liOut"
    >
        <span>{{item.title}}</span>
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
            this.$store.commit('toStar',this.item)
        }
    }
}
</script>
<style>
li .star-btn{
    opacity: .8;
    margin-left:90px;
    padding: 2px 5px;
}
li span{
    float: left;
    font: 20px/40px "微软雅黑";
    color: #fff;
    margin-left: 16px;
}
.is-star{
    color: yellow;
}
</style>
