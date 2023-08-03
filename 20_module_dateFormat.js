/**
 * @example
 *
 * ```js
    // 包与 npm：格式化时间的两种做法
    // - 1、格式化时间的传统做法？6 个步骤
    // - - 1）创建格式化时间的自定义模块：./file/module/dateFormat.js
    // - - 2）定义格式化时间的方法：dateFormat 
    // - - 3）创建补零函数：padZero
    // - - 4）从自定义模块中导出格式化时间的函数
    // - - 5）导入格式化时间的自定义模块：./file/module/12.格式化时间的传统做法.js
    // - - 6）调用格式化时间的函数：Time.dateFormat(dt)
    // - 2、格式化时间的高级做法
    // - - 1）使用 npm 包管理工具，在项目中安装格式化时间的包 moment；运行命令 npm install moment;
    // - - 2）使用 require() 导入格式化时间的包
    // - - 3）参考 moment 的官方 API 文档对时间进行格式化
    // - - - 调用 moment() 方法，得到当前的时间
    // - - - 针对当前的时间，调用 format() 方法，按照指定的格式进行时间的格式化
    // - - 代码: {@link ./file/module/20.moment.js}
 * ```
 * 
 */