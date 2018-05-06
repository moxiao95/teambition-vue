import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//组件之间通信数据
let store = new Vuex.Store({
    state:{
        hasItemNum:[]
    },
    mutations:{},
    actions:{}
})
export default store;