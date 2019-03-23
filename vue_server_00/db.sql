SET NAMES UTF8;
DROP DATABASE IF EXISTS aaa;
CREATE DATABASE aaa CHARSET=UTF8;
USE aaa;
CREATE TABLE news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title  VARCHAR(255),
  img_url  VARCHAR(255),
  ctime  DATETIME,
  point   INT,
  content VARCHAR(2000)
);


INSERT INTO news VALUES(null,'凯尔, 莫甘娜重做','http://127.0.0.1:3000/img/8.jpg',now(),325,'凯尔和莫甘娜已经重做归来,凯尔模型更加炫酷,根据等级长出翅膀,莫甘娜模型更具打击感');
INSERT INTO news VALUES(null,'新款上架','http://127.0.0.1:3000/mr/7.jpg',now(),325,'玩偶小精灵上线,可爱的精灵在等你召唤');
INSERT INTO news VALUES(null,'新款上架','http://127.0.0.1:3000/fx/1.jpg',now(),325,'简自豪UZI同款外套,火热售卖中,新款队服,更加美观时尚,快去看看吧');
INSERT INTO news VALUES(null,'情人节活动第三弹!','http://127.0.0.1:3000/img/2.jpg',now(),325,'2019年情人节的到来悄无声息,我们的玩偶将推出组合套装,给喜欢的她一点惊喜吧');
INSERT INTO news VALUES(null,'情人节活动第二弹!','http://127.0.0.1:3000/img/6.jpg',now(),125,'2019年情人节,联盟将重新售卖情人节限定皮肤快去看看吧');
INSERT INTO news VALUES(null,'情人节活动第一弹!','http://127.0.0.1:3000/img/5.jpg',now(),120,'2019年情人节,联盟将加入新的情人节系列皮肤,快去看看吧');
INSERT INTO news VALUES(null,'海豹阿福玩偶!','http://127.0.0.1:3000/mr/5.jpg',now(),120,'海豹阿福玩偶售卖火热,快去购买吧');
INSERT INTO news VALUES(null,'无限火力开启,一起征战联盟!','http://127.0.0.1:3000/img/7.jpg',now(),1335,'在新年到来之前,联盟重新启动无限火力模式,其中加入新的元素,快去体验吧');
INSERT INTO news VALUES(null,'新年福袋活动,一起来寻找欧皇吸欧气!','http://127.0.0.1:3000/img/1.jpg',now(),295,'为庆祝2019年新年,我们推出福袋活动,让惊喜的感觉陪伴着你');
INSERT INTO news VALUES(null,'新年大减价!手办集体降价中!','http://127.0.0.1:3000/img/2.jpg',now(),1225,'为庆祝2019年新年,我们推出大降价活动,让喜爱手办的朋友们多一些手办的陪伴');


CREATE TABLE shoplist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,
  title  VARCHAR(255),
  img_url  VARCHAR(255),
  price  decimal(10,2)
);
INSERT INTO shoplist VALUES(null,1,'吉格斯','http://127.0.0.1:3000/sb/1.jpg',199.00);
INSERT INTO shoplist VALUES(null,1,'金克斯','http://127.0.0.1:3000/sb/2.jpg',299.00);
INSERT INTO shoplist VALUES(null,1,'偶像歌手阿狸','http://127.0.0.1:3000/sb/3.jpg',129.00);
INSERT INTO shoplist VALUES(null,1,'小鱼人','http://127.0.0.1:3000/sb/4.jpg',350.00);
INSERT INTO shoplist VALUES(null,1,'源计划组合','http://127.0.0.1:3000/sb/5.jpg',399.00);
INSERT INTO shoplist VALUES(null,1,'源计划VN','http://127.0.0.1:3000/sb/6.jpg',299.00);
INSERT INTO shoplist VALUES(null,1,'源计划烬','http://127.0.0.1:3000/sb/7.jpg',189.00);
INSERT INTO shoplist VALUES(null,1,'Q版手办组合','http://127.0.0.1:3000/sb/8.jpg',599.00);
INSERT INTO shoplist VALUES(null,1,'佐伊','http://127.0.0.1:3000/sb/10.jpg',499.00);
INSERT INTO shoplist VALUES(null,1,'源计划组合2','http://127.0.0.1:3000/sb/11.jpg',399.00);
INSERT INTO shoplist VALUES(null,1,'星之守护者套装','http://127.0.0.1:3000/sb/12.jpg',399.00);
INSERT INTO shoplist VALUES(null,1,'星之守护者组合套装','http://127.0.0.1:3000/sb/13.jpg',399.00);
INSERT INTO shoplist VALUES(null,1,'星之守护者阿狸','http://127.0.0.1:3000/sb/14.png',159.00);


INSERT INTO shoplist VALUES(14,2,'简自豪同款外套','http://127.0.0.1:3000/fx/1.jpg',499.00);
INSERT INTO shoplist VALUES(15,2,'拳头官方卫衣','http://127.0.0.1:3000/fx/2.jpg',299.00);
INSERT INTO shoplist VALUES(16,2,'魄罗印花卫衣红','http://127.0.0.1:3000/fx/4.jpg',299.00);
INSERT INTO shoplist VALUES(17,2,'魄罗印花卫衣蓝','http://127.0.0.1:3000/fx/5.jpg',299.00);
INSERT INTO shoplist VALUES(18,2,'iG冠军卫衣','http://127.0.0.1:3000/fx/7.jpg',499.00);
INSERT INTO shoplist VALUES(19,2,'iG冠军帽子','http://127.0.0.1:3000/fx/8.jpg',199.00);
INSERT INTO shoplist VALUES(20,2,'iG冠军卫衣帽子两件装','http://127.0.0.1:3000/fx/9.jpg',650.00);


INSERT INTO shoplist VALUES(null,3,'提伯斯玩偶','http://127.0.0.1:3000/mr/0.jpg',99.00);
INSERT INTO shoplist VALUES(null,3,'魄罗王玩偶','http://127.0.0.1:3000/mr/1.jpg',95.00);
INSERT INTO shoplist VALUES(null,3,'小精灵玩偶','http://127.0.0.1:3000/mr/2.jpg',85.00);
INSERT INTO shoplist VALUES(null,3,'Q版狮子狗玩偶','http://127.0.0.1:3000/mr/3.jpg',100.00);
INSERT INTO shoplist VALUES(null,3,'小精灵玩偶套装','http://127.0.0.1:3000/mr/4.jpg',299.00);
INSERT INTO shoplist VALUES(null,3,'海豹阿福玩偶','http://127.0.0.1:3000/mr/5.jpg',59.00);
INSERT INTO shoplist VALUES(null,3,'搞怪魄罗玩偶组合','http://127.0.0.1:3000/mr/6.jpg',189.00);
INSERT INTO shoplist VALUES(null,3,'小精灵大套装','http://127.0.0.1:3000/mr/7.jpg',389.00);
INSERT INTO shoplist VALUES(null,3,'开心魄罗','http://127.0.0.1:3000/mr/9.jpg',89.00);
INSERT INTO shoplist VALUES(null,3,'哭泣魄罗','http://127.0.0.1:3000/mr/10.jpg',89.00);

CREATE TABLE cart(
  id    INT PRIMARY KEY AUTO_INCREMENT,
  count INT,
  price DECIMAL(15,2),
  pid   INT,
  uid   INT
);

CREATE TABLE login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO login VALUES(null,'tom',md5('123'));