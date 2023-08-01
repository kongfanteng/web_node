/**
 * @example
 *
 * ```js
    // 2. 浏览器中 JavaScript 运行
    // - 浏览器 JavaScript 组成
    // - - JS 核心语法
    // - - - 变量、数据类型
    // - - - 循环、分支、判断
    // - - - 函数、作用域、this
    // - - - etc...
    // - - WebAPI
    // - - - DOM 操作
    // - - - BOM 操作
    // - - - 基于 XMLHttpRequest 的 Ajax 操作
    // - - - etc...
    // - 为什么 JavaScript 可以在浏览器中被执行
    // - - 不同浏览器使用不同的 JavaScript 解析引擎
    // - - - Chrome 浏览器 => V8（性能最好）
    // - - - Firefox 浏览器 => OdinMonkey（奥丁猴）
    // - - - Safri 浏览器 => JSCore
    // - - - IE 浏览器 => Chakra（查克拉）
    // - 为什么 JavaScript 可以操作 DOM 和 BOM
    // - - 每个浏览器都内置了 DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们
    // - - 浏览器 > （DOM API & BOM API & Ajax API）-> 待执行的 JS 代码（调用 Web API）-> JavaScript 解析引擎
    // - 浏览器中的 JavaScript 运行环境
    // - - 运行环境是指代码正常运行所需的必要环境
    // - - V8 引擎负责解析和执行 JavaScript 代码
    // - - 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用
    // - JavaScript 借助 Node.js 可以做后端开发
 * ```
 * 
 */