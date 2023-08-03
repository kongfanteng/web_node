/**
 * @example
 *
 * ```js
    // 模块化-export 对象
    // - 向外共享模块作用域的成员

    // - 1、module.exports 对象
    // - - 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
    // - - 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。

    // - 2、module.exports 代码实现
    // - - ./file/module/11.自定义模块.js
    // - - - 在一个自定义模块中，默认情况下，module.exports = {}
    // - - - 向 module.exports 对象上挂载 username 属性
    module.exports.username = '张三'
    // - - - 向 module.exports 对象上挂载 sayHello 方法
    module.exports.sayHello = function () {
      console.log('大家好！我是' + module.exports.username)
    }
    // - - ./file/module/12.test.js
    // - - - 在外界使用 require 导入一个自定义模块的时候，得到的成员
    // - - - 就是那个模块中，通过 module.exports 指向的对象
    const m = require('./11.自定义模块.js')
    console.log('自定义模块:', m) // 自定义模块: { username: '张三', sayHello: [Function (anonymous)] }

    // - 3、共享成员时的注意点
    // - - 使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。
    // - - ./file/module/07.test.js
    const m2 = require('./06.m2.js')
    console.log('自定义模块:', m2) // 自定义模块: { nickname: '小黑', sayHi: [Function: sayHi] }
    // - - ./file/module/06.m2.js
    // - - - 向 module.exports 对象上挂载 username 属性
    module.exports.username = '张三'
    // - - - 向 module.exports 对象上挂载 sayHello 方法
    module.exports.sayHello = function () {
      console.log('大家好！我是' + module.exports.username)
    }
    module.exports = {
      nickname: '小黑',
      sayHi() {
        console.log('Hi!')
      }
    }
 * ```
 * 
 */