/**
 * @example
 *
 * ```js
    // Database-MySQL-count 函数和 as 关键字
    // - SQL 的 COUNT(*) 函数
    // - - COUNT(*) 函数用于返回查询结果的总数据条数，语法格式如下：
    SELECT COUNT(*) FROM 表名称
    // - - COUNT(*) 示例
    // - - - 查询 users 表中 status 为 0 的总数据条数：
    SELECT COUNT(*) FROM users WHERE status=0;

    // - 使用 AS 为列设置别名
    // - - 如果希望给查询出来的列名称设置别名，可以使用 AS 关键字，示例如下
    // - - - 将列名称从 COUNT(*) 修改为 total
    SELECT COUNT(*) AS total FROM users WHERE status=0;
    
 * ```
 *
 */