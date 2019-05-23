const express=require('express');
//引入mysql连接模块
const pool=require('../pool.js');
//使用express来创建路由器对象
var router=express.Router();

router.get("/",(req,res)=>{
  var examNum=req.query.examNum;
  if(examNum){
    var sql="select * from dormclass where examNum=?";
    pool.query(sql,[examNum],(err,result)=>{
      if(err) console.log(err);
      res.send(result[0]);
    })
  }else{
    res.send({code:0});
  }
})

module.exports=router;