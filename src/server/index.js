import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;

// 用户登录
export function Login(params){
    return axios(params);
}

// 用户注册
export function Sign(params){
    return axios(params);
}