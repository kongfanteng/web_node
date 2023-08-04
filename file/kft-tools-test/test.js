const utils = require('kft-tools')
// 调用 dateFormat 对时间进行格式化
const dtStr = utils.dateFormat(new Date())
// 结果 2023-08-04 16:12:21
console.log(dtStr)
// 带转换的 HTML 字符串
const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = utils.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
console.log(str)

// 待还原的 HTML 字符串
const str2 = '&lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;'
// 调用 htmlUnEscape 方法进行转换
const originStr = utils.htmlUnEscape(str2)
// 结果输出 <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
console.log(originStr)