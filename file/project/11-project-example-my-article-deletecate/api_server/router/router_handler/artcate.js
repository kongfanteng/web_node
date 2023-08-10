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
// - - - - 新增文章分类的处理函数，函数-addArticleCates
exports.addArticleCates = (req, res) => {
  // - - - - 定义查重的 SQL 语句，命名 sql
  const sql = 'select * from ev_article_cate where name=? or alias=?'
  // - - - - 执行 SQL 语句执行查重的操作，调用 db.query, 参数 sql, [req.body.name, req.body.alias]
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // - - - - - 执行 SQL 语句失败
    if (err) return res.cc(err)
    // - - - - - 分类名称和分类别名都被占用
    if (results.length === 2) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名都被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
    // - - - - 定义新增文章分类的 SQL 语句，命名 sql 语句 'set ?'
    const sql = 'insert into ev_article_cate set ?'
    // - - - - 执行 SQL 语句，执行新增文章分类，参数 req.body
    db.query(sql, req.body, (err, results) => {
      // - - - - - SQL 语句执行失败
      if (err) return res.cc(err)
      // - - - - - SQL 语句执行成功，但是影响行数不等于 1，affectedRows '新增文章分类失败！'
      if (results.affectedRows !== 1) return res.cc('新增文章分类失败！')
      // - - - - - 新增文章分类成功，返回 '新增文章分类成功！'
      res.cc('新增文章分类成功！', 0)
    })
  })
}

// - - - - 删除文章分类的处理函数，函数名-deleteCateById
exports.deleteCateById = (req, res) => {
  // - - - 定义删除文章分类列表的 SQL 语句，命名 sql; 语句 'set is_delete=1 where id=?'
  const sql = 'update ev_article_cate set is_delete=1 where id=?'
  // - - - 执行 SQL 语句，执行删除文章分类，参数 req.params.id
  db.query(sql, req.params.id, (err, results) => {
    // - - - - SQL 语句执行失败
    if (err) return res.cc(err)
    // - - - - 影响行数不等于 1 affectedRows, 返回 '删除文章分类失败！'
    if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')
    // 删除文章分类成功
    return res.cc('删除文章分类成功！', 0)
  })
}