// - - - - 导入数据库操作模块，命名 db
const db = require('../../db')

// - - - - 获取用户基本信息的处理函数，命名 getUserInfo
exports.getUserInfo = (req, res) => {
  // - - - - 定义 SQL 语句，命名 sql
  const sql = `select id, username, nickname, email, user_pic from ev_users where id=?`
  // - - - - 调用 db.query() 执行 SQL 语句
  console.log('req:', req)
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1)
      return res.cc(`用户名：${req.user.id}获取用户信息失败！`)
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results[0]
    })
  })
}
