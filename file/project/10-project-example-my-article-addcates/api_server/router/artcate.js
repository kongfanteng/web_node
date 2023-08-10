const expressJoi = require('express-joi')
// - - - - 导入 express，命名 express
const express = require('express')
// - - - - 创建路由对象，命名 router
const router = express()

// - - - - 导入用户信息的处理函数模块，命名 artcate_handler; artcate_handler.getArticleCates;
const artcate_handler = require('./router_handler/artcate')

// - - - - 导入需要的验证规则对象，命名 add_cate_schema
const { add_cate_schema } = require('../schema/artcate')

// - - - - 获取文章分类的列表数据 method-get; API-/cates
router.get('/cates', artcate_handler.getArticleCates)

// - - - - 新增文章分类的路由 post-/addcate, param-artcate_handler.addArticleCates
// - - - - 验证表单数据，调用 expressJoi.joiValidate(add_cate_schema)
router.post('/addcate', expressJoi.joiValidate(add_cate_schema), artcate_handler.addArticleCates)

// - - - - 向外共享路由对象
module.exports = router