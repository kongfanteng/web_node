/**
 * @example
 *
 * ```js
    // Project-Article-开发根据 id 获取文章分类数据
    // - 1、根据 id 获取文章分类数据
    // - - 简要描述：
    // - - - 根据 id 获取文章分类数据
    // - - 请求 URL：
    // - - - /my/article/cates/:id
    // - - 请求方式：
    // - - - GET
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - URL 参数：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - id       | 是    | string |    分类 id，注意：这是一个 URL 参数
    // - - 返回示例
    {
      "status": 0,
      "message": "获取文章分类数据成功！",
      "data": {
        "id": 1,
        "name": "最新",
        "alias": "ZuiXin",
        "is_delete": 0
      }
    }

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 3）实现获取文章分类的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/artcate.js 模块中，添加 根据 Id 获取文章分类 的路由
    // - - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/router/artcate.js}
    // - - - - 根据 Id 获取文章分类的路由 get-/cates/:id, param-artcate_handler.getArticleById
    router.get('/cates/:id', artcate_handler.getArticleById)

    // - - -（2）在 /router_handler/artcate.js 模块中，定义并向外共享 根据 Id 获取文章分类 的路由处理函数
    // - - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/router/router_handler/artcate.js}
    // - - - - 根据 Id 获取文章分类的处理函数，函数名-getArticleById
    exports.getArticleById = (req, res) => {
      res.send('getArticleById ok')
    }

    // - - 2）验证表单数据
    // - - -（1）在 /schema/artcate.js 验证模块中，定义 id 的验证规则
    // - - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/schema/artcate.js}
    // - - - - 验证规则对象 - 获取文章分类数据，命名 get_cate_schema, id-number-integer-required
    exports.get_cate_schema = {
      id
    }

    // - - -（2）在 /router/artcate.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/router/artcate.js}
    // - - - - 导入需要的验证规则对象，命名 get_cate_schema
    
    // - - -（3）并在文章分类的路由中，使用 get_cate_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/router/artcate.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(get_cate_schema)

    // - - 3）实现获取文章分类的功能
    // - - - {@link file://./file/project/12-project-example-my-article-cates-byid/api_server/router/router_handler/artcate.js}
    // - - - 定义获取文章分类列表的 SQL 语句，命名 sql; 语句 'where id=?'
    // - - - 执行 SQL 语句，执行获取文章分类，参数 req.params.id
    db.query(sql, req.params.id, (err, results) => {
      // - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - 返回结果长度不为 1, 返回 '获取文章分类失败！'
      if (results.length !== 1) return res.cc('获取文章分类数据失败！')
      // 获取文章分类数据成功
      return res.send({
        status: 0,
        message: '获取文章分类数据成功！',
        data: results[0]
      })
    })
    
 * ```
 *
 */