<template>
    <section>
        <div>
            <span class="all-item-titles">标记项目</span>
            <div>
                <router-link  
                    class="all-item-list"
                    v-for="item in starItem"
                    :key="item.id"
                    :to="{name:'other',query:{user:item.id}}" 
                    tag="div"
                >
                    <img src="https://mailimg.teambition.com/logos/cover-media.jpg">
                    <span>{{item.title}}</span>
                    <Icon type="checkmark" class="all-item-icon" v-show="item.id == getQuery.user"></Icon>
                </router-link>
            </div>
        </div>
        <div>
            <span class="all-item-titles">所有项目</span>
            <div>
                <router-link  
                    class="all-item-list"
                    v-for="item in allItem"
                    :key="item.id"
                    :to="{name:'other',query:{user:item.id}}" 
                    tag="div"
                >
                    <img src="https://mailimg.teambition.com/logos/cover-media.jpg">
                    <span>{{item.title}}</span>
                    <Icon type="checkmark" class="all-item-icon" v-show="item.id == getQuery.user"></Icon>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    computed:{
        allItem(){
            return this.$store.state.hasItemData;
        },
        starItem(){
            let list = this.$store.state.hasItemData.filter(item=>item.star);
            return list;
        },
        getQuery(){
            return this.$route.query;
        }
    }
}
</script>
<style>
.all-item-icon{
    float: right;
    margin: 15px 15px;
    color: rgb(148, 148, 6);
}
.link-click-show>div{
    float: left;
    margin-bottom: 10px;
}
.link-click-show .all-item-titles{
    float: left;
    width: 300px;
    font: 20px/50px "微软雅黑";
    text-align: center;
    border-bottom: 1px solid rgb(141, 141, 141);
    margin-bottom: 5px;
}
.link-click-show .all-item-list{
    float: left;
    width: 300px;
    padding-left: 10px;
    margin-bottom: 5px;
}
.all-item-list:hover{
    background-color: rgb(221, 218, 218);
}
.all-item-list img{
    float: left;
    width: 100px;
    margin-right: 5px;
}
.all-item-list span{
    float: left;
    font: 16px/50px "微软雅黑";
    color: #000;
}
</style>
