// - - - 导入自己的包 kft-utils，定义包变量 utils
const utils = require('./kft_utils')
// - - - 定义 html 特殊字符串 htmlStr
const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
// - - - 调用 utils.htmlEscape 方法，定义变量 str 接收返回
const str = utils.htmlEscape(htmlStr)
// - - - 打印输出 str
console.log('str:', str)
// - - - 调用 utils.htmlUnEscape 方法，定义变量 rawHTML 接收返回
const rawHTML = utils.htmlUnEscape(str)
// - - - 打印输出 rawHTML
console.log('rawHTML:', rawHTML)