/**
 * @example
 *
 * ```js
    // Database-MySQL-Workbench 的基本用法
    // - 1、创建数据库
    // - - 点击新建数据库按钮，填写数据库名称 my_db_01，命令 'CREATE SCHEMA `my_db_01`' ;

    // - 2、创建数据表
    // - - 1）表名 users; 表备注 comments: 用户信息表;
    // - - 2）设计表的字段: id 类似身份证号（唯一性）; username, password, status（状态）;
    // - - 3）创建数据表
    // - - - （1）Create Table; 展开 my_db_01 数据库; 在 Tables 节点上鼠标右键; 选择 Create Table;
    // - - - （2）输入数据表的名称 users;
    // - - - （3）可选步骤，需要描述下当前表的作用
    // - - - （4）设计表的字段; username, password, status（状态）;
    // - - - （5）创建表; Apply;
    // - - DataType 类型： int（整数）；varchar(len)（字符串）；tinyint(1)（布尔值）；
    // - - 4）设计表实现
    // - - - 字段 id 描述：`column: id; Data Type: INT; Comments: 这是用户的唯一标识`;
    // - - - 字段 status 描述：`Column Name: status; Data Type: TINYINT(1); Comments: 用户的状态，是一个布尔值 \r\n 0 表示用户状态正常 \r\n 1 表示用户被禁用`
    // - - 5）设计字段的特殊标识
    // - - - 标识说明：`PK（Primary Key）：主键、唯一标识；NN（Not Null）：值不允许为空；UQ（Unique）：值唯一；AI（Auto Increment）：值自动增长；`；
    // - - - 默认值：status 中 Default 为 0；
    // - - - 字段标识实现：status 中 Storage 的 Not Null 选中。

    // - 3、向表中写入数据
    // - - 在 users 表上鼠标右键；选择 Select Rows - Limit1000；
    // - - 向 users 表中，输入 zs 和 ls 两条数据，他们的密码分别是 123456 和 abc123；
    // - - - 其中，字段 id 不需要手动输入，因为它是自增字段；
    // - - - 其中，字段 status 也不需要手动输入，因为它默认值为 0，表示用户状态正常；
    // - - 保存对 users 表的修改；点击 Apply 按钮；

 * ```
 *
 */