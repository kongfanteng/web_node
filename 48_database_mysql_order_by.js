/**
 * @example
 *
 * ```js
    // Database-MySQL-排序（ORDER BY）
    // - 1、语法
    // - - ORDER BY 语句用于根据指定的列队结果集进行排序
    // - - ORDER BY 语句默认安装升序对记录进行排序
    // - - 如果您希望安装降序对记录进行排序，可以使用 DESC 关键字

    // - 2、ORDER BY 子句 - 升序排序
    // - - 对 users 表中的数据，按照 status 字段进行升序排序，示例如下：
    // - - - 注意：如下两条 SQL 语句是等价的
    // - - - - 因为 ORDER BY 默认进行升序排序；
    // - - - - 其中，ASC 关键字代表升序排序
    SELECT * FROM users ORDER BY status;
    SELECT * FROM users ORDER BY status ASC;
    
    // - 3、ORDER BY 子句 - 降序排序
    // - - 对 users 表中的数据，按照 status 字段进行降序排序，示例如下：
    // - - - 注意：DESC 代表降序排序
    SELECT * FROM users ORDER BY id DESC;
    // - - 按照 id 对结果进行降序排序 desc 表示降序排序 asc 表示升序排序（默认情况下，就是升序排序）
    select * from users order by id desc

    // - 4、多重排序
    // - - 对 users 表中的数据，按照 status 字段进行降序排序，再按照 username 的字母顺序，进行升序排序，示例如下：
    SELECT * FROM my_db_01.users ORDER BY status DESC, username ASC;

 * ```
 *
 */