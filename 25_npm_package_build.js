/**
 * @example
 *
 * ```js
    // npm-发布包-初始化基础的包结构
    // - 1、需要实现的功能
    // - - 1）格式化日期
    // - - 2）转义 HTML 中的特殊字符
    // - - 3）还原 HTML 中的特殊字符
    // - 2、代码描述
    // - - 格式化日期代码
    // - - - 文件地址：{@link file://./file/npm_package/kft_utils_test.js}
    // - - - 导入自己的包 kft-utils，定义包变量 utils
    // - - - 调用格式化日期 dateFormat，定义日期变量 dt 存储返回结果
    // - - - 打印输出 dt
    // - - 转化 HTML 的特殊字符
    // - - - 地址 {@link file://./file/npm_package/kft_htmlEscape_test.js}
    // - - - 导入自己的包 kft-utils，定义包变量 utils
    // - - - 定义 html 特殊字符串 htmlStr
    // - - - 调用 utils.htmlEscape 方法，定义变量 str 接收返回
    // - - - 打印输出 str
    // - - 还原 HTML 的特殊字符
    // - - - 地址 {@link file://./file/npm_package/kft_htmlEscape_test.js}
    // - - - 调用 utils.htmlUnEscape 方法，定义变量 rawHTML 接收返回
    // - - - 打印输出 rawHTML

    // - 2、初始化包的基本结构
    // - - 1）新建 kft-tools 文件夹，作为包的根目录
    // - - 2）在 kft-tools 文件夹下，新建如下三个文件
    // - - - package.json（包管理配置文件）{@link file://./file/kft-tools/package.json}
    // - - - index.js（包的入口文件）{@link file://./file/kft-tools/index.js}
    // - - - README.md（包的说明文档）{@link file://./file/kft-tools/README.md}
    
    // - 3、将不同功能进行模块化拆分（4 步）
    // - - 1）将格式化时间的功能，拆分到 src -> dateFormat.js {@link file://./file/kft-tools/src/dateFormat.js}
    // - - 2）将处理 HTML 字符串的功能，拆分到 src -> escape.js {@link file://./file/kft-tools/src/escape.js}
    // - - 在 index.js 中，导入两个模块，得到需要向外共享的方法 {@link file://./file/kft-tools/index.js}
    // - - 在 index.js 中，使用 module.exports 把对应的方法共享出去
    // - - 代码实现
    // - - - 新建 02.test.js 文件测试三个函数正确 {@link file://./file/kft-tools/02.test.js}

    // - 4、编写包的说明文档？（用户参考）
    // - - 包根目录中的 README.md 文件，是包的使用说明文档。通过它，我们可以事先把包的使用说明，以 markdown 的格式写出来，方便用户参考
    // - - README.md 文件中具体写什么内容，没有强制要求；只要能够清晰地把包的作用、用法、注意事项等描述清楚即可
    // - - 我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容：
    // - - 安装方式、导入方式、格式化时间、转义 HTML 中的特殊字符、还原 HTML 中的特殊字符、开源协议
    // - - 安装+导入
    ## 安装
    
    ```linux
    npm install kft-tools
    ```

    ## 导入

    ```js
    cosnt utils = require('kft-tools')
    ```

    ## 格式化时间

    ```js
    // 调用 dateFormat 对时间进行格式化
    const dtStr = utils.dateFormat(new Date())
    // 结果 2023-08-04 16:12:21
    console.log(dtStr)
    ```

    ## 转义 HTML 中的特殊字符

    ```js
    // 带转换的 HTML 字符串
    const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
    // 调用 htmlEscape 方法进行转换
    const str = utils.htmlEscape(htmlStr)
    // 转换的结果 &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
    console.log(str) 

    const htmlStr = '&lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;'
    console.log( htmlUnEscape(htmlStr) ) // <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
    ```

    ## 还原 HTML 中的特殊字符

    ```js
    // 待还原的 HTML 字符串
    const str2 = '&lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;'
    // 调用 htmlUnEscape 方法进行转换
    const originStr = utils.htmlUnEscape(str2)
    // 结果输出 <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
    console.log(originStr)

    ## 开源协议
    ISC

    ```


 * ```
 * 
 */