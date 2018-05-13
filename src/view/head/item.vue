<template>
  <section class="show-other">
        <div @click.stop="addItem">项目</div>
        <div>任务</div>
        <div>文件</div>
        <div>日程</div>
        <div>分享</div>
  </section>
</template>
<script>
export default{
    methods:{
        addItem(){ // 添加数据
            this.$store.commit('disAddBox',{bl:true});
            this.$store.commit('addBtnShow',{bl:true});
            this.$store.commit('noneHeadBtn',{bl:false})
        }
    }
}
</script>
<style>
.show-other div{
    font: 16px/36px "微软雅黑";
    text-align: center;
    cursor: pointer;
}
.show-other div:hover{
    background-color: #e2e4e5;
}
</style>

