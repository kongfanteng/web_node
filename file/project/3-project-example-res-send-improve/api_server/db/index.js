// - - - 导入 mysql 模块，命名 mysql
const mysql = require('mysql')
// - - - 创建数据库连接对象，命名 db, 属性 host, user, password, database
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'my_db_01',
})
// - - - 向外共享 db 数据库连接对象
module.exports = db
