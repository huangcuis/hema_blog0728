var express = require("express");

// 创建用户路由
var router = express.Router();

router
.get("/register",(req,res)=>{
  res.render("./user/register",{});
})
module.exports = router;