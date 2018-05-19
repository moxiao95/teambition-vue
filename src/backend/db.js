//引入mongoose的插件
let mongoose = require('mongoose');

//链接mongodb
mongoose.connect('mongodb://localhost:27017/data');

let db = mongoose.connection;

// 连接服务器，并且说明当前的连接状态
db.on('open',function(err){
    if(err){
        console.log('链接失败')
    }else{
        console.log('链接成功')
    }
})
// 暴露出去mongoose
module.exports = mongoose;