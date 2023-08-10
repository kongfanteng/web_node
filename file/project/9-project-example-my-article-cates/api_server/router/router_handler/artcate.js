const db = require('../../db')
// - - - - 获取文章分类列表的处理函数，命名 getArticleCates
exports.getArticleCates = (req, res) => {
  // - - - 导入数据库模块，命名 db; 定义获取文章分类列表的 SQL 语句，命名 sql; 语句 'where is_delete=0 order by id asc'
  const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
  // - - - 执行 SQL 语句，根据 id 更新用户的密码，参数 [req.body.avatar, req.user.id]
  db.query(sql, (err, results) => {
    // - - - - SQL 语句执行失败
    if (err) return res.cc(err)
    // - - - - 获取文章分类列表成功，返回 '获取文章分类列表成功！'; data-results;
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results
    })
  })
}