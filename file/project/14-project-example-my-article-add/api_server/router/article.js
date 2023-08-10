// - - - - 导入 express, 创建路由对象，向外共享路由对象，在 app.js 挂载路由
const express = require('express')
// - - - - 导入 multer，命名 multer; 导入 path，命名 path
const multer = require('multer')
const path = require('path')
// - - - - 配置上传路径 ../../uploads; 命名 upload
const upload = multer({ dest: path.join(__dirname, '../../uploads') })
const router = express.Router()

const article_handler = require('./router_handler/article')
// - - - - 导入需要的验证规则对象，命名 add_article_schema
const { add_article_schema } = require('../schema/article')
const expressJoi = require('express-joi')

// - - - - 根据 Id 发布文章的路由 post-/add, param-article_handler.addArticle
// - - - - upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// - - - - 将文件类型的数据，解析并挂载到 req.file 属性中
// - - - - 将文本类型的数据，解析并挂载到 req.body 属性中，调用-upload.single('cover_img')
// - - - - 验证表单数据，调用 expressJoi.joiValidate(add_article_schema) TODO: 与 upload 不兼容
router.post('/add', upload.single('cover_img'), article_handler.addArticle)

module.exports = router
