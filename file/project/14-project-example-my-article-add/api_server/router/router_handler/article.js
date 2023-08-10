const path = require('path')
const db = require('../../db')

// - - - - 根据 Id 发布文章的处理函数，函数名-addArticle
exports.addArticle = (req, res) => {
  // - - - - 打印 req.body, req.file, 测试 multer 生效
  // - - - 整理要插入数据库的文章信息对象，导入 path，命名 path; 定义文章信息，命名 articleInfo, cover_img-path.join(); 文章发布时间-pub_date; 文章作者Id-author_id_req.user.id
  const articleInfo = {
    ...req.body,
    cover_img: path.join('/uploads', req.file.filename),
    pub_date: new Date(),
    author_id: req.user.id,
  }
  // - - - 定义发布文章列表的 SQL 语句，命名 sql; 语句 'set ?'
  const sql = 'insert into ev_articles set ?'
  // - - - 执行 SQL 语句，执行发布文章，参数 req.body, req.body.id
  db.query(sql, articleInfo, (err, results) => {
    // - - - - SQL 语句执行失败
    if (err) return res.cc(err)
    // - - - - 判断影响行数 affectedRows 不为 1, 返回 '发布文章失败！'
    if (results.affectedRows !== 1) return res.cc('发布文章失败！')
    // 发布文章数据成功
    return res.cc('发布文章成功！', 0)
  })
}

