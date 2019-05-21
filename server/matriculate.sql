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
   confirm VARCHAR(100)
); 
INSERT INTO student VALUES(1,"student1",18,610481199706141820,41102534265,0126,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊中学","未确认录取");
INSERT INTO student VALUES(2,"student2",18,610481199706141820,41102534265,0126,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊中学","未确认录取");
INSERT INTO student VALUES(3,"student3",18,610481199706141820,41102534265,0126,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊中学","未确认录取");
INSERT INTO student VALUES(4,"student4",18,610481199706141820,41102534265,0126,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊中学","未确认录取");
INSERT INTO student VALUES(5,"student5",18,610481199706141820,41102534265,0126,"陕西省兴平市西郊高级中学",18089112326,18089112326,"1176726987@qq.com",123456,1,"陕西省兴平市马嵬镇南留村","陕西省兴平市西郊中学","未确认录取");


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
INSERT INTO payment VALUES(1,"student1",1,18089112326,"计算机科学与信息管理系","计算机151班",5500,"未缴费");
INSERT INTO payment VALUES(2,"student2",1,18089112326,"计算机科学与信息管理系","计算机151班",5500,"未缴费");
INSERT INTO payment VALUES(3,"student3",1,18089112326,"计算机科学与信息管理系","计算机151班",5500,"未缴费");
INSERT INTO payment VALUES(4,"student4",1,18089112326,"计算机科学与信息管理系","计算机151班",5500,"未缴费");
INSERT INTO payment VALUES(5,"student5",1,18089112326,"计算机科学与信息管理系","计算机151班",5500,"未缴费");



-- 宿舍班级表
CREATE TABLE dormClass(
	id INT PRIMARY KEY,
    sname VARCHAR(100),
    gender VARCHAR(100),
    mobile VARCHAR(100),
    department VARCHAR(100),
    class VARCHAR(100),
    buildings VARCHAR(100),
    houseNumber VARCHAR(100)
); 
INSERT INTO dormClass VALUES(1,"student1",1,18089112326,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES(2,"student2",1,18089112326,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES(3,"student3",1,18089112326,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES(4,"student4",1,18089112326,"计算机科学与信息管理系","计算机151班","2号楼","2#259");
INSERT INTO dormClass VALUES(5,"student5",1,18089112326,"计算机科学与信息管理系","计算机151班","2号楼","2#259");


CREATE TABLE confirm(
    sname VARCHAR(100),
    examNum VARCHAR(100),
    admitNum VARCHAR(100),
    idNum VARCHAR(100),
    confirm VARCHAR(100)
); 
INSERT INTO confirm VALUES("student1",41102534265,0126,610481199706141820,"未确认录取");
INSERT INTO confirm VALUES("student2",41102534265,0126,610481199706141820,"未确认录取");
INSERT INTO confirm VALUES("student3",41102534265,0126,610481199706141820,"未确认录取");
INSERT INTO confirm VALUES("student4",41102534265,0126,610481199706141820,"未确认录取");
INSERT INTO confirm VALUES("student5",41102534265,0126,610481199706141820,"未确认录取");
