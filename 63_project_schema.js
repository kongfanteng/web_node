/**
 * @example
 *
 * ```js
    // Project-优化 res.send() 代码
    // - 1、优化 res.send() 代码 {@link file://./file/project/3-project-example-res-send-improve/api_server/app.js}
    // - - 在处理函数中，需要多次调用 res.send() 向客户端处理失败的结果，为了简化代码，可以手动封装一个 res.cc() 函数
    // - - 1）在 app.js 中，所有路由之前，声明一个全局中间件，为 res 对象挂载一个 res.cc() 函数
    // - - - 响应数据的中间件
    app.use(function(req, res, next) {
      // status = 0 为成功；status = 1 为失败；默认将 status 的值设置为 1，方便处理失败的情况
      res.cc = function(err, status = 1) {
        res.send({
          // 状态
          status,
          // 状态描述，判断 err 是错误对象还是字符串
          message: err instanceof Error ? err.message : err
        })
      }
      next()
    })
    // - - - 对所有失败返回 res.send() 替换为中间件用法

    // - 2、优化表单数据验证
    // - - 表单验证的原则：前端验证为辅，后端验证为主，后端永远不要相信前端提交过来的任何内容
    // - - 在实际开发中，前后端都需要对表单的数据进行合法性验证，而且，后端作为数据合法性验证的最后一个关口，在拦截非法数据方面起到至关重要的作用。
    // - - 单纯使用 if...else... 的形式对数据合法性进行验证，效率低下、出错率高、维护性差。因此，推荐使用第三方数据验证模块，来降低出错率、提高验证的效率和可维护性，让后端程序员把更多的精力放在核心业务逻辑的处理上。
    // - - 1）安装 express-joi 包，为表单中携带的每个数据项，定义验证规则：
    npm install express-joi
    // - - 2）新建 /schema/user.js 用户验证规则模块，并初始化代码如下：
    // - - - {@link file://./file/project/3-project-example-res-send-improve/api_server/schema/user.js}
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

    // - - 4）修改 /router/user.js {@link file://./file/project/3-project-example-res-send-improve/api_server/router/user.js}
    // - - - 导入验证表单数据的中间件，命名 expressJoi
    const expressJoi = require('express-joi')
    // - - - 导入需要的验证规则对象，登录注册规则 reg_login_schema
    const { reg_login_schema } = require('../schema/user')
    // - - - 注册新用户接口-/reguser，第二个参数填入 expressJoi.joiValidate(reg_login_schema)

    // - - 5）在 app.js 的全局错误级别中间件中，捕获验证失败的错误，并把验证失败的结果响应给客户端
    // - - - {@link file://./file/project/3-project-example-res-send-improve/api_server/app.js}
    // - - - - 引入 @hapi/joi，命名 joi
    const joi = require('@hapi/joi')
    // - - - - 错误中间件
    app.use((err, req, res, next) => {
      if (err instanceof joi.ValidatationError) return res.cc(err)
      res.cc(err)
    })

 * ```
 *
 */