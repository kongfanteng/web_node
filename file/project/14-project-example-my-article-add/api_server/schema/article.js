const { Joi } = require("express-joi");

// - - - - 验证规则对象 - 发布文章数据，命名 add_article_schema, title, cate_id, content, state
exports.add_article_schema = {
  title: Joi.types.string().required(),
  cate_id: Joi.types.number().integer().min(1).required(),
  content: Joi.types.string().required().allow(''),
  state: Joi.types.string().valid('已发布', '草稿').required(),
}