// - - 1）创建格式化时间的自定义模块：./file/module/dateFormat.js
// - - 2）定义格式化时间的方法：dateFormat
/**
 * 格式化时间
 * @param {Date} dtStr - 原时间
 * @returns {string} 年-月-日 时:分:秒，例：2023-08-03 19:48:00
 * @example
 *
 * ```js
    // 函数描述
    // - 对传入时间 {@link dt} 转换时间对象 new Date
    // - 定义年份变量 {@link y} 调用获取年份方法 getFullYear
    // - 定义月份变量 {@link m} 调用获取月份方法 getMonth 和补零函数 padZero
    // - 定义天份变量 {@link d} 调用获取天份方法 getDate 和补零函数 padZero
    // - 定义小时变量 {@link hh} 调用获取小时方法 getHours 和补零函数 padZero
    // - 定义分钟变量 {@link mm} 调用获取分钟方法 getMinutes 和补零函数 padZero
    // - 定义秒钟变量 {@link ss} 调用获取秒钟方法 getSeconds 和补零函数 padZero
    // - 以`-`拼接年月日时分秒并返回

    // 调用
    console.log( dateFormat(new Date()) )
 * ```
 * 
 */
function dateFormat(dtStr) {
  // - 对传入时间 {@link dt} 转换时间对象 new Date
  const dt = new Date(dtStr)
  // - 定义年份变量 {@link y} 调用获取年份方法 getFullYear
  const y = dt.getFullYear()
  // - 定义月份变量 {@link m} 调用获取月份方法 getMonth 和补零函数 padZero
  const m = padZero(dt.getMonth() + 1)
  // - 定义天份变量 {@link d} 调用获取天份方法 getDate 和补零函数 padZero
  const d = padZero(dt.getDate())
  // - 定义小时变量 {@link hh} 调用获取小时方法 getHours 和补零函数 padZero
  const hh = padZero(dt.getHours())
  // - 定义分钟变量 {@link mm} 调用获取分钟方法 getMinutes 和补零函数 padZero
  const mm = padZero(dt.getMinutes())
  // - 定义秒钟变量 {@link ss} 调用获取秒钟方法 getSeconds 和补零函数 padZero
  const ss = padZero(dt.getSeconds())
  // - 以`-` 和 `:` 拼接年月日时分秒并返回
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
// - - 3）创建补零函数：padZero
/**
 * 补零函数
 * @param {number} n - 补零的参数
 * @returns {string}
 */
function padZero(n) {
  return n > 9 ? `${n}` : `0${n}`
}
// - - 4）从自定义模块中导出格式化时间的函数
module.exports = dateFormat
