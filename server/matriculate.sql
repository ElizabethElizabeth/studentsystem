SET NAMES UTF8;
DROP DATABASE IF EXISTS matriculate;
CREATE DATABASE matriculate CHARSET="UTF8";
USE matriculate;
-- 管理员信息表
CREATE TABLE admin(
	 id INT PRIMARY KEY AUTO_INCREMENT,
	 adminName VARCHAR(100),
	 pwd VARCHAR(50)	
); 
INSERT INTO admin VALUES(1,"admin1",123456);
INSERT INTO admin VALUES(2,"admin2",123456);
INSERT INTO admin VALUES(3,"admin3",123456);
INSERT INTO admin VALUES(4,"admin4",123456);
INSERT INTO admin VALUES(5,"admin5",123456);





-- 新生信息表
CREATE TABLE student(
   id INT PRIMARY KEY AUTO_INCREMENT,
   sname VARCHAR(100),
   age INT,
   idNum VARCHAR(100),
   examNum VARCHAR(100),
   admitNum VARCHAR(100),
   school VARCHAR(100),
   telephone VARCHAR(100),
   mobile VARCHAR(100),
   email VARCHAR(100),
   pwd VARCHAR(100),  
   gender VARCHAR(100),
   addressH VARCHAR(100),
   addressR VARCHAR(100),
   studentConfirm VARCHAR(100)，
   parentConfirm VARCHAR(100)，
   confirm VARCHAR(100)
); 
INSERT INTO student VALUES(1,"student1",18,610481199706141820,41102534265,0125,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊高级中学","学生未确认","家长未确认","未确认录取");
INSERT INTO student VALUES(2,"student2",18,610481199706141821,41102534266,0126,"陕西省兴平市秦岭中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇","陕西省兴平市秦岭中学","学生未确认","家长未确认","未确认录取");
INSERT INTO student VALUES(3,"student3",18,610481199706141822,41102534267,0127,"陕西省兴平市南郊中学",18089112326,18089112326,"1176726987@qq.com",123456,0,"陕西省兴平市西城北仁村","陕西省兴平市南郊中学","学生未确认","家长未确认","未确认录取");
INSERT INTO student VALUES(4,"student4",18,610481199706141823,41102534268,0128,"陕西省兴平市秦岭中学",18089112326,18089112326,"1176726987@qq.com",123456,0,"陕西省兴平市桑镇小赵村","陕西省兴平市秦岭中学","学生未确认","家长未确认","未确认录取");
INSERT INTO student VALUES(5,"student5",18,610481199706141824,41102534269,0129,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市西城安居小区","陕西省兴平市西郊高级中学","学生未确认","家长未确认","未确认录取");

-- 缴费信息表
CREATE TABLE payment(
	id INT PRIMARY KEY,
    sname VARCHAR(100),
    gender VARCHAR(100),
    mobile VARCHAR(100),
    department VARCHAR(100),
    class VARCHAR(100),
    cost VARCHAR(100),
    pay VARCHAR(100)
); 
INSERT INTO payment VALUES(1,"student1",1,18089112326,"计算机科学与信息管理系","计算机151班","17000/学年","未缴费");
INSERT INTO payment VALUES(2,"student2",1,18089112326,"计算机科学与信息管理系","计算机151班","17000/学年","未缴费");
INSERT INTO payment VALUES(3,"student3",0,18089112326,"外语系","日语152班","17000/学年","未缴费");
INSERT INTO payment VALUES(4,"student4",0,18089112326,"经管系","国贸151班","17000/学年","未缴费");
INSERT INTO payment VALUES(5,"student5",1,18089112326,"艺术系","国画151班","20000/学年","未缴费");



-- 宿舍班级表
CREATE TABLE dormClass(
    sname VARCHAR(100),
    examNum VARCHAR(100),
    gender VARCHAR(100),
    department VARCHAR(100),
    class VARCHAR(100),
    buildings VARCHAR(100),
    houseNumber VARCHAR(100)
); 
INSERT INTO dormClass VALUES("student1",41102534265,1,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES("student2",41102534266,1,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES("student3",41102534267,0,"外语系","日语152班","4号楼","2#213");
INSERT INTO dormClass VALUES("student4",41102534268,0,"经管系","国贸151班","2号楼","2#261");
INSERT INTO dormClass VALUES("student5",41102534269,1,"艺术系","国画151班","4号楼","4#460");

-- 录取确认表
CREATE TABLE confirm(
    sname VARCHAR(100),
    examNum VARCHAR(100),
    admitNum VARCHAR(100),
    idNum VARCHAR(100),
    conFirm VARCHAR(100)
); 
INSERT INTO confirm VALUES("student1",41102534265,0125,610481199706141820,"未确认录取");
INSERT INTO confirm VALUES("student2",41102534266,0126,610481199706141821,"未确认录取");
INSERT INTO confirm VALUES("student3",41102534267,0127,610481199706141822,"未确认录取");
INSERT INTO confirm VALUES("student4",41102534268,0128,610481199706141823,"未确认录取");
INSERT INTO confirm VALUES("student5",41102534269,0129,610481199706141824,"未确认录取");











-- 学费信息表
CREATE TABLE tuition(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    department VARCHAR(100),
    fee VARCHAR(100),
    deptelephone VARCHAR(100)
); 
INSERT INTO tuition VALUES(null,"新闻与传播类","17000/学年",029-38252930);
INSERT INTO tuition VALUES(null,"经管类","17000/学年",029-38252931);
INSERT INTO tuition VALUES(null,"理工科类","17000/学年",029-38252932);
INSERT INTO tuition VALUES(null,"外语类","17000/学年",029-38252933);
INSERT INTO tuition VALUES(null,"护理学","17000/学年",029-38252934);
INSERT INTO tuition VALUES(null,"通讯工程(中兴卓越班)","20000/学年",029-38252935);
INSERT INTO tuition VALUES(null,"艺术类","20000/学年",029-38252936);
INSERT INTO tuition VALUES(null,"播音与主持艺术(航空服务方向)","23000/学年",029-38252937);