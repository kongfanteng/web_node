// - - - 1）导入 mysql 模块，命名 mysql
const mysql = require('mysql')
// - - - 2）建立与 MySQL 数据库的连接，调用函数 createPool，命名 db，参数如下
const db = mysql.createPool({
  // - - - - host 数据库的 IP 地址，例 127.0.0.1
  // - - - - user 登录数据库的账号，例 root
  // - - - - password 登录数据库的密码，例 1234
  // - - - - database 指定要操作哪个数据库，例 my_db_01
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'my_db_01',
  
})
db.query('SELECT 1', (err, results) => {
  if (err) return console.log(err.message)
  // 只要能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
  console.log(results)
})
