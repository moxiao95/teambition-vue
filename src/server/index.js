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

// 用户获取所有任务
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

// 删除设置 
function postDel(params){
    return tb.post('/delete',params)
}

// 项目信息设置
function postModify(params){
    return tb.post('/modify',params)
}

// 彻底删除设置
function postThorough(params){
    return tb.post('/thorough',params)
}

// 查找任用单个任务
function getFindone(params){
    return tb.get('/one?id='+params.id)
}

// 创建用户任务的分类项
function postItemDetail(params){
    return tb.post('/itemDetail',params)
}

// 获取用户任务的分类型
function getDetailAll(params){
    return tb.get('/detailAll?id='+params.id)
}

export default{
    install(Vue){
        Vue.prototype.http = {
            postLogin,
            postSign,
            getItem,
            postCreat,
            postStar,
            postDel,
            postModify,
            postThorough,
            getFindone,
            postItemDetail,
            getDetailAll
        }
    }
}