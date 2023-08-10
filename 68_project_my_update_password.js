/**
 * @example
 *
 * ```js
    // Project-My-重置密码
    // - 1、重置密码
    // - - 简要描述：
    // - - - 重置密码
    // - - 请求 URL：
    // - - - /my/updatepwd
    // - - 请求方式：
    // - - - POST
    // - - Header：
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJsaXNpIiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6InhpYW9saSIsImVtYWlsIjoieGlhb2xpQDE2My5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY5MTUzNzExMywiZXhwIjoxNjkxNTczMTEzfQ.DIGMYyJaXKkn_3E_zg3tBFz0dWtXiipQXo2Ur8E05yo
    // - - 请求体：
    // - - - 参数名    | 必选  | 类型    |    说明
    // - - - oldPwd   | 是    | string |    原密码
    // - - - newPwd   | 是    | string |    新密码
    // - - 返回实例
    {
      "status": 0,
      "message": "更新密码成功！"
    }
    // - - 返回参数说明
    // - - - 参数名    | 类型    |    说明
    // - - - status   | int    |    请求是否成功，0：成功；1：失败
    // - - - message  | string |    请求结果的描述信息

    // - 2、实现步骤
    // - - 1）定义路由和处理函数
    // - - 2）验证表单数据
    // - - 3）实现重置密码的功能

    // - 3、具体实现
    // - - 1）定义路由和处理函数
    // - - -（1）在 /router/userinfo.js 模块中，新增重置密码的路由
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/userinfo.js}
    // - - - - 重置密码的路由 post-/updatepwd, param-userinfo_handler.updatePassword
    router.post('/updatepwd', userinfo_handler.updatePassword)

    // - - -（2）在 /router_handler/userinfo.js
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/router_handler/userinfo.js}
    // - - - - 重置密码的处理函数，func-updatePassword
    exports.updatePassword = (req, res) => {
      res.send('updatePassword ok')
    }
    
    // - - 2）验证表单数据
    // - - - 核心验证思路：旧密码与新密码，必须符合密码的验证规则，并且新密码不能与旧密码一致！
    // - - -（1）在 /schema/user.js 模块中，使用 exports 向外共享如下的验证规则对象
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/schema/user.js}
    // - - - - 验证规则对象 - 重置密码，命名 update_password_schema, 旧密码-oldPwd, 新密码-newPwd 
    exports.update_password_schema = {
      oldPwd: password.with('newPwd'),
      newPwd: password.with('oldPwd')
    }

    // - - -（2）在 /router/userinfo.js 模块中，导入需要的验证规则对象：
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/userinfo.js}
    // - - - - 导入需要的验证规则对象，命名 update_password_schema
    
    // - - -（3）并在重置密码的路由中，使用 update_password_schema 规则验证表单的数据
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/userinfo.js}
    // - - - - 验证表单数据，调用 expressJoi.joiValidate(update_password_schema)

    // - - 3）实现重置密码的功能
    // - - -（1）根据 id 查询用户是否存在
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/router_handler/userinfo.js}
    // - - - - 定义根据 id 查询用户数据的 SQL 语句，命名 sql
    const sql = 'select * from ev_users where id=?'
    // - - - - 执行 SQL 语句查询用户是否存在，调用 db.query, 参数 sql req.user.id
    db.query(sql, req.user.id, (err, results) => {
      // - - - - - 执行 SQL 语句失败
      if (err) return res.cc(err)
      // - - - - - 检查指定 id 的用户不存在 results.length !== 1 '用户不存在！'
      if (results.length !== 1) return res.cc('用户不存在')
      console.log('results:', results)
      return res.send('updatePassword ok')
    })

    // - - -（2）判断提交的旧密码是否正确
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/router_handler/userinfo.js}
    // - - - - 在头部区域导入 bcryptjs 后，命名 bcrypt
    const bcrypt = require('bcryptjs')
    // - - - - 即可使用 bcrypt.compareSync(提交的密码, 数据库中的密码) 方法验证密码是否正确
    // - - - - compareSync() 函数返回的为布尔值，true 表示密码正确，false 表示密码错误
    // - - - - 判断提交的旧密码是否正确，命名 compareResult '原密码错误'
    const compareResult = bcrypt.compareSync(
      req.body.oldPwd,
      results[0].password
    )
    if (!compareResult) return res.cc('原密码错误')

    // - - -（3）对新密码进行 bcrypt 加密之后，更新到数据库中
    // - - - - {@link file://./file/project/7-project-example-my-updatepwd/api_server/router/router_handler/userinfo.js}
    // - - - - 定义更新密码的 SQL 语句，命名 sql 语句 'set password=? where id=?'
    // - - - - 对新密码进行 bycrypt 加密处理，命名 newPwd
    // - - - - 执行 SQL 语句，根据 id 更新用户的密码，参数 [newPwd, req.user.id]
    // - - - - - SQL 语句执行失败
    // - - - - - SQL 语句执行成功，但是影响行数不等于 1，affectedRows '更新密码失败！'
    // - - - - - 更新密码成功，返回 '更新密码成功！'

 * ```
 *
 */