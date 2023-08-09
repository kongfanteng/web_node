// - - - - 在头部区域导入 bcryptjs 后，命名 bcrypt
const bcrypt = require('bcryptjs')
// - - - - 导入数据库操作模块，命名 db
const db = require('../../db')

// - - - - 获取用户基本信息的处理函数，命名 getUserInfo
exports.getUserInfo = (req, res) => {
  // - - - - 定义 SQL 语句，命名 sql
  const sql = `select id, username, nickname, email, user_pic from ev_users where id=?`
  // - - - - 调用 db.query() 执行 SQL 语句
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1)
      return res.cc(`用户名：${req.user.id}获取用户信息失败！`)
    return res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results[0],
    })
  })
}

// - - - 更新用户基本信息的处理函数 updateUserInfo
exports.updateUserInfo = (req, res) => {
  // - - - SQL 语句，命名 sql
  const sql = `update ev_users set ? where id=?`
  // - - - 执行 sql 操作, [req.body, req.body.id], affectedRows 长度, '修改基本信息成功！'
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
    return res.cc('修改基本信息成功！', 0)
  })
}

// - - - - 重置密码的处理函数，func-updatePassword
exports.updatePassword = (req, res) => {
  // 原密码与新密码不相同
  if (req.body.oldPwd === req.body.newPwd)
    return res.cc('原密码与新密码不能相同！')

  // - - - - 定义根据 id 查询用户数据额 SQL 语句，命名 sql
  const sql = 'select * from ev_users where id=?'
  // - - - - 执行 SQL 语句查询用户是否存在，调用 db.query, 参数 sql req.user.id
  db.query(sql, req.user.id, (err, results) => {
    // - - - - - 执行 SQL 语句失败
    if (err) return res.cc(err)
    // - - - - - 检查指定 id 的用户不存在 results.length !== 1 '用户不存在！'
    if (results.length !== 1) return res.cc('用户不存在')
    // - - - - 即可使用 bcrypt.compareSync(提交的密码, 数据库中的密码) 方法验证密码是否正确
    // - - - - compareSync() 函数返回的为布尔值，true 表示密码正确，false 表示密码错误
    // - - - - 判断提交的旧密码是否正确，命名 compareResult '原密码错误'
    const compareResult = bcrypt.compareSync(
      req.body.oldPwd,
      results[0].password
    )
    if (!compareResult) return res.cc('原密码错误')
    // - - - - 定义更新密码的 SQL 语句，命名 sql 语句 'set password=? where id=?'
    const sql = 'update ev_users set password=? where id=?'
    // - - - - 对新密码进行 bycrypt 加密处理，命名 newPwd
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
    // - - - - 执行 SQL 语句，根据 id 更新用户的密码，参数 [newPwd, req.user.id]
    db.query(sql, [newPwd, req.user.id], (err, results) => {
      // - - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - - SQL 语句执行成功，但是影响行数不等于 1，affectedRows '更新密码失败！'
      if (results.affectedRows !== 1) return res.cc('更新密码失败！')
      // - - - - - 更新密码成功，返回 '更新密码成功！'
      return res.cc('更新密码成功！', 0)
    })
  })
}
