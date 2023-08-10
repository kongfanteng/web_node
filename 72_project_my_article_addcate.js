/**
 * @example
 *
 * ```js
    // Project-Article-新增文章分类
    // - 1、新增文章分类
    // - - 简要描述：
    // - - - 新增文章分类列表
    // - - 请求 URL：
    // - - - /my/article/addcates
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - 请求体：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - name     | 是    | string |    分类名称
    // - - - alias    | 是    | string |    分类别名
    
    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 3）查询分类名称与分类别名是否被占用
    // - - 4）实现新增文章分类的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/artcate.js 模块中，新增新增文章分类的路由
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/artcate.js}
    // - - - - 新增文章分类的路由 post-/addcate, param-artcate_handler.addArticleCates
    router.post('/addcate', artcate_handler.addArticleCates)

    // - - -（2）在 /router_handler/artcate.js
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/router_handler/artcate.js}
    // - - - - 新增文章分类的处理函数，函数名-addArticleCates
    exports.addArticleCates = (req, res) => {
      res.send('addArticleCates ok')
    }

    // - - 2）验证表单数据
    // - - -（1）创建 /schema/artcate.js 文章分类数据验证模块，使用 exports 向外共享如下的验证规则对象
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/schema/artcate.js}
    // - - - - 验证规则对象 - 文章分类，命名 add_cate_schema, name-string().required(), alias-string-alphnum-required
    const { Joi } = require('express-joi')
    // - - - - 验证规则对象 - 文章分类，命名 add_cate_schema, name-string().required(), alias-string-alphnum-required
    exports.add_cate_schema = {
      name: Joi.string().required(),
      alias: Joi.string().alphanum().required(),
    }

    // - - -（2）在 /router/artcate.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/artcate.js}
    // - - - - 导入需要的验证规则对象，命名 add_cate_schema
    
    // - - -（3）并在文章分类的路由中，使用 add_cate_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/artcate.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(add_cate_schema)

    // - - 3）实现新增文章分类的功能
    // - - -（1）查询分类名称与别名是否被占用
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/router_handler/artcate.js}
    // - - - - 定义查重的 SQL 语句，命名 sql
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    // - - - - 执行 SQL 语句执行查重的操作，调用 db.query, 参数 sql, [req.body.name, req.body.alias]
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
      // - - - - - 执行 SQL 语句失败
      if (err) return res.cc(err)
      console.log('results:', results)
      // - - - - - 分类名称和分类别名都被占用
      if (results.length === 2) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
      if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
      if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
      if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
      return res.send('updatePassword ok')
    })

    // - - -（2）实现新增文章分类的插入功能
    // - - - - {@link file://./file/project/10-project-example-my-article-addcates/api_server/router/router_handler/artcate.js}
    // - - - - 定义新增文章分类的 SQL 语句，命名 sql 语句 'set ?'
    // - - - - 执行 SQL 语句，执行新增文章分类，参数 req.body
    // - - - - - SQL 语句执行失败
    // - - - - - SQL 语句执行成功，但是影响行数不等于 1，affectedRows '新增文章分类失败！'
    // - - - - - 新增文章分类成功，返回 '新增文章分类成功！'

 * ```
 *
 */