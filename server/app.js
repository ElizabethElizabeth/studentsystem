const express=require("express");
const bodyParser = require('body-parser');
const userRouter=require('./routes/user.js');
const moneyRouter=require('./routes/money.js');
var server=express();
server.listen(3000);
server.use(express.static("public"));
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use('/user',userRouter);
server.use('/money',moneyRouter);