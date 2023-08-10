// - - - - 导入 express，命名 express
const express = require('express')
// - - - - 创建路由对象，命名 router
const router = express()

// - - - - 导入用户信息的处理函数模块，命名 artcate_handler; artcate_handler.getArticleCates;
const artcate_handler = require('./router_handler/artcate')

// - - - - 获取文章分类的列表数据 method-get; API-/cates
router.get('/cates', artcate_handler.getArticleCates)
// - - - - 向外共享路由对象
module.exports = router