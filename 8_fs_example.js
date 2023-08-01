/**
 * @example
 *
 * ```js
    // fs 整理成绩的案例

    // 1、问题
    // - 使用 fs 文件系统模块，将素材目录下 成绩.txt 文件中的考试数据，整理到 成绩-ok.txt 文件中。
    // - 整理前，成绩.txt 文件中的数据格式如下
    // - 小红=99 小白=100 小黄=70 小黑=66 小绿=88
    // - 整理完成后，希望得到的 成绩-ok.txt 文件中的数据格式如下
    小红：99
    小白：100...
    
    // 2、核心实现步骤
    // - 导入需要的 fs 文件系统模块
    // - 使用 fs.readFile() 方法，读取素材目录下的 成绩.txt 文件
    // - 判断文件是否读取失败
    // - 文件读取成功后，处理成绩数据
    // - 将处理完成的成绩数据，调用 fs.writeFile() 方法，写入到新文件 成绩-ok.txt 中

    // 3、代码示例
    // - 导入 fs 调用 fs.readFile() 读内容判断读取成功，进行一次调试，判断代码执行无误
    const fs = require('fs')
    fs.readFile('./file/成绩.txt', 'utf8', function(err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      console.log('文件读取成功：' + dataStr) // 文件读取成功：小红=99 小白=100 小黄=70 小黑=66 小绿=88
    })
    
    // 4、成绩数据处理
    // - 先把成绩的数据，按照空格进行分割
    // - 循环分割后的数组，对每一项数据，进行字符串的替换操作 
    // - 把新数组中的每一项，进行合并，得到一个新的字符串 \r\n
    const fs = require('fs')
    fs.readFile('./file/成绩.txt', 'utf8', function (err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      // - 先把成绩的数据，按照空格进行分割
      const arrOld = dataStr.split(' ')
      // - 循环分割后的数组，对每一项数据，进行字符串的替换操作
      const arrNew = []
      arrOld.forEach((item) => {
        arrNew.push(item.replace('=', '：'))
      })
      // - 把新数组中的每一项，进行合并，得到一个新的字符串 \r\n
      const newStr = arrNew.join('\r\n')
      console.log('newStr:\r\n'+ newStr)
    })

    // 5、调用 fs.writeFile() ，调试代码执行
    const fs = require('fs')
    fs.readFile('./file/成绩.txt', 'utf8', function (err, dataStr) {
      if (err) {
        return console.log('文件读取失败：' + err.message)
      }
      // - 先把成绩的数据，按照空格进行分割
      const arrOld = dataStr.split(' ')
      // - 循环分割后的数组，对每一项数据，进行字符串的替换操作
      const arrNew = []
      arrOld.forEach((item) => {
        arrNew.push(item.replace('=', '：'))
      })
      // - 把新数组中的每一项，进行合并，得到一个新的字符串 \r\n
      const newStr = arrNew.join('\r\n')
      fs.writeFile('./file/成绩-ok.txt', newStr, function(err) {
        if (err) {
          return console.log('写入文件失败：' + err.message)
        }
        console.log('写入文件成功')
      })
    })
 * ```
 * 
 */
const fs = require('fs')
fs.readFile('./file/成绩.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('文件读取失败：' + err.message)
  }
  // - 先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(' ')
  // - 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = []
  arrOld.forEach((item) => {
    arrNew.push(item.replace('=', '：'))
  })
  // - 把新数组中的每一项，进行合并，得到一个新的字符串 \r\n
  const newStr = arrNew.join('\r\n')
  fs.writeFile('./file/成绩-ok.txt', newStr, function (err) {
    if (err) {
      return console.log('写入文件失败：' + err.message)
    }
    console.log('写入文件成功')
  })
})
