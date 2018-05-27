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

// ------------------------------------------------------------login页面------------------------------------------------------------------------------------------------

// 创建关于注册新用户的schema，规定数据类型
// 用户名、用户密码
let userSchema = new Schema({
    userName: String,
    passWord: String
})
// 定义模块
let User = mongoose.model('User',userSchema,'userInfo');

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

// ------------------------------------------------------------------task页面---------------------------------------------------------------------------------------------

// 指定关于用户具体信息的数据类型
// 数据title、数据info、数据userId、是否star、是否del
let itemSchema = new Schema({
    userId: String,
    itemTitle: String,
    itemInfo: String,
    itemStar: Boolean,
    itemDel: Boolean
})
// 定义模块
let Item = mongoose.model('Item',itemSchema,'userItem');

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

// 创建新任务
app.post('/creat',function(req,res){
    let {id,title,info} = req.body;
    Item.create({userId:id,itemTitle:title,itemInfo:info,itemStar:false,itemDel:false},function(err,doc){
        if(doc){
            console.log('子内容成功了');
            res.send({doc:doc});
        }
    })
})

// 星标设置
app.post('/star',function(req,res){
    Item.findOneAndUpdate({_id:req.body.id},{itemStar:req.body.bl},(err,doc)=>{
        if(doc){
            console.log('星标成功');
            res.send({
                success:true,
                code:'星标成功',
                doc:doc
            })
        }else{
            res.send({
                success:false,
                code:'星标失败'
            })
        }
    })
})

// 项目删除设置
app.post('/delete',function(req,res){
    Item.findOneAndUpdate({_id:req.body.id},{itemDel:req.body.bl,itemStar:!req.body.bl},(err,doc)=>{
        if(doc){
            console.log('删除成功');
            res.send({
                success:true,
                code:'删除成功',
                doc:doc
            })
        }else{
            res.send({
                success:false,
                code:'删除失败'
            })
        }
    })
})

// 项目设置title、info修改
app.post('/modify',function(req,res){
    Item.findOneAndUpdate({_id:req.body.id},{itemTitle:req.body.title,itemInfo:req.body.info},(err,doc)=>{
        if(doc){
            console.log('修改成功');
            res.send({
                success:true,
                code:'修改成功',
                doc:doc
            })
        }else{
            res.send({
                success:false,
                code:'修改失败'
            })
        }
    })
})

// 彻底删除项目
app.post('/thorough',function(req,res){
    Item.findOneAndDelete({_id:req.body.id},(err,doc)=>{
        if(doc){
            console.log('彻底删除成功');
            res.send({
                success:true,
                code:'删除成功',
                doc:doc
            })
        }else{
            res.send({
                success:false,
                code:'彻底删除失败'
            })
        }
    })
})


// --------------------------------------------------------------------other页面------------------------------------------------------------------------------------

//  查找用户任务
app.get('/one',function(req,res){
    Item.findOne({_id:req.query.id},function(err,doc){
        if(doc){
            res.send({success:true,doc:doc})
        }else{
            console.log(400)
        }
        
    })
})

// 定义好用户任务详情的数据类型
let detailSchema = new Schema({
    itemId:String,
    detailTitle:String
})

// 定义模块
let Detail = mongoose.model('detail',detailSchema,'itemDetail');

// 搜索详情内容
app.get('/content',function(req,res){
    Detail.find({itemId:req.query.id},function(err,doc){
        if(doc){
            res.send({success:true,doc:doc})
        }else{
            console.log(400)
        }
    })  
})