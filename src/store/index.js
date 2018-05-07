import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let hasItemData = [
    {
        title:'1',
        num:1
    },
    {
        title:'2',
        num:2
    },
    {
        title:'3',
        num:3
    },
    {
        title:'4',
        num:4
    },
    {
        title:'5',
        num:5
    }
]

//组件之间通信数据
let store = new Vuex.Store({
    state:{
        hasItemData,
        showAddBtn:false,
    },
    mutations:{
        addBtnShow(state){
            state.showAddBtn = !state.showAddBtn
        },
        addItem(state,params){
            state.hasItemData.push(params)
        }
    },
    actions:{}
})
export default store;