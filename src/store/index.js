import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        childMaskShow:false,
        childAddShow:false,
        allData:[],
        childEditShow:false,
        childWantChange:'',
        otherHeadItem:'',
        otherHeadChangeShow:false,
        userItemList:[]
    },
    mutations: {
        maskShow(state,params){ // 遮罩层显示
            state.childMaskShow = params.bl;
        },
        addShow(state,params){ // 添加框显示
            state.childAddShow = params.bl;
        },
        getAllData(state,params){ // 获取到的所有的任务数据
            state.allData = params.list;
        },
        editShow(state,params){ // 修改框显示
            state.childEditShow = params.bl;
        },
        wantChangeItem(state,params){ // 想要修改的项目的id
            state.childWantChange = params.item;
        },
        changeHeadTitle(state,params){
            state.otherHeadItem = params.item;
        },
        addUserItemList(state,params){
            state.userItemList = [...params.list];
        }
    },
    actions: {

    }
})
export default store;