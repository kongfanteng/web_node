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
      data: results[0]
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
