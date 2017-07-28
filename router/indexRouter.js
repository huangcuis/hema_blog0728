var express = require("express");
// 创建路由
var router = express.Router();

var indexCtrl = require("../controller/indexCltr.js")
router
  .get("/", indexCtrl.showIndexPage);

module.exports = router;