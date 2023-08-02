/**
 * @example
 *
 * ```js
    // 案例：时钟；分析需求 & 读取文件内容
    // - 案例要实现的功能
    // - - 将素材目录下的 index.html 页面，拆分成三个文件，分别是：index.css / index.js / index.html
    // - - 并且将拆分出来的 3 个文件，存放到 clock 目录下

    // 实现步骤
    // - 案例的实现步骤
    // - - 1）创建两个正则表达式，分别用来匹配 <style> 和 <script> 标签
    // - - 2）使用 fs 模块，读取需要被处理的 HTML 文件
    // - - 3）自定义 resolveCSS 方法，来写入 index.css 样式文件
    // - - 4）自定义 resolveJS 方法，来写入 index.js 样式文件
    // - - 5）自定义 resolveHTML 方法，来写入 index.html 样式文件

    // 代码描述
    // - 步骤 1 - 导入模块（fs、path） + 创建正则（style、script）
    // - - 导入 fs 文件系统模块
    // - - 导入 path 路径处理模块
    // - - 匹配 <style></style>标签的正则，定义 regStyle
    // - - - 其中 \s 表示空白字符；\S 表示非空白字符；* 表示匹配任意次
    // - - 匹配 <script></script> 标签的正则，定义 regScript
    // - 步骤 2 - 使用 fs 模块读取需要被处理的 html 文件
    // - - 读取需要被处理的 html 文件
    // - - 读取 HTML 文件失败
    // - - 读取 HTML 文件成功后，调用对应的方法，拆解出 css、js 和 html 文件，调用 resolveCSS、resolveJS、resolveHTML
    // - 步骤 3 - 自定义 resolveCSS 方法
    // - - 处理 css 样式
    // - - - 使用正则授权提取页面中的 <style></style> 标签 exec
    // - - - 将提取出来的样式字符串，做进一步的处理：去除数组首元素 style 标签
    // - - - 将提取出来的 css 样式，写入到 index.css 文件中
    // - 步骤 4 - 自定义 resolveJS 方法
    // - - 处理 js 样式
    // - - - 使用正则提取页面中的 <script></script> 标签
    // - - - 将提取出来的脚本字符串，做进一步的处理：去除 script 标签
    // - - - 将提取出来的 js 脚本，写入到 index.js 文件中
    // - 步骤 5 - 自定义 resolveHTML 方法
    // - - 定义处理 html 文件
    // - - - 使用字符串的 replace 方法，把内嵌的 <style> 和 <script> 标签，替换为外联的 <link> 和 <script> 标签
    // - - - 将替换完成之后的 html 代码，写入到 index.html 文件中

    // 注意点：
    // - fs.writeFile() 方法只能用来创建文件，不能用来创建路径，写入前需要先创建目录
    // - 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容
 * ```
 * 
 */
// - - 导入 fs 文件系统模块
/** @type {FileSystem} fs - 文件系统 */
const fs = require('fs')
// - - 导入 path 路径处理模块
const path = require('path')
// - - 匹配 <style></style>标签的正则，定义 regStyle
// - - - 其中 \s 表示空白字符；\S 表示非空白字符；* 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
// - - 匹配 <script></script> 标签的正则，定义 regScript
const regScript = /<script>[\s\S]*<\/script>/

// - 步骤 2 - 使用 fs 模块读取需要被处理的 html 文件
// - - 读取需要被处理的 html 文件
fs.readFile(path.join(__dirname, './素材/clock/index.html'), 'utf8', function (err, dataStr) {
  // - - 读取 HTML 文件失败
  if (err) return console.log('文件读取失败：' + err.message)
  // - - 读取 HTML 文件成功后，调用对应的方法，拆解出 css、js 和 html 文件，调用 resolveCSS、resolveJS、resolveHTML
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// - 步骤 3 - 自定义 resolveCSS 方法
// - - 处理 css 样式
/**
 * 处理 css 样式
 * @param {string} htmlStr - 模板字符串
 * @return {void} 无返回
 */
function resolveCSS(htmlStr) {
  // - - - 使用正则授权提取页面中的 <style></style> 标签 exec
  /** @type {RegExpExecArray} arr - 正则匹配数组 */
  const arr = regStyle.exec(htmlStr)
  // - - - 将提取出来的样式字符串，做进一步的处理：去除数组首元素 style 标签
  const css = arr[0].replace('<style>', '').replace('</style>', '')
  // - - - 将提取出来的 css 样式，写入到 index.css 文件中
  fs.writeFile(path.join(__dirname, './file/clock/index.css'), css, err => {
    if (err) return console.log('写入 css 样式失败！' + err.message)
    console.log('写入 css 样式成功！')
  })
}

// - 步骤 4 - 自定义 resolveJS 方法
// - - 处理 js 样式
/**
 * 处理 js 样式
 * @param {string} jsStr - JS 模板字符串
 * @returns {void}
 */
function resolveJS(jsStr) {
  // - - - 使用正则提取页面中的 <script></script> 标签
  /** @type {RegExpExecArray} arr - 正则匹配后数组 */
  const arr = regScript.exec(jsStr) 
  // - - - 将提取出来的脚本字符串，做进一步的处理：去除 script 标签
  const jsCode = arr[0].replace('<script>', '').replace('</script>', '')
  // - - - 将提取出来的 js 脚本，写入到 index.js 文件中
  fs.writeFile(path.join(__dirname, './file/clock/index.js'), jsCode, err => {
    if (err) return console.log('写入 js 脚本失败：' + err.message)
    console.log('写入 js 脚本成功！')
  })
}

// - 步骤 5 - 自定义 resolveHTML 方法
// - - 定义处理 html 文件
/**
 * 定义处理 html 文件
 * @param {string} htmlStr - html 模板字符串
 * @returns {void}
 */
function resolveHTML(htmlStr) {
  // - - - 使用字符串的 replace 方法，把内嵌的 <style> 和 <script> 标签，替换为外联的 <link> 和 <script> 标签
  const html = htmlStr
  .replace(regStyle, '<link ref="stylesheet" href="./index.css" />')
  .replace(regScript, '<script src="./index.js"></script>')
  // - - - 将替换完成之后的 html 代码，写入到 index.html 文件中
  fs.writeFile(path.join(__dirname, './file/clock/index.html'), html, err => {
    if (err) return console.log('写入 html 页面失败：' + err.message)
    console.log('写入 html 页面成功！')
  })
}
  