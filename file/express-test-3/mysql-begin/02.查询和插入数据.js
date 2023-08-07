// - - - 1）导入 mysql 模块，命名 mysql
const mysql = require('mysql')
// - - - 2）建立与 MySQL 数据库的连接，调用函数 createPool，命名 db，参数如下
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'my_db_01',
})

/**
 * 查询 users 表中的所有数据并打印
 * @example
 *
 * ```js
    // 调用
    queryUsers()
 * ```
 * 
 */
function queryUsers() {
  // - - 查询 users 表中所有的数据
  db.query('SELECT * FROM users', (err, results) => {
    // 查询失败
    if (err) return console.log(err.message)
    // 查询成功
    console.log('查询 users 表中的所有数据:', results)
  })
}

/**
 * @typedef {object} User
 * @property {string} User.username - 用户名
 * @property {string} User.password - 用户密码
 *
 * */

/**
 * 向 users 表中插入用户数据
 * @param {User} user - 插入用数据
 * @example
 *
 * ```js
    // 调用
    const user = { username: 'Spider-Man', password: 'pcc321' }
    insert(user)
 * ```
 * 
 */
function insert(user) {
  // - - - 1）要插入到 users 表中的数据对象，命名 user
  // - - - 2）待执行的 SQL 语句，其中英文的 ? 表示 占位符，命名 sqlStr
  const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
  // - - - 3）使用数组的形式，依次为 ? 占位符指定具体的值
  db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {
      console.log(user, '插入数据成功')
    } // 成功
  })
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
}

/**
 * 向 users 表中插入用户数据快捷方式
 * @param {User} user - 插入用数据
 * @example
 *
 * ```js
    // 调用
    const user = { username: 'Spider-Man2', password: 'pcc4321' }
    insert_quick(user)
 * ```
 * 
 */
function insert_quick(user) {
  // - - 向表中新增新数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
  // - - 1）要插入到 users 表中的数据对象，命名 user

  // - - 2）待执行的 SQL 语句，其中英文的 ? 表示占位符
  const sqlStr = 'INSERT INTO users SET ?'
  // - - 3）直接将数据对象当做占位符的值
  db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {
      console.log(user, '快捷插入数据成功')
    } // 成功
  })
}
