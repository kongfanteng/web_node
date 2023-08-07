/**
 * @example
 *
 * ```js
    // Database-MySQL-mysql 模块-更新和删除数据
    // - 1、更新数据 {@link file://./file/express-test-3/mysql-begin/03.更新和删除数据.js}
    // - - 可以通过如下方式，更新表中的数据：
    // - - - 1）要更新的数据对象，命名 user，id: 7
    const user = { id: 7, username: 'aaa', password: '000' }
    // - - - 2）要执行的 SQL 语句，命名 sqlStr
    const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?'
    // - - - 3）调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
    db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
      if (err) return console.log(err.message) // 失败
      if (results.affectedRows === 1) { console.log(user, '更新数据成功') } // 成功
    })

    // - 2、更新数据的快捷方式 {@link file://./file/express-test-3/mysql-begin/03.更新和删除数据.js}
    // - - 更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式更新表数据：
    // - - - 1）要更新的数据对象，命名 user，id: 7
    const user = { id: 7, username: 'aaa', password: '000' }
    // - - - 2）要执行的 SQL 语句，命名 sqlStr
    const sqlStr = 'UPDATE users SET ? WHERE id=?'
    // - - - 3）调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
    db.query(sqlStr, [user, user.id], (err, results) => {
      if (err) return console.log(err.message) // 失败
      if (results.affectedRows === 1) { console.log(user, '更新数据成功') } // 成功
    })

    // - 3、删除数据
    // - - 在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据。示例如下：
    // - - - 要执行的 SQL 语句，命名 sqlStr
    const sqlStr = 'DELETE FROM users WHERE id=?'
    // - - - 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
    // - - - - 注意：如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
    // - - - - - 如果 SQL 语句中只有一个占位符，则可以省略数组
    // - - - 删除 id 为 7 的用户
    db.query(sqlStr, 7, (err, results) => {
      if (err) return console.log('err:', err.message)
      if (results.affectedRows === 1) console.log('id: 7 删除数据成功！')
    })
    // - - -注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性

    // - 4、标记删除
    // - - 使用 DELETE 语句，会真正的把数据从表中删除。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
    // - - 所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。
    // - - 当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可。
    // - - - 标记删除使用 UPDATE 语句替代 DELETE 语句；只更新数据的状态，并没有真正删除
    db.query('UPDATE USERS SET status=1 WHERE id=?', 6, (err, results)=>{
      if (err) return console.log('err:', err.message)
      if (results.affectedRows === 1) console.log(`id: 6 删除数据成功！`)
    })


 * ```
 *
 */