// - - 5）导入格式化时间的自定义模块：./file/module/12.格式化时间的传统做法.js
const Time = require('./dateFormat')
// - - 6）调用格式化时间的函数：Time.dateFormat(dt)
const dt = new Date()
const formatDate = Time.dateFormat(dt)
console.log('formatDate:', formatDate) // formatDate: 2023-08-03 19:53:15