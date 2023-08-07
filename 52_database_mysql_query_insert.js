/**
 * @example
 *
 * ```js
    // Database-MySQL-mysql 模块-查询和插入数据
    // - 1、查询数据 {@link file://./file/express-test-3/mysql-begin/02.查询和插入数据.js}
    // - - 查询 users 表中所有的数据
    db.query('SELECT * FROM users', (err, results) => {
      // 查询失败
      if(err) return console.log(err.message)
      // 查询成功
      console.log(results)
    })
    // - - 注意：如果执行的是 select 查询语句，则执行的结果是数组

    // - 2、插入数据 {@link file://./file/express-test-3/mysql-begin/02.查询和插入数据.js}
    // - - 向 users 表中新增数据，其中 username 为 Spider-Man，passowrd 为 pcc321。示例代码如下：
    // - - - 1）要插入到 users 表中的数据对象，命名 user
    const user = { username: 'Spider-Man', password: 'pcc321' }
    // - - - 2）待执行的 SQL 语句，其中英文的 ? 表示 占位符，命名 sqlStr
    const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
    // - - - 3）使用数组的形式，依次为 ? 占位符指定具体的值
    db.query(sqlStr, [user.username, user.password], (err, results) => {
      if(err) return console.log(err.message) // 失败
      if(results.affectedRows === 1) { console.log('插入数据成功') } // 成功
    })
    // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入数据成功

    // - 3、插入数据的便捷方式 {@link file://./file/express-test-3/mysql-begin/02.查询和插入数据.js}
    // - - 向表中新增新数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
    // - - 1）要插入到 users 表中的数据对象，命名 user
    const user = { username: 'Spider-Man2', password: 'pcc4321' }
    // - - 2）待执行的 SQL 语句，其中英文的 ? 表示占位符
    const sqlStr = 'INSERT INTO users SET ?'
    // - - 3）直接将数据对象当做占位符的值
    db.query(sqlStr, user, (err, results) => {
      if(err) return console.log(err.message) // 失败
      if(results.affectedRows === 1) { console.log(user, '插入数据成功') } // 成功
    })

 * ```
 *
 */