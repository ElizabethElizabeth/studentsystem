const express=require('express');
//引入mysql连接模块
const pool=require('../pool.js');
//使用express来创建路由器对象
var router=express.Router();

router.get("/",(req,res)=>{
  var pageIndex=req.query.pageIndex;
  var pageSize=req.query.pageSize;
  if(pageIndex!==undefined&&pageSize!==undefined){
    console.log(pageIndex,pageSize);
    var sql="select * from tuition limit ?,?"
    pool.query(sql,[pageIndex*pageSize,parseInt(pageSize)],(err,result)=>{
      if(err) console.log(err);
      res.send(result);
    })
  }else{
    var sql="select * from tuition";
    pool.query(sql,[],(err,result)=>{
      if(err) console.log(err);
      res.send(result);
    })
  }
  
})

module.exports=router;