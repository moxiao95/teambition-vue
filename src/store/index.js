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
        userItemList:[],
        newSmallItem:{}
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
        changeHeadTitle(state,params){ // 修改用户创建的任务的名称
            state.otherHeadItem = params.item;
        },
        addUserItemList(state,params){ // 用户任务列表
            state.userItemList = [...params.list];
        },
        smallNewItem(state,params){ // 当前想要修改的小任务
            state.newSmallItem = params.item;
        }
    },
    actions: {

    }
})
export default store;