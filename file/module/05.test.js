const m = require('./05') // test: JS
const m2 = require('./05.json')
console.log('m2:', m2) // m2: { test: 'json' }
const m3 = require('./05.node') // 报错
console.log('m3:', m3)