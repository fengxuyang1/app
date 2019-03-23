//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
const session = require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,          //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));
//7 加载第三方模块body-parser
//body-parser针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8 配置对特殊json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))


//功能一:home 组件轮播图片  
app.get("/imageList",(req,res)=>{
   //1:将轮播图中所需图片 复制public/img
   //2:查询
   var list = [
     {id:1,img_url:"http://127.0.0.1:3000/img/1.jpg"},
     {id:2,img_url:"http://127.0.0.1:3000/img/2.jpg"},
     {id:3,img_url:"http://127.0.0.1:3000/img/3.jpg"},
     {id:4,img_url:"http://127.0.0.1:3000/img/4.jpg"},
   ];
   res.send(list); 
});

//功能二:获取新闻列表分页显示
//1:请求参数  pno 页码 pageSize 页大小
//2:sql
// SELECT id,title,img_url,ctime,point FROM xz_news LIMIT ?,?
//3:返回数据结果json
//  {code:1,data:[]} 
app.get("/sList",(req,res)=>{
  //1:获取参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值  pno 1 pageSize 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //3:创sql语句 
  var sql = " SELECT id,title,img_url";
  sql +=" ,ctime,point";
  sql +=" FROM news";
  sql +=" LIMIT ?,?";
  var ps = parseInt(pageSize);
  //(2-1)*7= 7
  var offset = (pno-1)*pageSize;
  pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
  //4:返回 
});

//功能三:商品分页显示 
app.get("/shoplist",(req,res)=>{
  //1:参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:允许使用默认值  1 4  
  if(!pno){pno=1}
  if(!pageSize){pageSize=4}
  //3:sql
 var sql = " SELECT id,title,";
 sql+=" price,img_url";
 sql+=" FROM shoplist";
 sql+=" LIMIT ?,?";
 //4:json 
 var offset = (pno-1)*pageSize;
 pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
 }) 
});

//功能四:获取一条新闻详细信息
app.get("/findNewsInfo",(req,res)=>{
  //1:获取参数
  var id = req.query.id;
  //2:创建正则表达式
  var reg = /^\d{1,}$/;
  //3:如果验证失败 输出错误信息{code:-1}
  if(!reg.test(id)){
   res.send({code:-1,msg:"新闻编号格式有误"});
   return;//函数停止运行
  }
  //4:创建sql
  var sql = " SELECT id,title,content,ctime";
      sql +=" ,img_url FROM news";
      sql +=" WHERE id = ?";
  //5:发送sql语句
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
  //6:输出查询结果 输出{code:1}
})

//功能五:获取商品详细信息
app.get("/findProduct",(req,res)=>{
  var pid = req.query.pid; 
  var sql =" SELECT id,title,price,img_url FROM shoplist WHERE id = ?";
  //3:json {code:1,data:[]}
  pool.query(sql,[pid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
});

//功能六:用户登录
app.get("/login",(req,res)=>{
 //参数
 var uname = req.query.uname;
 var upwd = req.query.upwd;
 //sql
 var sql = " SELECT id FROM login WHERE uname = ? AND upwd = md5(?)";
 pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;  
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      //将用户登录凭证保存在服务器端 session对象中
      var id=result[0].id     //获取当前用户id
      req.session.uid=id;     //保存session
      res.send({code:1,msg:"登录成功"});
    }
 });
})

//注册
app.get('/reg',(req,res)=>{
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql="INSERT INTO login VALUES(null,?,md5(?));"
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"})
    }else{
      res.send({code:-1,msg:"注册失败"})
    }
  })
})

//退出登录
app.get("/logout",(req,res)=>{
  //1:清空uid
  req.session.uid = null;
  //2:返回消息
  res.send({code:1,msg:"己退出"});
});

//功能七:将商品添加至购物车
app.get("/addcart",(req,res)=>{
  //0:判断用户是否登录
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  //1:参数 pid count uid price
  var pid = parseInt(req.query.pid);
  //var count = 1;
  var uid = req.session.uid;
  var price = parseInt(req.query.price);
  var sql =" SELECT id FROM cart WHERE uid = ? AND pid = ?";
  pool.query(sql,[uid,pid],(err,result)=>{
    if(err)throw err; 
    if(result.length==0){
     var sql = ` INSERT INTO cart`;
     sql+=` VALUES(null,1,${price},${pid},${uid})`;
    }else{
      var sql = ` UPDATE cart`;
      sql+=` SET count=count+1 WHERE pid=${pid}`;
      sql+=` AND uid = ${uid}`;
    }
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"添加成功"});
      }else{
        res.send({code:-1,msg:"添加失败"});
      }
    })
  })
});

//功能八:购物车列表
app.get("/cartlist",(req,res)=>{
 //如果session对象中uid不存在
 //原因:当前没有登录
 if(!req.session.uid){
   res.send({code:-1,msg:"请登录"});
   return;
 }
  //参数 uid   
 var uid = req.session.uid;
 //sql  多表查询
 var sql = " SELECT c.id,c.count,c.price,";
 sql+=" c.uid,c.pid,l.title,l.img_url";
 sql+=" FROM cart c,shoplist l";
 sql+=" WHERE l.id = c.pid";
 sql+=" AND c.uid = ?";
 pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result})
 })
});

//功能九:删除购物车中一件商品3
//http://127.0.0.1:3000/delCartItem?id=5
app.get("/delCartItem",(req,res)=>{
  //1:参数 id   9:38
  var id = req.query.id;
  //2:sql  DELETE
  var sql = "DELETE FROM cart WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"});
     }else{
       res.send({code:-1,msg:"删除失败"});
     }
  });
  //3:json msg
});

//功能十:删除购物车中多个指定商品
app.get("/removeMItem",(req,res)=>{
   //1:参数 ids  3,4 9:35
   var ids = req.query.ids;
   //2:sql DELETE
   var sql =" DELETE FROM cart ";
       sql+=" WHERE id IN ("+ids+")";
   //http://127.0.0.1:3000/removeMItem?ids=3,8
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"})
     }else{
       res.send({code:-1,msg:"删除失败"}) 
     }
   })
   //4:请求地址格式
}); 