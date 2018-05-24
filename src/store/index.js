import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        childMaskShow:false,
        childAddShow:false,
        allData:[]
    },
    mutations: {
        maskShow(state,params){
            state.childMaskShow = params.bl;
        },
        addShow(state,params){
            state.childAddShow = params.bl;
        },
        getAllData(state,params){
            state.allData = params.list;
        }
    },
    actions: {

    }
})
export default store;