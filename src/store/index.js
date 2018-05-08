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