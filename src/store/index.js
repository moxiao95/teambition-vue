import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let datas = JSON.parse(localStorage.getItem('team-list')) || [];
//组件之间通信数据
let store = new Vuex.Store({
    state:{
        hasItemData:datas,
        showAddBtn:false,
        showAddBox:false
    },
    mutations:{
        addBtnShow(state,params){
            state.showAddBtn = params.bl
        },
        addItem(state,params){
            state.hasItemData.push(params)
        },
        disAddBox(state,params){
            state.showAddBox = params.bl
        }
    },
    actions:{}
})
export default store;