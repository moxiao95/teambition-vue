<template>
    <div class="layout">
        <Layout>
            <Header></Header>
            <!-- <Mid></Mid> -->
            <router-view></router-view>
            <div id="boxs" v-show="showAdd"></div>
        </Layout>
    </div>
</template>
<script>
import Header from '@/view/head/head';
export default {
    components:{
        Header
    },
    data(){
        return {
        list:this.$store.state.hasItemData
        }
    },
    watch:{
        list:{
            deep:true,
            handler(){
                localStorage.setItem('team-list',JSON.stringify(this.list))
            }
        }
    },
    computed:{
        showAdd(){
            return this.$store.state.showAddBox
        }
    }
}
</script>
<style scoped>
#boxs{
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.2);
}
.layout{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout div{
    background-color: #fff;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>