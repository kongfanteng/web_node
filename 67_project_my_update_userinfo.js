/**
 * @example
 *
 * ```js
    // Project-My-更新用户的基本信息
    // - 1、更新用户的基本信息
    // - - 简要描述：
    // - - - 更新用户的基本信息
    // - - 请求 URL：
    // - - - /my/userinfo
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJsaXNpIiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6InhpYW9saSIsImVtYWlsIjoieGlhb2xpQDE2My5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY5MTUzNzExMywiZXhwIjoxNjkxNTczMTEzfQ.DIGMYyJaXKkn_3E_zg3tBFz0dWtXiipQXo2Ur8E05yo
    // - - 请求体：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - id       | 是    | number |    用户 id
    // - - - nickname | 是    | string |    昵称
    // - - - email    | 是    | number |    邮箱
    // - - 返回实例
    {
      "status": 0,
      "message": "修改用户信息成功！"
    }

    // - 2、定义路由和处理函数
    // - - 1）在 /router/userinfo.js 模块中，新增更新用户基本信息的路由
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/userinfo.js}
    // - - - 更新用户的基本信息 method-post, API-/userinfo, param-userinfo_handler.updateUserInfo
    router.post('/userinfo', userinfo_handler.updateUserInfo)

    // - - 2）在 router_handler/userinfo.js 模块中，定义向外共享更新用户基本信息的路由处理函数
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/router_handler/userinfo.js}
    // - - - 更新用户基本信息的处理函数 updateUserInfo

    // - 3、验证表单数据
    // - - 1)在 /schema/user.js 验证规则模块中，定义 id，nickname，email 的验证规则
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/schema/user.js}
    // - - - 定义 id，nickname，email 的验证规则，命名 id, nickname, email, 规则 number, integer, min, required, email
    const id = Joi.types.number().integer().min(1).required()
    const nickname = Joi.types.string().required()
    const email = Joi.types.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })

    // - - 2）并使用 exports 向外共享如下的验证规则对象
    exports.update_userinfo_schema = { id, nickname, email }

    // - - 3）在 /router/userinfo.js 模块中，导入验证数据合法性的中间件
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/userinfo.js}
    // - - - 导入验证数据合法性的中间件 express-joi ，命名 expressJoi
    const expressJoi = require('express-joi')

    // - - 4）在 /router/userinfo.js 模块中，导入需要的验证规则对象
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/userinfo.js}
    // - - - 导入需要的验证规则对象，命名 update_userinfo_schema
    const { update_userinfo_schema } = require('../schema/user')

    // - - 5）在 /router/userinfo.js 模块中，修改更新用户的基本信息 /userinfo 的路由
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/userinfo.js}
    // - - - 更新用户的基本信息，method-/userinfo, 传参-expressJoi.joiValidate(update_userinfo_schema)
    
    // - 4、SQL 操作
    // - - 1、定义待执行的 SQL 语句
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/router_handler/userinfo.js}
    // - - - SQL 语句，命名 sql
    const sql = `update ev_users set ? where id=?`

    // - - 2、调用 db.query() 执行 SQL 语句并传参 
    // - - - {@link file://./file/project/6-project-example-my-userinfo/api_server/router/router_handler/userinfo.js}
    // - - - 执行 sql 操作, [req.body, req.body.id], affectedRows 长度, '修改基本信息成功'
    db.query(sql, [req.body, req.body.id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
      return res.cc('修改基本信息成功！', 0)
    })
    
 * ```
 *
 */