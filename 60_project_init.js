/**
 * @example
 *
 * ```js
    // Project-初始化项目（大事件）
    // - 1、创建项目
    // - - 1）新建 api_server 文件夹作为项目的根目录，并在项目根目录中运行如下的命令，初始化包管理配置文件：
    npm init -y
    // - - 2）运行如下命令，安装特定版本的 express
    npm i express@4.17.1
    // - - 3）在项目根目录中新建 app.js 作为整个项目的入口文件，并初始化如下代码: {@link file://./file/project-example/api_server/app.js}
    // - - - 导入 express，命名 express; 创建 express 实例，命名 app; 调用 app.listen()，指定端口号 3007 并启动服务器
    const express = require('express')
    const app = express()
    // write your code here
    app.listen(3007, () => {
      console.log('Express server running at http://127.0.0.1:3007')
    })

    // - 2、配置 cors 跨域，配置表单数据中间件
    // - - 1）运行如下命令，安装 cors 中间件
    npm i cors@2.8.5
    // - - 2）在 app.js 中导入并配置 cors 中间件
    // - - - 导入 cors 中间件，命名 cors; 将 cors 注册为全局中间件，调用 app.use()
    const cors = require('cors')
    app.use(cors())
    // - 3、配置解析表单数据的中间件
    // - - 1）通过如下的代码，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
    app.use(express.urlencoded({ extended: false }))

 * ```
 *
 */