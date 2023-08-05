/**
 * @example
 *
 * ```js
    // express-安装并使用 nodemon
    // - 1、为什么要使用 nodemon
    // - - 在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐
    // - - 现在，我们可以使用 nodemon https://www.npmjs.com/package/nodemon 这个工具，它能够监听项目的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

    // - 2、安装 nodemon
    // - - 在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：
    npm install -g nodemon

    // - 3、使用 nodemon
    // - - 当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。这样的坏处是：代码被修改之后，需要手动重启项目
    // - - 现在，我们可以将 node 命令替换成 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动启动项目的效果
    node app.js
    // - - - # 将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
    nodemon app.js
    
 * ```
 * 
 */