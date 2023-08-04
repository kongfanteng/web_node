/**
 * @example
 *
 * ```js
    // npm-发布包-把包发布到 npm
    // - 1、注册 npm 账号？4 步
    // - - 1）访问 https://www.npmjs.com/ 网站，点击 sign up 按钮，进入注册用户界面
    // - - 2）填写账号相关的信息：FullName、Publish Email、Username、Password
    // - - 3）点击 Create an Account 按钮，注册账号
    // - - 4）登录邮箱，点击验证链接，进行账号的验证
    
    // - 2、npmjs 注册流程
    
    // - 3、登录 npm 账号？终端进行 npm 登录
    // - - npm 账号注册完成后，可以在终端中执行 npm login 命令，依次输入用户名、密码、邮箱后，即可登录成功
    
    // - 4、登录前使用 nrm 查看是否在 npm 上
    // - - nrm ls 查看；nrm use npm 切换到 npm；
    
    // - 5、把包发布到 npm 上？npm publish
    // - - 将终端切换到包的根目录之后，运行 npm publish 命令，即可将包发布到 npm 上（注意：包名不能雷同）
    // - - npm publish 发布成功后，在 npmjs 官网查看已上传包
    
    // - 6、删除已发布的包
    // - - 运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包
    // - - 注意：
    // - - - 1）npm unpublish 命令只能删除 72 小时以内发布的包
    // - - - 2）npm unpublish 删除的包，在 24 小时内不允许重复发布
    // - - - 3）发布包的时候要慎重，尽量不要往 npm 上发布没意义的包！

 * ```
 * 
 */