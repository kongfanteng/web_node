/**
 * @example
 *
 * ```js
    // fs 处理路径文件
    
    // 1、fs 路径动态拼接问题
    // - 在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径，很容易出现路径动态拼接错误的问题
    // - 原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接处被操作文件的完整路径
    
    // 2、演示路径拼接错误的问题
    const fs = require('fs')
    fs.readFile('../file/错误.txt', 'utf8', function(err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      console.log('文件读取成功：' + dataStr) 
    })
    // - 原因：提供了 ./ 或 ../ 开头的相对路径
    // - 解决：直接提供绝对路径

    // 3、局限性地解决路径拼接错误问题代码示例
    // - 步骤：vscode 对文件右键可以直接复制文件的绝对路径，此时路径需要通过 \\ 补全路径
    const fs = require('fs')
    fs.readFile('/Users/workplace/web_node/file/错误路径.txt', 'utf8', function(err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message) // 文件读取失败：ENOENT: no such file or directory, open '../file/错误.txt'
      }
      console.log('文件读取成功：' + dataStr) 
    })
    // - 问题：移植性特别差，不利于后期维护

    // 4、完美解决路径拼接错误问题
    // - __dirname 表示当前文件所处的目录
    console.log(__dirname) // /Users/workplace/web_node
    // - 解决问题代码
    const fs = require('fs')
    fs.readFile(__dirname + '/file/错误路径.txt', 'utf8', function(err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      console.log('文件读取成功：' + dataStr) // 文件读取成功：fs 处理路径文件
    })
 * ```
 * 
 */
