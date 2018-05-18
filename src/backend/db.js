//引入mongoose的插件
let mongoose = require('mongoose');

//链接mongodb
mongoose.connect('mongodb://localhost:27017/data');

let db = mongoose.connection;

db.on('open',function(err){
    if(err){
        console.log('链接失败')
    }else{
        console.log('链接成功')
    }
})

module.exports = mongoose;