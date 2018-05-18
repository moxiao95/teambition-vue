let express = require('express');
let app = express();
//引入db数据库组件
let mongoose = require('./db');
// 引入bodyParser插件
let bodyParser = require('body-parser');

// mongoose规则
let Schema = mongoose.Schema;

// 创建关于注册新用户的schema，规定数据类型
// 用户名、用户密码
let userSchema = new Schema({
    userName: String,
    passWord: string
})
// 引用指定的注册规则
let User = mongoose.model('USer',userSchema);

// 指定关于用户具体信息的数据类型
// 数据名称、数据简介、数据pid、是否star
let itemSchema = new Schema({
    itemName: String,
    itemInfo: String,
    itemPid: String,
    star: Boolean
})
// 使用注册好的具体信息的规则
let Item = mongoose.model('Item',itemSchema);



app.get('/',(req,res)=>{
    console.log('有人来了')
})



app.listen(8000,()=>{
    console.log('服务启动')
})
