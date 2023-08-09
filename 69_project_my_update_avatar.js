/**
 * @example
 *
 * ```js
    // Project-My-更换头像
    // - 1、更换头像
    // - - 简要描述：
    // - - - 更换头像
    // - - 请求 URL：
    // - - - /my/update/avatar
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJsczIiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoieGlhb2xpMiIsImVtYWlsIjoieGlhb2xpMkAxNjMuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2OTE2MjIyMzAsImV4cCI6MTY5MTY1ODIzMH0.CL-n2nWShUxRWNCIAP0vjHreEqEncz7UX4s0q34MFeI
    // - - 请求体：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - avatar   | 是    | string |    新头像，base64 格式的字符串
    // - - 返回实例
    {
      "status": 0,
      "message": "更新头像成功！"
    }
    // - - 返回参数说明
    // - - - 参数名    | 类型    |    说明
    // - - - status   | int    |    请求是否成功，0：成功；1：失败
    // - - - message  | string |    请求结果的描述信息

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 3）实现更新用户头像的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/userinfo.js 模块中，新增更新用户头像的路由
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/userinfo.js}
    // - - - - 更新用户头像的路由 post-/update/avatar, param-userinfo_handler.updateAvatar
    router.post('/update/avatar', userinfo_handler.updateAvatar)

    // - - -（2）在 /router_handler/userinfo.js
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/router_handler/userinfo.js}
    // - - - - 更新用户头像的处理函数，func-updateAvatar
    exports.updateAvatar = (req, res) => {
      res.send('updateAvatar ok')
    }

    // - - 2）验证表单数据
    // - - -（1）在 /schema/user.js 模块中，使用 exports 向外共享如下的验证规则对象
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/schema/user.js}
    // - - - - 验证规则对象 - 更换用户头像，命名 update_avatar_schema, string(), dataUri(), required()
    // - - - - dataUri() 是指如下格式的字符串数据：
    // - - - - data:image/png;base64,VE...
    exports.update_avatar_schema = {
      avatar: Joi.string().dataUri().required()
    }

    // - - -（2）在 /router/userinfo.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/userinfo.js}
    // - - - - 导入需要的验证规则对象，命名 update_avatar_schema
    
    // - - -（3）并在更换用户头像的路由中，使用 update_avatar_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/userinfo.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(update_avatar_schema)

    // - - 3）实现更换用户头像的功能
    // - - -（1）根据 id 查询用户是否存在
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/router_handler/userinfo.js}
    // - - - - 定义根据 id 查询用户数据额 SQL 语句，命名 sql
    const sql = 'select * from ev_users where id=?'
    // - - - - 执行 SQL 语句查询用户是否存在，调用 db.query, 参数 sql req.user.id
    db.query(sql, req.user.id, (err, results) => {
      // - - - - - 执行 SQL 语句失败
      if (err) return res.cc(err)
      // - - - - - 检查指定 id 的用户不存在 results.length !== 1 '用户不存在！'
      if (results.length !== 1) return res.cc('用户不存在')
      console.log('results:', results)
      return res.send('updateAvatar ok')
    })

    // - - -（3）更换用户头像
    // - - - - {@link file://./file/project/8-project-example-my-update-avatar/api_server/router/router_handler/userinfo.js}
    // - - - - 定义更新用户头像的 SQL 语句，命名 sql 语句 'set user_pic=? where id=?'
    const sql = 'update ev_users set user_pic=? where id=?'
    // - - - - 执行 SQL 语句，根据 id 更新用户的密码，参数 [req.body.avatar, req.user.id]
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
      // - - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - - SQL 语句执行成功，但是影响行数不等于 1，affectedRows '更新用户头像失败！'
      if (results.affectedRows !== 1) return res.cc('更新用户头像失败！')
      // - - - - - 更新用户头像成功，返回 '更新用户头像成功！'
      res.cc('更新用户头像成功！', 0)
    })

 * ```
 *
 */