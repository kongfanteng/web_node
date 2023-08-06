/**
 * @example
 *
 * ```js
    // Express-APIDesign-跨域-cors 的简单请求与预检请求
    // - 1、CORS 请求的分类
    // - - 客户端在请求 CORS 接口时，根据请求方式和请求头的不同，可以将 CORS 的请求分为两大类，分别是：
    // - - - 1）简单请求
    // - - - 2）预检请求

    // - 2、简单请求
    // - - 同时满足以下两大条件的请求，就属于简单请求：
    // - - - 1）请求方式：GET、POST、HEAD 三者之一
    // - - - 2）HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）

    // - 3、预检请求
    // - - 只要符合以下任何一个条件的请求，都需要进行预检请求：
    // - - - 1）请求方式为 GET、POST、HEAD 之外的请求 Method 类型
    // - - - 2）请求头中包含自定义头部字段
    // - - - 3）向服务器发送了 application/json 格式的数据
    // - - 在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，已获知服务器是否允许该实际请求，所以这一次 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。
    

    // - 4、简单请求与预检请求区别
    // - - 简单请求的特点：客户端与服务器之间只会发送一次请求。
    // - - 预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求。
    // - - 代码描述
    // - - {@link file://./file/express-test-3/api-design-cors/17.测试接口跨域问题.html}
    // - - - button#btnDelete{DELETE}
    // - - - 为删除按钮绑定点击事件处理函数 $('#btnDelete'), click, $.ajax, 打印 res
    // - - {@link file://./file/express-test-3/api-design-begin/apiRouter.js}
    // - - - 定义 DELETE 接口，router.delete, /delete, 返回对象：status，msg, 'DELETE 请求成功'
    
 * ```
 *
 */