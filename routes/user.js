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
//2.用户注册
router.get('/reg',(req,res)=>{
    var {sname,age,idNum,examNum,pwd,school,telephone,mobile,email,gender,addressH,addressR,studentConfirm,parentConfirm,department,classc,buildings,houseNumber}=req.query;
    console.log(sname,age,idNum,examNum,pwd,school,telephone,mobile,email,gender,addressH,addressR,studentConfirm,parentConfirm,department,classc,buildings,houseNumber);
    //验证数据是否为空
    if(sname&&age&&idNum&&examNum&&pwd&&school&&telephone&&mobile&&email&&gender!==undefined&&addressH&&addressR&&studentConfirm!==undefined&&parentConfirm!==undefined&&department&&classc&&buildings&&houseNumber!==undefined){
        //执行SQL语句，将对象插入到xz_user中，如果插入成功，响应状态码200，消息 reg suc
        pool.query(
            'INSERT INTO student values(null,?,?,?,?,null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [sname,age,idNum,examNum,school,telephone,mobile,email,pwd,gender,addressH,addressR,studentConfirm,parentConfirm,studentConfirm=="学生已确认"&&parentConfirm=="家长已确认"?"已确认录取":"未确认录取",department,classc,buildings,houseNumber],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.affectedRows>0){
                res.send({code:200,msg:'reg suc'});
            }
        });
    }else{
        res.send({code:0,msg:'添加失败！资料不全！'});
    }
    
});
// 1.学生登录:
router.get('/login',(req,res)=>{
    var examNum=req.query.examNum;
    var pwd=req.query.pwd;
    if(!examNum){
        res.send({code:0, msg:'examNum require'});
        return;
    }
    if(!pwd){
        res.send({code:0, msg:'pwd require'});
        return;
    }
    var sql='SELECT id FROM student WHERE examNum=? AND pwd=?';
    pool.query(sql,[examNum,pwd],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
            req.session.uid=result[0]["id"]; 
            req.session.role="student"; 
            res.send({code:200,msg:'login suc'}); 
            console.log(req.session);
        }else{
            res.send({code:0, msg:'登录失败,准考证号或密码错误'});
        }
    })
})
// 2.老师登录:
router.get('/teacherlogin',(req,res)=>{
    var teacherName=req.query.teacherName;
    var pwd=req.query.pwd;
    if(!teacherName){
        res.send({code:0, msg: 'teacherName require'});
        return;
    }
    if(!pwd){
        res.send({code:0, msg: 'pwd require'});
        return;
    }
    var sql='SELECT * FROM teacher WHERE teacherName=? AND pwd=?';
    pool.query(sql,[teacherName,pwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            req.session.uid=result[0]["id"];
            req.session.role="teacher";
            res.send({code:200,msg:'login suc',uname:result[0]["teacherName"]})
        }else{
            res.send({code:0,msg:'登录失败,用户名或密码错误'});
        }
    })
})
// 3. 老师修改密码: 
router.get("/teacherchangepwd",(req,res)=>{
    var uid=req.session.uid;
    var oldpwd=req.query.oldpwd;
    var newpwd=req.query.newpwd;
    if(uid&&oldpwd&&newpwd){
        var sql="select * from teacher where id=? and pwd=?"
        pool.query(sql,[uid,oldpwd],(err,result)=>{
            if(err){ console.log(err); }
            else if(result.length==0){
                res.send({code:0, msg:"修改失败！原密码不正确！"})
            }else{
                var sql="update teacher set pwd=? where id=?";
                pool.query(sql,[newpwd,uid],(err,result)=>{
                    if(err){console.log(err);}
                    else{
                        res.send({code:200, msg:"修改成功！"})
                    }
                })
            }
        })
    }else{
        res.send({code:0, msg:"必须填写原密码和新密码！"});
    }
})
// 4. 学生修改密码: 
router.get("/changepwd",(req,res)=>{
    var examNum=req.query.examNum;
    var oldpwd=req.query.oldpwd;
    var newpwd=req.query.newpwd;
    if(examNum&&oldpwd&&newpwd){
        var sql="select * from student where examNum=? and pwd=?"
        pool.query(sql,[examNum,oldpwd],(err,result)=>{
            if(err){ console.log(err); }
            else if(result.length==0){
                res.send({code:0, msg:"修改失败！原密码不正确！"})
            }else{
                var sql="update student set pwd=? where examNum=?";
                pool.query(sql,[newpwd,examNum],(err,result)=>{
                    if(err){console.log(err);}
                    else{
                        res.send({code:200, msg:"修改成功！"})
                    }
                })
            }
        })
    }else{
        res.send({code:0, msg:"必须填写正确的原密码和新密码！"});
    }
})
//判断是否登录
router.get("/islogin",(req,res)=>{
    var uid=req.session.uid;
    console.log(req.session);
    if(uid){
        var role=req.session.role;
        if(role=="student")
            var sql="select * from student where id=?";
        else
            var sql="select * from admin where id=?"
        pool.query(sql,[uid],(err,result)=>{
            if(err) console.log(err);
            res.send({code:1, uname: result[0]["sname"]||result[0]["adminName"]});
        })
    }else{
        res.send({code:0, msg:"未登录"});
    }
})
//获得用户信息
router.get("/",(req,res)=>{
    var uid=req.session.uid;
    var role=req.session.role;
    if(uid){
        if(role=="student")
            var sql="select * from student where id=?";
        else
            var sql="select * from teacher where id=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) console.log(err);
            res.send(result[0]);
        })
    }else{
        res.send({code:0, msg:"请先登录！"})
    }
})
//获取学生确认状态
router.get("/confirm",(req,res)=>{
    var sname=req.query.sname;
    var idNum=req.query.idNum;
    var examNum=req.query.examNum;
    var pwd=req.query.pwd;
    if(sname&&idNum&&examNum&&pwd){
        var sql="select * from student where sname=? and idNum=? and examNum=? and pwd=?";
        pool.query(sql,[sname,idNum,examNum,pwd],(err,result)=>{
            if(err) console.log(err);
            if(result.length==0){
                res.send({code:0, msg:"查无此人！"})
            }else{
                res.send(result[0]);
            }
        })
    }else{
        res.send({code:0, msg:"必须同时提供学生姓名，身份证号，准考证号和密码！"})
    }
})
//学生确认
router.get("/changeConfirm",(req,res)=>{
    var sname=req.query.sname;
    var idNum=req.query.idNum;
    var examNum=req.query.examNum;
    var pwd=req.query.pwd;
    if(sname&&idNum&&examNum&&pwd){
        var sql="select * from student where sname=? and idNum=? and examNum=? and pwd=? ";
        pool.query(sql,[sname,idNum,examNum,pwd],(err,result)=>{
            if(err) console.log(err);
            if(result.length==0){
                res.send({code:0, msg:"查无此人！"})
            }else{
                var uid=result[0]["id"];
                if(result[0]["studentConfirm"]=="学生未确认"){
                    var sql="update student set studentConfirm='学生已确认' where id=?";
                }else{
                    var sql="update student set parentConfirm='家长已确认', confirm='已确认录取' where id=?";
                }
                pool.query(sql,[uid],(err,result)=>{
                    if(err) console.log(err);
                    res.send({code:1});
                })
            }
        })
    }else{
        res.send({code:0, msg:"必须同时提供学生姓名，身份证号，准考证号和密码！"})
    }
})
router.get("/logout",(req,res)=>{
    delete req.session.uid;
    res.send({code:200});
})
module.exports=router;