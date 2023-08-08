
// - - - 导入数据库操作模块，命名 db
const db = require('../../db/index')

// - - - 在 /router_handler/user.js 中，导入 bcryptjs，命名 bcrypt
const bcrypt = require('bcryptjs')

// - - - 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
// - - - 注册用户的处理函数 属性名 regUser
exports.regUser = (req, res) => {
  // - - - 判断用户名和密码是否为空，API-/reguser
  // - - - - 接收表单数据 req.body，命名 userinfo
  const userinfo = req.body
  // - - - - 判断数据是否合法 username, password; 返回 status, message 用户名或密码不能为空！
  if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不能为空！' })
  }
  // - - - 定义 SQL 语句，命名 sql
  const sql = `select * from ev_users where username=?`
  // - - - 执行 SQL 语句并根据结果判断用户名被占用：
  db.query(sql, [userinfo.username], (err, results) => {
    // 执行 SQL 语句失败
    if(err) return res.send({ status: 1, message: err.message })
    // 用户名被占用
    if(results.length > 0) return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    
    // - - - 在注册用户的处理函数中，确认用户名可用之后，调用 bcrypt.hashSync(明文密码，随机盐的长度) 方法，对用户的密码进行加密处理：
    // - - - - 对用户的密码，进行 bcrypt 加密，返回值是加密之后的密码字符串，调用 bcrypt.hashSync()，参数 1 密码，参数 2：长度
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
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
  })
}
// - - - 登录的处理函数 属性名 login
exports.login = (req, res) => {
  res.send('login ok')
}
