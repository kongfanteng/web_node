/**
 * @example
 *
 * ```js
    // Project-Article-发布新文章
    // - 1、发布新文章
    // - - 简要描述：
    // - - - 发布新文章
    // - - 请求 URL：
    // - - - /my/article/add
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - URL 参数：
    // - - - 参数名    | 必选  | 类型        |    说明
    // - - - title    | 是    | string     |    文章标题
    // - - - cate_id  | 是    | int        |    所属文章 id
    // - - - content  | 是    | string     |    文章内容
    // - - - cover_img| 是    | blob 二进制 |    文章封面
    // - - - state    | 是    | string     |    状态，可选值为：已发布、草稿
    // - - 返回示例
    {
      "status": 0,
      "message": "发布文章信息成功！",
    }

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）使用 multer 解析表单数据
    // - - 3）验证表单数据
    // - - 4）实现发布文章的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）创建 /router/article.js 路由模块，初始化并添加 发布文章 的路由
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/article.js}
    // - - - - 导入 express, 创建路由对象，向外共享路由对象，在 app.js 挂载路由
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/app.js}
    // - - - - 根据 Id 发布文章的路由 post-/add, param-article_handler.addArticle
    router.post('/add', article_handler.addArticle)

    // - - -（2）在 /router_handler/article.js 模块中，定义并向外共享 根据 Id 发布文章 的路由处理函数
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/router_handler/article.js}
    // - - - - 根据 Id 发布文章的处理函数，函数名-addArticle
    exports.addArticle = (req, res) => {
      res.send('addArticle ok')
    }

    // - - 2）使用 multer 解析表单数据
    // - - - 注意：使用 express.urlencoded() 中间件无法解析 multipart/form-data 格式的请求体数据
    // - - - 推荐使用 multer 来解析 multipart/form-data 格式的表单数据
    // - - -（1）运行如下命令，在项目中安装 multer
    npm i multer@1.4.2
    // - - -（2）在 /router_handler/article.js 模块中导入并配置 multer
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/router_handler/article.js}
    // - - - - 导入 multer，命名 multer; 导入 path，命名 path
    // - - - - 配置上传路径 ../../uploads
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/uploads/readme.md}

    // - - -（3）修改发布新文章的路由如下
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/article.js}
    // - - - - upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
    // - - - - 将文件类型的数据，解析并挂载到 req.file 属性中
    // - - - - 将文本类型的数据，解析并挂载到 req.body 属性中，调用-upload.single('cover_img')

    // - - -（4）在 /router_handler/article.js 模块中的 addArticle 处理函数，将 multer 解析出来的数据进行打印
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/router_handler/article.js}
    // - - - - 打印 req.body, req.file, 测试 multer 生效


    // - - 2）验证表单数据
    // - - -（1）在 /schema/article.js 验证模块中，定义 id 的验证规则
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/schema/article.js}
    // - - - - 验证规则对象 - 发布文章数据，命名 add_article_schema, title, cate_id, content, state
    exports.add_article_schema = {
      title: Joi.string().required(),
      cate_id: Joi.number().integer().min(1).required(),
      content: Joi.string().required().allow(''),
      state: Joi.string().valid('已发布', '草稿').required(),
    }

    // - - -（2）在 /router/article.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/article.js}
    // - - - - 导入需要的验证规则对象，命名 add_article_schema
    
    // - - -（3）并在文章的路由中，使用 add_article_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/article.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(add_article_schema)

    // - - 4）实现发布文章的功能
    // - - - {@link file://./file/project/14-project-example-my-article-add/api_server/router/router_handler/article.js}
    // - - - 整理要插入数据库的文章信息对象，导入 path，命名 path; 定义文章信息，命名 articleInfo, cover_img-path.join(); 文章发布时间-pub_date; 文章作者Id-author_id_req.user.id
    // - - - 定义发布文章列表的 SQL 语句，命名 sql; 语句 'set ?'
    // - - - 执行 SQL 语句，执行发布文章，参数 req.body, req.body.id
    db.query(sql, articleInfo, (err, results) => {
      // - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - 判断影响行数 affectedRows 不为 1, 返回 '发布文章失败！'
      if (results.affectedRows !== 1) return res.cc('发布文章失败！')
      // 发布文章数据成功
      return res.cc('发布文章成功！', 0)
    })

    
    
 * ```
 *
 */