// 入口文件
var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");

// 配置模版引擎
app.set("view engine","ejs");
// 设置默认模版的存放路径
app.set("views","./views");
// 托管静态资源
app.use("/node_modules",express.static("node_modules"));

// // 导入首页路由
// app.use(require("./router/indexRouter.js"));
// // 导入用户路由
// app.use(require("./router/userRouter.js"));
// 实现自动注册路由模块
fs.readdir(path.join(__dirname,"./router"),(err,filenames)=>{
  if(err) throw err;
  filenames.forEach(filename=>{
    var filePath = path.join(__dirname,"./router",filename);
    app.use(require(filePath));
  })
})


app.listen(3000,function(){
    console.log("http://127.0.0.1:3000");
});