<template>
<section class="team-login">
    <section class="login-box">
        <header class="login-head">teambition-by-vue</header>
        <section class="login-mid">
            <dl class="user-inp">
                <dt class="user-text">用户名：</dt>
                <dd class="user-to-inp">
                    <Input 
                        class="text-input"
                        v-model="userName" 
                        placeholder="请输入用户名" 
                    />
                </dd>
            </dl>
            <dl class="user-inp">
                <dt class="user-text">密码：</dt>
                <dd class="user-to-inp">
                    <Input 
                        class="text-input"
                        v-model="passWord" 
                        placeholder="请输入用户密码" 
                    />
                </dd>
            </dl>
        </section>
        <footer class="login-foot">
            <Button 
                @click="loginBtn"
                type="primary" 
                class="login-btn"
            >登录</Button>
            <Button 
                @click="registerBtn"
                type="primary" 
                class="register-btn"
            >注册</Button>
        </footer>
    </section>
    <section class="login-remind" v-show="remindShow">{{remindText}}</section>
</section>
</template>
<script>
import {Login,Sign} from '@/server/index.js';
import Cookies from 'js-cookie';
export default{
    data(){
        return {
            userName: '',
            passWord: '',
            remindShow: false,
            remindText:'错误'
        }
    },
    methods:{
        loginBtn(){
            if(this.userName!==''&&this.passWord!==''){
                let user = {
                    method: 'post',
                    url: 'http://localhost:8000/login',
                    data:{
                        userName:this.userName,
                        passWord:this.passWord 
                    }
                }
                Login(user).then(({data})=>{
                    if(data.success){
                        this.$router.push({name:'defa'});
                        Cookies.set('teambitionVue','123');
                    }else{
                        this.remindShow = true;
                        this.remindText = '用户名或者密码错误';
                        setTimeout(()=>{
                            this.remindShow = false;
                            this.remindText = ''
                        },1500)
                    }
                })
            }else{
                this.remindShow = true;
                this.remindText = '请输入用户名';
                setTimeout(()=>{
                    this.remindShow = false;
                    this.remindText = '';
                    this.userName = '';
                    this.passWord = '';
                },1500)
            }
        },
        registerBtn(){
            if(this.userName!==''&&this.passWord!==''){
                let user = {
                    method: 'post',
                    url: 'http://localhost:8000/user',
                    data:{
                        userName:this.userName,
                        passWord:this.passWord 
                    }
                }
                Sign(user).then(({data})=>{
                    console.log(data.doc)
                    if(data.success){
                        this.remindShow = true;
                        this.remindText = '注册成功';
                        this.userName = '';
                        this.passWord = '';
                        setTimeout(()=>{
                            this.remindShow = false;
                            this.remindText = '';
                        },1500)
                    }else{
                        this.remindShow = true;
                        this.remindText = '注册失败';
                        setTimeout(()=>{
                            this.remindShow = false;
                            this.remindText = '';
                        },1500)
                    }
                })
            }else{
                this.remindShow = true;
                this.remindText = '请输入用户名';
                setTimeout(()=>{
                    this.remindShow = false;
                    this.remindText = ''
                },1500)
            }
        }
    },
    created(){
        console.log(Cookies.get('teambitionVue'))
        if(Cookies.get('teambitionVue')){
            this.$router.push({name:'defa'});
        }
    }
}
</script>
<style>
.login-remind{
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height:40px;
    border-radius: 6px;
    background-color: #fff;
    font: 20px/40px "微软雅黑";
    text-align: center;
}
.login-btn,
.register-btn{
    width: 100px;
    height: 50px;
    padding: 0 15px;
    font: 20px/50px "微软雅黑";
    margin: 0 25px;
}
.user-text{
    float: left;
    margin-left: 60px;
    text-align: right;
    height: 50px;
    font: 24px/50px "微软雅黑";
}
.user-to-inp{
    float: right;
    height: 50px;
    margin-right: 60px;
}
.text-input{
    width: 300px;
    height: 50px;
}
.text-input input{
    margin-top: 5px;
    height: 40px;
}
.user-inp{
    height: 80px;
    padding: 0 20px;
}
.team-login{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: aqua;
    z-index: 999;
}
.login-box{
    width: 600px;
    height: 400px;
    position: absolute;
    top: 20%;
    left: 50%;
    margin: 0 -300px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px rgb(177, 175, 175);
}
.login-head{
    height: 60px;
    color: #fff;
    background-color: rgb(48, 48, 252, .8);
    border-radius: 10px 10px 0 0;
    text-align: center;
    font: 30px/60px "微软雅黑";
    margin-bottom: 30px;
}
.login-mid{
    margin-bottom: 30px;
}
.login-foot{
    height: 100px;
    text-align: center;
}
</style>
