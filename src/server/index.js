import Vue from 'vue';
import axios from 'axios';


let tb = axios.create({
    baseURL:'http://localhost:8000'
})

// 用户登录
function postLogin(params){
    return tb.post('/login',params);
}

// 用户注册
function postSign(params){
    return tb.post('/sign',params);
}

// 用户获取
function getItem(params){
    return tb.get('/item?userId='+params.userId);
}

// 用户设置
function postCreat(params){
    return tb.post('/creat',params);
}

// 星标设置
function postStar(params){
    return tb.post('/star',params);
}

export default{
    install(Vue){
        Vue.prototype.http = {
            postLogin,
            postSign,
            getItem,
            postCreat,
            postStar
        }
    }
}