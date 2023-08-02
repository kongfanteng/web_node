/**
 * @example
 *
 * ```js
    // path：使用 path 模块处理路径

    // 1、什么是 path 路径模块
    // - 为什么要用 path 拼接
    // - - `+` 拼接问题：不正规；使用 + 有时会导致拼接时错误拼接 ./file... 中 ./
    // - path 模块是 Node.js 官网提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
    // - 例如：
    // - - path.join() 方法，用来将多个路径片段拼接成一个完成的路径字符串
    // - - path.basename() 方法，用来从路径字符串中，将文件名解析出来
    // - 如果要在 JavaScript 代码中使用 path 模块来处理路径，需要先导入
    const path = require('path')

    // 2、路径拼接：path.join()
    // - path.join() 的语法格式
    // - 使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下
    path.join([...paths])
    // - 参数解读
    // - - ...paths <string> 路径片段的序列
    // - - 返回值：<string>
    // - path.join() 代码示例
    // - - 使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串
    const path = require('path')
    const pathStr = path.join('./a', '/b/c', '../', './d', 'e')
    console.log(pathStr) // a/b/d/e
    const pathStr2 = path.join(__dirname, './file/1.txt')
    console.log(pathStr2) // /Users/workplace/web_node/file/1.txt
    // path.join() 使用演示
    // - `../` 会抵消前面的路径
    const fs = require('fs')
    const path = require('path')
    fs.readFile(path.join(__dirname, './file/错误路径.txt'), 'utf8', function (err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      console.log('文件读取成功：' + dataStr) // 文件读取成功：fs 处理路径文件
    })

    // 3、获取路径中的文件名
    // - 1）path.basename() 语法格式
    // - - 使用 path.basename() 方法，可以获取路径中最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下
    // - - path.basename(path[, ext])
    // - - 参数解读
    // - - path <string> 必选参数，表示一个路径的字符串
    // - - ext <string> 可选参数，表示文件扩展名
    // - - 返回：<string> 表示路径中最后一部分
    // - 2）使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分
    const path = require('path')
    const fpath = '/a/b/c/index.html'
    const fullname = path.basename(fpath) // fullname: index.html
    console.log('fullname:', fullname)
    const nameWithoutExt = path.basename(fpath, '.html')
    console.log('nameWithoutExt:', nameWithoutExt) // nameWithoutExt: index

    // 4、获取路径中文件扩展名 path.extname()
    // - 1）path.extname() 语法格式
    // - 使用 path.extname() 方法，可以获取路径中扩展名部分，语法格式如下
    path.extname(path)
    // - 参数解读
    // - - path <string> 必选参数，表示一个路径的字符串
    // - - 返回：<string> 返回得到的扩展名字符串
    // - 2）path.extname() 的代码示例
    // - - 使用 path.extname() 方法，可以获取路径中的扩展名部分
    const path = require('path')
    const fpath = '/a/b/c/index.html'
    const fext = path.extname(fpath)
    console.log('fext:', fext) // fext: .html
 * ```
 * 
 */
