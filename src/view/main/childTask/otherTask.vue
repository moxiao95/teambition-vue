<template>
<section class="other-task-box">
    <OtherHead />
</section>
</template>
<script>
import OtherHead from '@/view/main/childTask/otherTaskItem/otherHead';
export default{
    components:{
        OtherHead
    },
    created(){
        // console.log(this.$route.query)
    }
}
</script>
<style>
.other-task-box{
    padding-top: 50px;
}
</style>

