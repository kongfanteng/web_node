/**
 * @example
 *
 * ```js
    // Project-JWT-了解 token 的原理
    // - 1、了解 Session 认证的局限性
    // - - Session 认证机制需要配合 Cookie 才能实现。由于 Cookie 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 Session 认证。
    // - - 注意：
    // - - - 当前端请求后端接口不存在跨域问题的时候，推荐使用 Session 身份认证机制
    // - - - 当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制。

    // - 2、什么是 JWT
    // - - JWT（英文全称：JSON Web Token）是目前最流行的跨域认证解决方案。

    // - 3、JWT 的工作原理
    // - - 浏览器（客户端）-客户端登录：提交账号密码-> 
    // - - 服务器（Server）（验证账号和密码）（验证通过后，将用户的信息对象，经过加密之后生成 Token 字符串）-服务器响应：将生成的 Token 发送给客户端->
    // - - 浏览器（客户端）（将 Token 存储到 LocalStorage 或 SessionStorage）-客户端再次发起请求时，通过请求头的 Authorization 字段，将 Token 发送给服务器->
    // - - 服务器（Server）（服务器把 Token 字符串还原成用户信息对象）（用户的身份认证成功后，服务器针对当前用户生成特定的响应内容）-服务器响应：把当前用户对应的页面内容响应给浏览器->

    // - 4、JWT 的组成部分
    // - - JWT 通常由三部分组成，分别是 Header（头部）、Payload（有效载荷）、Signature（签名）。三者之间使用英文“.”分隔，格式如下：
    Header.Payload.Signature

    // - 5、JWT 的三个部分各自代表的含义
    // - - JWT 的三个组成部分，从前到后分别是 Header、Payload、Signature
    // - - 其中：
    // - - - Payload 部分才是真正的用户信息，他是用户信息经过加密之后生成的字符串。
    // - - - Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。

    // - 6、JWT 的使用方式
    // - - 客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中
    // - - 此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是把 JWT 放在 HTTP 请求头 Authorization 字段中，格式如下：
    Authorization: Bearer <token>

 * ```
 *
 */