const { dateFormat, htmlEscape, htmlUnEscape } = require('./index')
console.log( dateFormat(new Date()) ) // 2023-08-04 16:12:21

const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
console.log( htmlEscape(htmlStr) ) // &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;

const str = '&lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;'
console.log( htmlUnEscape(str) ) // <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>