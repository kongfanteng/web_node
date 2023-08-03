/**
 * @example
 *
 * ```js
    // 模块化-模块作用域和 module 对象
    // - 1、什么是模块作用域？类似函数作用域
    // - - 和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
    // - - file/module/test.js
    const custom = require('./01.custom')
    console.log(custom) // 为空对象 {}
    // - - file/module/01.custom.js
    const username = '张三'
    function sayHello() {
      console.log('大家好！我是' + username)
    }
    // - 2、模块作用域好处？
    // - - 防止全局变量污染问题
    // - - 错误示范
    // - - - file/module/index.html
    <script src='./reg.js'></script>
    <script src='./login.js'></script>
    <script>
      console.log(username) // 李四
    </script>
    // - - - file/module/reg.js
    var username = '张三' 
    // - - - file/module/login.js
    var username = '李四'
    // - 3、向外共享模块作用域成员
    // - - module 对象
    Module {
      id: '.',
      path: '/Users/workplace/web_node/file/module',
      exports: {},
      filename: '/Users/workplace/web_node/file/module/reg.js',
      loaded: false,
      children: [],
      paths: [
        '/Users/workplace/web_node/file/module/node_modules',
        '/Users/workplace/web_node/file/node_modules',
        '/Users/workplace/web_node/node_modules',
        '/Users/workplace/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    }
 * ```
 * 
 */