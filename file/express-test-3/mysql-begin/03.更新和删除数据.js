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
 * 用户 User 类型定义
 * @typedef {Object} User
 * @property {string} username - 用户名
 * @property {string} password - 用户密码
 * @property {string} [id] - 用户 id
 */

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
 * 更新用户数据
 * @param {User} user - 需要更新的用户数据
 * @example
 *
 * ```js
    const user = { id: 6, username: 'aaa', password: '000' }
    updateUser(user)
 * ```
 * 
 */
function updateUser(user) {
  // - - - 1）要更新的数据对象，命名 user，id: 7
  // const user = { id: 7, username: 'aaa', password: '000' }
  // - - - 2）要执行的 SQL 语句，命名 sqlStr
  const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?'
  // - - - 3）调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
  db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {
      console.log(user, '更新数据成功')
    } // 成功
  })
}

/**
 * 更新用户数据（快捷）
 * @param {User} user - 要更新的用户数据
 * @example
 *
 * ```js
    // 调用
    const user = { id: 7, username: 'aaa', password: '000' }
    updateUserQuick(user)
 * ```
 * 
 */
function updateUserQuick(user) {
  // - - - 1）要更新的数据对象，命名 user，id: 7
  //
  // - - - 2）要执行的 SQL 语句，命名 sqlStr
  const sqlStr = 'UPDATE users SET ? WHERE id=?'
  // - - - 3）调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
  db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {
      console.log(user, '更新数据成功')
    } // 成功
  })
}

/**
 * 根据用户 id 删除用户信息
 * @param {number} id - 用户 id
 * @example
 *
 * ```js
    // 调用
    // - - - 删除 id 为 7 的用户
    deleteUserById(7)
 * ```
 * 
 */
function deleteUserById(id) {
  // - - - 要执行的 SQL 语句，命名 sqlStr
  const sqlStr = 'DELETE FROM users WHERE id=?'
  // - - - 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
  // - - - - 注意：如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
  // - - - - - 如果 SQL 语句中只有一个占位符，则可以省略数组
  db.query(sqlStr, id, (err, results) => {
    if (err) return console.log('err:', err)
    if (results.affectedRows === 1) console.log(`id: ${id} 删除数据成功！`)
  })
  // - - -注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
}
queryUsers()

/**
 * 根据用户 id 标记删除用户
 * @param {number} id - 需要删除用户 id
 * @example
 *
 * ```js
    // 调用
    markDeleteUserById(5)
 * ```
 * 
 */
function markDeleteUserById(id) {
  // - - - 要执行的 SQL 语句，命名 sqlStr
  const sqlStr = 'UPDATE USERS SET status=1 WHERE id=?'
  db.query(sqlStr, id, (err, results) => {
    if (err) return console.log('err:', err.message)
    if (results.affectedRows === 1) console.log(`id: ${JSON.stringify(id)} 删除数据成功！`)
    queryUsers()
  })
}
markDeleteUserById(5)
