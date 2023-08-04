// - - - 导入自己的包 kft-utils，定义包变量 utils
const utils = require('./kft_utils')
// - - - 调用格式化日期 dateFormat，定义日期变量 dt 存储返回结果
const dt = utils.dateFormat(new Date())
// - - - 打印输出
console.log('dt:', dt)