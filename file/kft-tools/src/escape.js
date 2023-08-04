/**
 * 转义 HTML 中的特殊字符
 * @param {string} htmlStr - HTML 字符串
 * @returns {string} - 转义后的 HTML 字符串
 * @example
 *
 * ```js
    // 代码描述
    // - 匹配 HTML 字符串中的 大于号、小于号、＆ 符、双引号，分别对应 `&gt;`、`&lt;`、`&amp;`、`&quot;`
    // - 调用 replace 运行正则获取到匹配字符 match，选择 switch 进行一一匹配替换并返回最终结果
    
    // 调用
    const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
    console.log( htmlEscape(htmlStr) ) // &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
 * ```
 * 
 */
function htmlEscape(htmlStr) {
  // - 匹配 HTML 字符串中的 大于号、小于号、＆ 符、双引号，分别对应 `&gt;`、`&lt;`、`&amp;`、`&quot;`
  // - 调用 replace 运行正则获取到匹配字符 match，选择 switch 进行一一匹配替换并返回最终结果
  return htmlStr.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}

/**
 * 还原 HTML 中的特殊字符
 * @param {string} str - 转义后的 HTML 字符串
 * @return {string} 还原后的 HTML 字符串
 * @example
 *
 * ```js
    // 代码描述
    // - 匹配 转义后的 HTML 字符串中的 `&gt;`、`&lt;`、`&amp;`、`&quot;` --> 大于号、小于号、＆ 符、双引号
    // - 调用 replace 运行正则获取到匹配字符 match，选择 switch 进行一一匹配替换并返回最终结果

    // 调用
    const htmlStr = '&lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;'
    console.log( htmlUnEscape(htmlStr) ) // <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
 * ```
 * 
 */
function htmlUnEscape(str) {
  // - 匹配 转义后的 HTML 字符串中的 `&gt;`、`&lt;`、`&amp;`、`&quot;` --> 大于号、小于号、＆ 符、双引号
  // - 调用 replace 运行正则获取到匹配字符 match，选择 switch 进行一一匹配替换并返回最终结果
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}
module.exports = {
  htmlEscape,
  htmlUnEscape
}