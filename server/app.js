const express=require("express");
const bodyParser = require('body-parser');
const session=require("express-session");
const userRouter=require('./routes/user.js');
const moneyRouter=require('./routes/money.js');
const dormclass=require("./routes/dormclass.js");
var server=express();
server.listen(3000);
server.use(session({
  secret: '随机字符串',
  resave: false,
  saveUninitialized: true
}))
server.use(express.static("public"));
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use('/user',userRouter);
server.use('/money',moneyRouter);
server.use('/dormclass',dormclass);