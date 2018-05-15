import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let datas = JSON.parse(localStorage.getItem('team-list')) || [];
let delDatas = JSON.parse(localStorage.getItem('del-list')) || [];
//组件之间通信数据
let store = new Vuex.Store({
    state:{
        hasItemData:datas,
        delItemData:delDatas,
        headItemAdd:false,
        showAddBtn:false,
        showZIndexBox:false,
        showChangeBox:false,
        wantChangeItem:{}
    },
    mutations:{
        changeHeadBtn(state,params){ //改变头部的添加按钮的显示状态
            state.headItemAdd = params.bl
        },
        addBtnShow(state,params){ // 添加框出现
            state.showAddBtn = params.bl;
        },
        addItem(state,params){ // 添加数据
            state.hasItemData.push(params);
        },
        disAddBox(state,params){ //显示遮罩层
            state.showZIndexBox = params.bl;
        },
        toStar(state,params){ // 收藏
            let index = state.hasItemData.findIndex(item=>item===params);
            state.hasItemData[index].star = !state.hasItemData[index].star;
        },
        changeBox(state,params){ // 改变信息的框出现
            state.showChangeBox = params.bl;
        },
        noneHeadBtn(state,params){ //头部添加框消失
            state.headItemAdd = false;
        },
        wantChangeItems(state,params){ // 希望修改的项目
            state.wantChangeItem = params.i;
        },
        toChangeItem(state,params){ // 修改项目的title和info
            let item = state.wantChangeItem;
            let index = state.hasItemData.findIndex(i=>i===item);
            console.log(params.title)
            if(params.title===''){
                return;
            }
            state.hasItemData[index].title = params.title;
            state.hasItemData[index].info = params.info;
        },
        toDelItem(state){ // 删除项目并且把删除掉的那一项添加到新的数组中展示
            let item = state.wantChangeItem;
            let index = state.hasItemData.findIndex(i=>i===item);
            let delItem = state.hasItemData[index];
            state.delItemData.push(delItem);
            state.hasItemData.splice(index,1);
        }
    },
    actions:{}
})
export default store;