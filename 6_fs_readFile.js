/**
 * @example
 *
 * ```js
    // 什么是 fs 文件系统模块
    // - fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
    // - - 例如
    // - - - fs.readFile() 方法，用来读取指定文件中的内容
    // - - - fs.writeFile() 方法，用来指定的文件中写入内容
    // - 如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：
    // - - `const fs = require('fs')`

    // 读取指定文件内容
    // - fs.readFile() 的语法格式
    // - - 使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下
    // - - fs.readFile(path[, options], callback), [] 包起来为可选参数
    // - - 参数解读
    // - - - 参数 1：必选参数，字符串，表示文件的路径
    // - - - 参数 2：可选参数，表示以什么编码格式来读取文件
    // - - - 参数 3：必选参数，文件读取完成后，通过回调函数拿到读取的结果
    
    // fs.readFile() 的示例代码
    // - 以 utf8 的编码格式，读取指定文件的内容，并答应 err 和 datastr 的值：
    const fs = require('fs')
    fs.readFile('./file/11.txt', 'utf8', function(err, datastr) {
      console.log('err:', err) // err: null
      console.log('datastr:', datastr) // datastr: 11.txt 文件内容
    })

    // 判断文件是否读取成功
    // - 可以判断 err 对象是否为 null，从而知晓文件读取的结果
    const fs = require('fs')
    fs.readFile('./file/err.txt', 'utf8', function(err, datastr) {
      if (err) {
        return console.log('文件读取失败' + err.message) // 文件读取失败ENOENT: no such file or directory, open './file/err.txt'
      }
      console.log('文件读取成功，内容是：' + datastr)
    })
 * ```
 * 
 */
