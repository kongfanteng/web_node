// - - 1）使用 npm 包管理工具，在项目中安装格式化时间的包 moment
// - - 2）使用 require() 导入格式化时间的包
const moment = require('moment')
// - - 3）参考 moment 的官方 API 文档对时间进行格式化
// - - - 调用 moment() 方法，得到当前的时间
// - - - 针对当前的时间，调用 format() 方法，按照指定的格式进行时间的格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log('dt:', dt) // dt: 2023-08-03 20:01:26