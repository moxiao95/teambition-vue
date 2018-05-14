<template>
  <div>
        <div class="other-head">
            <!-- 左侧的导航 -->
            <div class="link-box">
                    <div>
                        <router-link to="/" tag="span">首页</router-link>
                        <Icon type="chevron-right"></Icon>
                    </div>
                    <div class="now-btn" @click="showAllItem">
                        <span>{{nowItem.title}}</span>
                        <Icon type="chevron-down" size="10"></Icon>
                    </div>
                    <p :class="{'item-is-star':nowItem.star}">
                        <Icon type="star" size="24"></Icon>
                    </p>
            </div>
            <!-- 点击上面导航显示的东西 -->
            <AllItem />
        </div>
        <section>

      </section>
  </div>
</template>
<script>
import AllItem from '@/view/mid/smallModular/allItem'
export default{
    components:{
        AllItem
    },
    data(){
        return {
            
        }
    },
    methods:{
        showAllItem(){
            console.log(123)
        }
    },
    computed:{
        nowItem(){
            let id = this.$route.query.user===[]?1526108914994:this.$route.query.user;
            let item = this.$store.state.hasItemData.find(item=>item.id=== +id);
            console.log(this.$store.state.hasItemData);
            return item;
        }
    }
}
</script>
<style>
.other-head{
    height: 60px;
    border-bottom: 1px solid #000;
    background-color: rgb(236, 235, 235);
}
.link-box{
    float: left;
    font: 20px/60px "微软雅黑";
    color: #000;
    margin: 3px 20px 0;
}
.link-box span{
    cursor: pointer;
}
.link-box>div{
    float: left;
    margin-right: 10px;
} 
/* .now-btn{
    margin-left: 10px;
} */
.link-box>p{
    float: left;
    margin-top: 2px;
}
.item-is-star{
    color: yellow;
}
</style>
