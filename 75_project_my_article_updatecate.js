/**
 * @example
 *
 * ```js
    // Project-Article-开发根据 id 更新文章分类
    // - 1、根据 id 更新文章分类数据
    // - - 简要描述：
    // - - - 根据 id 更新文章分类数据
    // - - 请求 URL：
    // - - - /my/article/updatecate
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - URL 参数：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - id       | 是    | int    |    分类 id
    // - - - name     | 是    | string |    分类名称
    // - - - alias    | 是    | string |    分类别名
    // - - 返回示例
    {
      "status": 0,
      "message": "更新分类信息成功！",
    }

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 3）查询 分类名称 与 分类别名 是否被占用
    // - - 4）实现更新文章分类的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/artcate.js 模块中，添加 更新文章分类 的路由
    // - - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/artcate.js}
    // - - - - 根据 Id 更新文章分类的路由 post-/updatecate, param-artcate_handler.updateCateById
    router.post('/updatecate', artcate_handler.updateCateById)

    // - - -（2）在 /router_handler/artcate.js 模块中，定义并向外共享 根据 Id 更新文章分类 的路由处理函数
    // - - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/router_handler/artcate.js}
    // - - - - 根据 Id 更新文章分类的处理函数，函数名-updateCateById
    exports.updateCateById = (req, res) => {
      res.send('updateCateById ok')
    }

    // - - 2）验证表单数据
    // - - -（1）在 /schema/artcate.js 验证模块中，定义 id 的验证规则
    // - - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/schema/artcate.js}
    // - - - - 验证规则对象 - 更新文章分类数据，命名 update_cate_schema, id, name, alias
    exports.update_cate_schema = {
      id,
      name,
      alias
    }

    // - - -（2）在 /router/artcate.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/artcate.js}
    // - - - - 导入需要的验证规则对象，命名 update_cate_schema
    
    // - - -（3）并在文章分类的路由中，使用 update_cate_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/artcate.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(update_cate_schema)

    // - - 3）查询分类名称与别名是否被占用
    // - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/router_handler/artcate.js}
    // - - - 定义查重的 SQL 语句，命名 sql
    const sql = 'select * from ev_article where id<>? and (name=? or alias=?)'
    // - - - 执行 SQL 语句查重，调用 db.query, 参数 sql, [req.user.id, req.body.name, req.body.alias]
    db.query(sql, [req.user.id, req.body.name, req.body.alias], (err, results) => {
      // - - - - 执行 SQL 语句失败
      if (err) return res.cc(err)
      // - - - - - 分类名称和分类别名都被占用
      if (results.length === 2) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
      if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
      if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
      if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
      return res.send('updatePassword ok')
    })

    // - - 4）实现更新文章分类的功能
    // - - - {@link file://./file/project/13-project-example-my-article-updatecate/api_server/router/router_handler/artcate.js}
    // - - - 定义更新文章分类列表的 SQL 语句，命名 sql; 语句 'set ? where id=?'
    // - - - 执行 SQL 语句，执行更新文章分类，参数 req.body, req.body.id
    db.query(sql, req.params.id, (err, results) => {
      // - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - 判断影响行数 affectedRows 不为 1, 返回 '更新文章失败！'
      if (results.affectedRows !== 1) return res.cc('更新文章分类失败！')
      // 更新文章分类数据成功
      return res.cc('更新文章分类成功！', 0)
    })
    
 * ```
 *
 */