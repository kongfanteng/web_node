const expressJoi = require('express-joi')
// - - - - 导入 express，命名 express
const express = require('express')
// - - - - 创建路由对象，命名 router
const router = express()

// - - - - 导入用户信息的处理函数模块，命名 artcate_handler; artcate_handler.getArticleCates;
const artcate_handler = require('./router_handler/artcate')

// - - - - 导入需要的验证规则对象，add_cate_schema delete_cate_schema get_cate_schema update_cate_schema
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')

// - - - - 获取文章分类的列表数据 method-get; API-/cates
router.get('/cates', artcate_handler.getArticleCates)

// - - - - 新增文章分类的路由 post-/addcate, param-artcate_handler.addArticleCates
// - - - - 验证表单数据，调用 expressJoi.joiValidate(add_cate_schema)
router.post('/addcate', expressJoi.joiValidate(add_cate_schema), artcate_handler.addArticleCates)

// - - - - 删除文章分类的路由 post-/deletecate/:id, param-artcate_handler.deleteCateById
// - - - - 验证表单数据，调用 expressJoi.joiValidate(delete_cate_schema)
router.get('/deletecate/:id', expressJoi.joiValidate(delete_cate_schema), artcate_handler.deleteCateById)

// - - - - 根据 Id 获取文章分类的路由 get-/cates/:id, param-artcate_handler.getArticleById
// - - - - 验证表单数据，调用 expressJoi.joiValidate(get_cate_schema)
router.get('/cates/:id', expressJoi.joiValidate(get_cate_schema), artcate_handler.getArticleById)

// - - - - 根据 Id 更新文章分类的路由 post-/updatecate, param-artcate_handler.updateCateById
// - - - - 验证表单数据，调用 expressJoi.joiValidate(update_cate_schema)
router.post('/updatecate', expressJoi.joiValidate(update_cate_schema), artcate_handler.updateCateById)

// - - - - 向外共享路由对象
module.exports = router