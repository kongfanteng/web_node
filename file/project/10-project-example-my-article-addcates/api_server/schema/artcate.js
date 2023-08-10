const { Joi } = require('express-joi')

// - - - - 验证规则对象 - 文章分类，命名 add_cate_schema, name-string().required(), alias-string-alphnum-required
exports.add_cate_schema = {
  name: Joi.string().required(),
  alias: Joi.string().alphanum().required(),
}
