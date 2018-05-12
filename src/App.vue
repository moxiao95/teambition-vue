<template>
  <div id="app" @click="noShowBtn" >
    <home />
  </div>
</template>

<script>
import home from './view/home'
export default {
  name: 'App',
  components:{
    home
  },
  methods:{
    noShowBtn(e){
      if(e.target.className !== 'ivu-icon ivu-icon-plus-circled'){
        this.$store.commit('addBtnShow',{bl:false});
      }
    }
  }
}
</script>
<style>
</style>
