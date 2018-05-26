<template>
<section class="other-task-box">
    <OtherHead />
    <!-- 修改框 -->
    <Edit v-if="editShow"/>
    <!-- 遮罩层 -->
    <section class="child-mask" v-if="maskShow"></section>
</section>
</template>
<script>
import OtherHead from '@/view/main/childTask/otherTaskItem/otherHead';
import Edit from '@/view/main/childTask/samllItem/editUserItem';

export default{
    data(){
        return {

        }
    },
    methods:{
        
    },
    computed:{
        maskShow(){ // 遮罩层显示
            return this.$store.state.childMaskShow;
        },
        editShow(){ // 修改框显示
            return this.$store.state.childEditShow;
        }
    },
    components:{
        OtherHead,Edit
    },
    created(){
        console.log(this.$store.state.childEditShow)
        this.http.getFindone({id:this.$route.query.itemId}).then(({data})=>{
            if(data.success){
                // 当前所在任务
                this.$store.commit('changeHeadTitle',{item:data.doc});
            }
        })
    }
}
</script>
<style>
.other-task-box{
    padding-top: 50px;
}
.child-mask{
    position: fixed;
    z-index: 77;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(109, 106, 106, .5);
}
</style>

