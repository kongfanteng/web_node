// - - - 引入 express-joi，命名 joi
const expressJoi = require('express-joi');
// - - - string() 值必须是字符串; alphanum() 值只能是包含 a-zA-Z0-9 的字符串; min(length) 最小长度; max(length) 最大长度; required() 值是必选项，不能为 undefined; regex(正则表达式) 值必须符合正则表达式的规则
// - - - 用户名的验证规则：string/alphanum/min/max/required，命名 username
const username = expressJoi.Joi.types.string().alphanum().min(1).max(10).required()
// - - - 密码的验证规则：string/pattern/required，命名 password
const password = expressJoi.Joi.types
  .string()
  .regex(/[a-zA-Z0-9]{3,30}/)
  .required()
// - - - 导出注册和登录表单的验证规则对象，命名 reg_login_schema
exports.reg_login_schema = { username, password }
