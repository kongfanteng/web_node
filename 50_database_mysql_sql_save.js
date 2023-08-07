/**
 * @example
 *
 * ```js
    // Database-MySQL-演示如何保存和打开 sql 文件
    // - 1、保存功能，内容如下：
    -- select count(*) from my_db_01.users where status=0
    -- select count(*) as total from my_db_01.users where status=0
    -- 使用 AS 关键字给列起别名
    select username as uname, password as upwd from my_db_01.users
    // - 2、SQL 文件保存本地，命名 上课演示的SQL语句
    // - 3、导入本地 SQL 文件，Open a SQL script...

 * ```
 *
 */