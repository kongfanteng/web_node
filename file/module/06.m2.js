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
  },
}
