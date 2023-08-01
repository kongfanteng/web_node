/**
 * @example
 *
 * ```js
    // fs 写入文件内容

    // 1 fs.writeFile() 语法格式
    // - 使用 fs.write() 方法，可以向指定的文件中写入内容，语法格式如下：
    // - fs.writeFile(file, data[, options], callback)
    // - 参数解读
    // - - 参数 1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
    // - - 参数 2：必选参数，表示要写入的内容
    // - - 参数 3：可选参数，表示以什么格式写入文件内容，默认值是 utf8
    // - - 参数 4：必选参数，文件写入完成后的回调函数

    // 2 fs.writeFile() 的实例代码
    const fs = require('fs')
    fs.writeFile('./file/2.txt', 'Hello Node.js', 'utf8', function(err) {
      console.log('err:', err)
    })
 * ```
 * 
 */
