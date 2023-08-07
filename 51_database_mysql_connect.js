/**
 * @example
 *
 * ```js
    // Database-MySQL-安装并配置 MySQL 模块
    // - 1、在项目中操作数据库的步骤
    // - - 1）安装操作 MySQL 数据库的第三方模块（mysql）
    // - - 2）通过 mysql 模块连接到 MySQL 数据库
    // - - 3）通过 mysql 模块执行 SQL 语句

    // - 2、安装 mysql 模块
    // - - mysql 模块是托管与 npm 上的第三方模块。它提供了在 Node.js 项目中连接和操作 MySQL 数据库的能力。 
    // - - 想要在项目中使用它，需要先运行如下命令，将 mysql 安装为项目的依赖包
    npm i mysql

    // - 3、配置 mysql 模块 {@link file://./file/express-test-3/mysql-begin/01.操作数据库.js}
    // - - 在使用 mysql 模块操作 MySQL 数据库之前，必须先对 mysql 模块进行必要的配置，主要配置步骤如下
    // - - - 1）导入 mysql 模块，命名 mysql
    // - - - 2）建立与 MySQL 数据库的连接，调用函数 createPool，命名 db，参数如下
    // - - - - host 数据库的 IP 地址，例 127.0.0.1
    // - - - - user 登录数据库的账号，例 root
    // - - - - password 登录数据库的密码，例 1234
    // - - - - database 指定要操作哪个数据库，例 my_db_01

    // - 4、测试 mysql 模块能否正常工作
    // - - 调用 db.query() 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果：
    // - - - 检测 mysql 模块能否正常工作
    db.query('SELECT 1', (err, results) => {
      if (err) return console.log(err.message)
      // 只要能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
      console.log(results)
    })
    // - - 错误：ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client（客户端不支持身份验证协议）
    // - - 解决：
    // - - - 登录数据库 mysql -u root -p 回车
    // - - - 切换到需要的数据库 use my_db_01
    // - - - 身份验证 alter user 'root'@localhost identified with mysql_native_password by '1234';
    // - - - 刷新特权 flush privileges;



 * ```
 *
 */