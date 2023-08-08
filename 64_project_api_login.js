/**
 * @example
 *
 * ```js
    // Project-开发登录的 API 接口
    // - 0、实现步骤
    // - - 1）检测表单数据是否合法
    // - - 2）根据用户名查询用户的数据
    // - - 3）判断用户输入的密码是否正确
    // - - 4）生成 JWT 的 Token 字符串

    // - 1、检测表单数据是否合法
    // - - 将 /router/user.js 中登录的路由代码修改如下：
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/router/router_handler/user.js}
    // - - - 登录的路由验证规则
    router.post('/login', expressJoi.joiValidate(reg_login_schema), userHandler.login)

    // - 2、根据用户名查询用户的数据
    // - - {@link file://./file/project/4-project-example-router-login/api_server/router/router_handler/user.js}
    // - - 1）接收表单数据 req.body，命名 userinfo
    const userinfo = req.body
    // - - 2）定义 SQL 语句，命名 sql
    const sql = 'select * from ev_users where username=?'
    // - - 3）执行 SQL 语句，db.query, 查询用户的数据
    // - - - 执行 SQL 语句失败 res.cc()
    // - - - 查询数据不等于 1，results.length，返回 res.cc()
    db.query(sql, userinfo.username, (err, results) => {
      if (err) return res.cc(err)
      if (results.length !== 1) return res.cc(`用户名：${userinfo.username} 不存在，登录失败`)
    })

    // - 3、判断用户输入的密码是否正确
    // - - {@link file://./file/project/4-project-example-router-login/api_server/router/router_handler/user.js}
    // - - 核心实现思路：调用 bcrypt.compareSync(用户提交的密码，数据库中的密码) 方法比较密码是否一致
    // - - 返回值是布尔值(true 一致、false 不一致)
    // - - 代码实现
    // - - - 拿着用户输入的密码，和数据库中存储的密码进行对比，结果命名 compareResult
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    // - - - 如果对比的结果等于 false，则证明用户输入的密码错误
    if (!compareResult) return res.cc('密码错误，登录失败！')
    // - - Postman 调试

 * ```
 *
 */