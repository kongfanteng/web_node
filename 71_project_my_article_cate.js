/**
 * @example
 *
 * ```js
    // Project-Article-开发获取文章分类列表的接口
    // - 1、获取文章分类列表
    // - - 简要描述：
    // - - - 获取文章分类列表
    // - - 请求 URL：
    // - - - /my/article/cates
    // - - 请求方式：
    // - - - GET
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - 参数：
    // - - - 无
    // - - - avatar   | 是    | string |    新头像base64 格式的字符串
    // - - 返回示例
    {
      "status": 0,
      "message": "获取文章分类列表成功！",
      "data": [
        {
          "id": 1,
          "name": "最新",
          "alias": "Zuixin",
          "is_delete": 0
        }
      ]
    }
    
    // - 2、实现步骤
    // - - 1）初始化路由模块
    // - - 2）初始化路由处理函数模块
    // - - 3）获取文章分类列表数据

    // - 3、具体实现
    // - - 1）初始化路由模块
    // - - -（1）创建 /router/artcate.js 路由模块，并初始化如下的结构代码：
    // - - - - {@link file://./file/project/9-project-example-my-article-cates/api_server/router/artcate.js}
    // - - - - 导入 express，命名 express
    const express = require('express')
    // - - - - 创建路由对象，命名 router
    const router = express()
    // - - - - 获取文章分类的列表数据 method-get; API-/cates
    router.get('/cates', (req, res) => {
      res.send('ok')
    })
    // - - - - 向外共享路由对象
    module.exports = router
    // - - -（2）在 app.js 中导入并使用文章分类的路由模块
    // - - - - {@link file://./file/project/9-project-example-my-article-cates/api_server/app.js}
    // - - - - 导入 article.js，命名 artCateRouter; app.use(); 前缀-'/my/article'


    // - - 2）初始化路由处理函数模块
    // - - -（1）创建 /router/router-handler/artcate.js 路由处理函数模块，并初始化如下的代码结构
    // - - - - {@link file://./file/project/9-project-example-my-article-cates/api_server/router/router_handler/artcate.js}
    // - - - - 获取文章分类列表的处理函数，命名 getArticleCates
    // - - -（2）修改 /router/artcate.js 代码
    // - - - - {@link file://./file/project/9-project-example-my-article-cates/api_server/router/artcate.js}
    // - - - - 导入用户信息的处理函数模块，命名 artcate_handler; artcate_handler.getArticleCates;

    // - - 3）获取文章分类列表数据
    // - - - {@link file://./file/project/9-project-example-my-article-cates/api_server/router/router_handler/artcate.js}
    // - - - 导入数据库模块，命名 db; 定义获取文章分类列表的 SQL 语句，命名 sql; 语句 'where is_delete=0 order by id asc'
    // - - - 执行 SQL 语句，根据 id 更新用户的密码，参数 [req.body.avatar, req.user.id]
    db.query(sql, (err, results) => {
      // - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - 获取文章分类列表成功，返回 '获取文章分类列表成功！'
      
    })

 * ```
 *
 */