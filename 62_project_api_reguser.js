/**
 * @example
 *
 * ```js
    // Project-开发注册用户的 API 接口
    // - 1、登录注册
    // - - 1）新建 ev_users 表
    // - - - （1）在 my_db_01 数据库中，新建 ev_users 表; 表配置 Charset/Collation-utf8mb4-utf8mb4_0900_ai_ci; Engine-InnoDB; Comments-用户信息表; 表结构 id-INT-PK-NN-UQ; username-VARCHAR(255)-NN-UQ; nickname-VARCHAR(255)-NN; email-VARCHAR(255); user_pic-TEXT;

    // - 2、安装并配置 mysql 模块
    // - - 在 API 接口项目中，需要安装并配置 mysql 这个第三方模块，来连接和操作 MySQL 数据库
    // - - 1）运行如下命令，安装 mysql 模块
    npm i mysql@2.18.1
    // - - 2）在项目根目录中新建 /db/index.js，在此自定义模块中创建数据库的连接对象：
    // - - - {@link file://./file/project/2-project-example-router/api_server/db/index.js}
    // - - - 导入 mysql 模块，命名 mysql
    const mysql = require('mysql')
    // - - - 创建数据库连接对象，命名 db, 属性 host, user, password, database
    const db = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: '1234',
      database: 'my_db_01'
    })
    // - - - 向外共享 db 数据库连接对象
    module.exports = db

    // - 3、注册
    // - - 0）实现步骤
    // - - -（1）检测表单数据是否合法
    // - - -（2）检测用户名是否被占用
    // - - -（3）对密码进行加密处理
    // - - -（4）插入新用户
    // - - 1）检测表单数据是否合法
    // - - - {@link file://./file/project/2-project-example-router/api_server/router/router_handler/user.js}
    // - - -（1）判断用户名和密码是否为空，API-/reguser
    // - - - - 接收表单数据 req.body，命名 userinfo
    const userinfo = req.body
    // - - - - 判断数据是否合法 username, password; 返回 status, message 用户名或密码不能为空！
    if (!userinfo.username || !userinfo.password) {
      return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }
    // - - - Postman 调试
    // - - 2）检测用户名是否被占用
    // - - - {@link file://./file/project/2-project-example-router/api_server/router/router_handler/user.js}
    // - - -（1）导入数据库操作模块，命名 db
    const db = require('../db/index')
    // - - -（2）定义 SQL 语句，命名 sql
    const sql = `select * from ev_users where username=?`
    // - - -（3）执行 SQL 语句并根据结果判断用户名被占用：
    db.query(sql, [userinfo.username], (err, results) => {
      // 执行 SQL 语句失败
      if(err) return res.send({ status: 1, message: err.message })
      // 用户名被占用
      if(results.length > 0) return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
      
    })
    // - - 3）对密码进行加密处理 {@link file://./file/project/2-project-example-router/api_server/router/router_handler/user.js}
    // - - - 为了保证密码的安全性，不建议在数据库以明文的形式保存用户密码，推荐对密码进行加密存储
    // - - - 在当前项目中，使用 bcryptjs 对用户密码进行加密，优点：
    // - - - - 加密后的密码，无法被逆向破解
    // - - - - 同一密码多次加密，得到的加密结果各不相同，保证了安全性
    // - - -（1）运行如下命令，安装指定版本
    npm i bcryptjs@2.4.3
    // - - -（2）在 /router_handler/user.js 中，导入 bcryptjs，命名 bcrypt
    const bcrypt = require('bcryptjs')
    // - - -（3）在注册用户的处理函数中，确认用户名可用之后，调用 bcrypt.hashSync(明文密码，随机盐的长度) 方法，对用户的密码进行加密处理：
    // - - - - 对用户的密码，进行 bcrypt 加密，返回值是加密之后的密码字符串，调用 bcrypt.hashSync()，参数 1 密码，参数 2：加盐长度
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // - - - - Postman 调试 
    // - - 4）插入新用户 {@link file://./file/project/2-project-example-router/api_server/router/router_handler/user.js}
    // - - -（1）定义插入用户的 SQL 语句，命名 sql
    const sql = 'insert into ev_users set ?'
    // - - -（2）调用 db.query() 执行 SQL 语句，插入新用户：
    db.query(sql, { username: userinfo.username, password: userinfo.password }, function(req, results) {
      // 执行 SQL 语句失败
      if(err) return res.send({ status: 1, message: err.message })
      // SQL 语句执行成功，但影响行数不为 1
      if(results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      // 注册成功
      res.send({ status: 0, message: '注册成功！' })
    })

 * ```
 *
 */