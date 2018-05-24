let express = require('express');
let app = express();
//引入db数据库组件
let mongoose = require('./db');
// 引入bodyParser插件
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 端口
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


// 星标设置
app.post('/star',function(req,res){
    
})

// 创建新任务
app.post('/creat',function(req,res){
    let {id,title,info} = req.body;
    Item.create({userId:id,itemTitle:title,itemInfo:info,itemStar:false,itemDel:false},function(err,doc){
        if(doc){
            console.log('子内容成功了')
            res.send({doc:doc})
        }
    })
})

// 用户所有的子项目
app.get('/item',function(req,res){
    Item.find({userId:req.query.userId},function(err,doc){
        if(doc){
            res.send({doc:doc})
        }else{
            console.log(400)
        }
    })
})

// 注册用户
app.post('/sign',function(req,res){
    User.findOne({userName:req.body.userName},function(err,doc){
        if(doc){
            res.send({success:false});
        }else{
            User.create({userName:req.body.userName,passWord:req.body.passWord},function(err,doc){
                if(doc){
                    res.send({success:true,doc:doc});
                    Item.create({userId:doc.id,itemTitle:'默认项目1',itemInfo:'默认简介',itemStar:false,itemDel:false},function(err,doc){
                        if(doc){
                            console.log('子内容成功了')
                        }
                    })
                }
            })
        }
    })
})

// 登录验证
app.post('/login',function(req,res){
    User.findOne({userName:req.body.userName,passWord:req.body.passWord},function(err,doc){
        if(doc){
            res.send({success:true,doc:doc})
        }else{
            res.send({success:false})
        }
    })
})
