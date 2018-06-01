<template>
<section class="small-box-change">
    123123123
</section>    
</template>
<script>
export default{
    data(){
        return {

        }
    },
    computed:{
        newSmall(){
            return this.$store.state.newSmallItem;
        }
    }
}
</script>
<style>
.small-box-change{
    position: fixed;
    left: 50%;
    top: 10%;
    width: 400px;
    height: 500px;
    margin-left: -230px;
    background-color: #fff;
    border: 1px solid #000;
}
</style>
