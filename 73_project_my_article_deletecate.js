/**
 * @example
 *
 * ```js
    // Project-Article-根据 id 删除文章分类接口
    // - 1、根据 id 删除文章分类
    // - - 简要描述：
    // - - - 根据 id 删除文章分类
    // - - 请求 URL：
    // - - - /my/article/deletecate/:id
    // - - 请求方式：
    // - - - GET
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - 请求体：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - id       | 是    | string |    要删除的分类 id，注意：这是一个 URL 参数
    // - - 返回示例
    {
      "status": 0,
      "message": "删除文章分类成功！",
    }

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 4）实现删除文章分类的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/artcate.js 模块中，删除文章分类的路由
    // - - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/router/artcate.js}
    // - - - - 删除文章分类的路由 get-/deletecate/:id, param-artcate_handler.deleteCateById
    router.get('/deletecate/:id', artcate_handler.deleteCateById)

    // - - -（2）在 /router_handler/artcate.js 模块中，定义并向外分享 删除文章分类 的路由处理函数
    // - - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/router/router_handler/artcate.js}
    // - - - - 删除文章分类的处理函数，函数名-deleteCateById
    exports.deleteCateById = (req, res) => {
      res.send('deleteCateById ok')
    }

    // - - 2）验证表单数据
    // - - -（1）在 /schema/artcate.js 验证模块中，定义 id 的验证规则
    // - - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/schema/artcate.js}
    const { Joi } = require('express-joi')
    // - - - - 验证规则对象 - 删除文章分类，命名 delete_cate_schema, id-number-integer-required
    exports.delete_cate_schema = {
      id: Joi.number().integer().required(),
    }

    // - - -（2）在 /router/artcate.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/router/artcate.js}
    // - - - - 导入需要的验证规则对象，命名 delete_cate_schema
    
    // - - -（3）并在文章分类的路由中，使用 delete_cate_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/router/artcate.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(delete_cate_schema)

    // - - 3）实现删除文章分类的功能
    // - - - {@link file://./file/project/11-project-example-my-article-deletecate/api_server/router/router_handler/artcate.js}
    // - - - 定义删除文章分类列表的 SQL 语句，命名 sql; 语句 'set is_delete=1 where id=?'
    // - - - 执行 SQL 语句，执行删除文章分类，参数 req.params.id
    db.query(sql, req.params.id, (err, results) => {
      // - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - 影响行数不等于 1 affectedRows, 返回 '删除文章分类失败！'
      if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')
      // 删除文章分类成功
      return res.cc('删除文章分类成功！', 0)
    })

    11-project-example-my-article-deletecate
 * ```
 *
 */