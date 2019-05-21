const express=require('express');
//引入mysql连接模块
const pool=require('../pool.js');
//使用express来创建路由器对象
var router=express.Router();
// //往路由器添加路由
// //1.检索用户
// router.post('/detail',(req,res)=>{
//     var obj=req.body;
//     //验证uid是否为空
//     var $uid=obj.uid;
//     if(!$uid){
//       res.send({code:401,msg:'uid required'});
//       //阻止往后执行
//       return;
//     }
//     //查询uid对应的数据
//     pool.query('SELECT * FROM person WHERE uid=?',[$uid],(err,result)=>{
//       if(err) throw err;
//       //如果返回的数组长度大于0，说明找到了该用户，把数据响应到浏览器；否则长度等于0，说明没有找到用户，响应一个对象
//       if(result.length>0){
//         res.send(result);
//       }else{
//         res.send({code:301,msg:'can not find'});
//       }
//     });
//   });
//   //2.用户注册
//   router.post('/reg',(req,res)=>{
//     var obj=req.body;
//     //验证数据是否为空
//     if(!obj.uname){
//       res.send({code:401,msg:'uname required'});
//       return;
//     }
//     if(!obj.upwd){
//       res.send({code:402,msg:'upwd required'});
//       return;
//     }
//     if(!obj.gender){
//       res.send({code:403,msg:'gender required'});
//       return;
//     }
//     if(!obj.position){
//       res.send({code:404,msg:'position required'});
//       return;
//     }
//     //执行SQL语句，将对象插入到xz_user中，如果插入成功，响应状态码200，消息 reg suc
//     pool.query('INSERT INTO person SET ?',[obj],(err,result)=>{
//       if(err) throw err;
//       //console.log(result);
//       if(result.affectedRows>0){
//         res.send({code:200,msg:'reg suc'});
//       }
//     });
//   });
// 1.学生登录:
router.get('/login',(req,res)=>{
    var examNum=req.query.examNum;
    var pwd=req.query.pwd;
    if(!examNum){
        res.send('examNum require');
        return;
    }
    if(!pwd){
        res.send('pwd require');
        return;
    }
    var sql='SELECT id FROM student WHERE examNum=? AND pwd=?';
    pool.query(sql,[examNum,pwd],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
            res.send({code:200,msg:'login suc'});   
        }else{
            res.send('登录失败,准考证号或或密码错误');
        }
    })
})
// 2.管理员登录:
router.get('/managelogin',(req,res)=>{
    var adminName=req.query.adminName;
    var pwd=req.query.pwd;
    if(!adminName){
        res.send('adminName require');
        return;
    }
    if(!pwd){
        res.send('pwd require');
        return;
    }
    var sql='SELECT id FROM admin WHERE adminName=? AND pwd=?';
    pool.query(sql,[adminName,pwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:'login suc'});
        }else{
            res.send('登录失败,准考证号或密码错误');
        }
    })
})
module.exports=router;