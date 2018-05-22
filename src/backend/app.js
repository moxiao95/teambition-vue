let express = require('express');
let app = express();
//引入db数据库组件
let mongoose = require('./db');
// 引入bodyParser插件
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('有人来了')
})



app.listen(8000,()=>{
    console.log('服务启动')
})

app.all('*',function (req,res,next){
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type"); 
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
})

// mongoose规则
let Schema = mongoose.Schema;

// 创建关于注册新用户的schema，规定数据类型
// 用户名、用户密码
let userSchema = new Schema({
    userName: String,
    passWord: String
})
// 引用指定的注册规则
let User = mongoose.model('User',userSchema,'userInfo');

// 指定关于用户具体信息的数据类型
// 数据名称、数据简介、数据userId、是否star
let itemSchema = new Schema({
    userId: String,
    itemTitle: String,
    itemInfo: String,
    itemStar: Boolean,
    itemDel: Boolean
})
// 使用注册好的具体信息的规则
let Item = mongoose.model('Item',itemSchema,'userItem');

let userItem = []

app.post('/user',function(req,res){
    User.findOne({userName:req.body.userName},function(err,doc){
        if(doc){
            res.send({success:false});
        }else{
            User.create({userName:req.body.userName,passWord:req.body.passWord},function(err,doc){
                if(doc){
                    console.log(doc)
                    res.send({success:true,doc:doc});
                    User.cerate()
                }
            })
        }
    })
})
app.post('/login',function(req,res){
    User.findOne({userName:req.body.userName,passWord:req.body.passWord},function(err,doc){
        if(doc){
            res.send({success:true,doc:doc})
        }else{
            res.send({success:false})
        }
    })
})
