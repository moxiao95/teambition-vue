let express = require('express');
let app = express();




app.get('/',(req,res)=>{
    console.log('有人来了')
})



app.listen(8000,()=>{
    console.log('服务启动')
})
