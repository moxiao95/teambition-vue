<template>
<section>
    <Header />
    <router-view></router-view>
</section>
</template>
<script>
import Header from '@/view/main/head/head'
export default{
    components:{
        Header
    }
}
</script>
<style>
ul{
    list-style: none;
}
</style>
