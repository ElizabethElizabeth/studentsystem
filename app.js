const express=require("express");
const bodyParser = require('body-parser');
const session=require("express-session");
const userRouter=require('./routes/user.js');
const moneyRouter=require('./routes/money.js');
const dormclass=require("./routes/dormclass.js");
const student=require("./routes/student.js")
var server=express();
server.listen(3000);

server.use(express.static("public"));
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false
}))
server.use('/user',userRouter);
server.use('/money',moneyRouter);
server.use('/dormclass',dormclass);
server.use('/student',student);