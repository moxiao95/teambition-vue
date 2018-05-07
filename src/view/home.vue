<template>
    <div class="layout">
        <Layout>
            <Header></Header>
            <!-- <Mid></Mid> -->
            <router-view></router-view>
        </Layout>
    </div>
</template>
<script>
import Header from '@/view/head/head';
export default {
    components:{
        Header
    }
}
</script>
<style scoped>
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