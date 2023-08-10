const { Joi } = require('express-joi')

// - - - - 验证规则对象 - 文章分类，命名 add_cate_schema, name-string().required(), alias-string-alphnum-required
exports.add_cate_schema = {
  name: Joi.string().required(),
  alias: Joi.string().alphanum().required(),
}

// - - - - 验证规则对象 - 删除文章分类，命名 delete_cate_schema, id-number-integer-required
exports.delete_cate_schema = {
  id: Joi.number().integer().required(),
}
