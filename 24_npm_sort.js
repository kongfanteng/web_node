/**
 * @example
 *
 * ```js
    // npm-包的分类和规范的包结构
    // - 1、项目包
    // - - 哪些被安装到项目的 node_modules 目录下的包，都是项目包
    // - - 项目包又分为两类，分别是：
    // - - 开发依赖包（被记录到 devDependencies 节点中的包，只在开放期间会用到）
    // - - 核心依赖包（被记录到 dependencies 节点中的包，在开放期间和项目上线之后都会用到）
    npm i 包名 -D # 开发依赖包（会被记录到 devDependencies 节点下）
    npm i 包名    # 核心依赖包（会被记录到 dependencies 节点下）

    // - 2、全局包
    // - - 在执行 npm install 命令时，如果提供了 -g 参数，则会把包安装为全局包。
    // - - 全局包会被安装到，下载地址 npm config get prefix 缓存地址 npm config get cache
    // - - 注意：
    // - - - 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令
    // - - - 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。

    // - 3、包-i5ting_toc
    // - - i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下：
    // - - # 将 i5ting_toc 安装为全局包
    npm install -g i5ting_toc
    // - - # 调用 i5ting_toc，轻松实现 md 转 html 功能
    i5ting_toc -f 要转换的 md 文件路径 -o

    // - 4、规范的包结构
    // - - 在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构
    // - - 一个规范的包，它的组成结构，必须符合以下 3 点要求：
    // - - - 1）包必须以单独的目录而存在
    // - - - 2）包顶级目录下要必须包含 package.json 这个包管理配置文件
    // - - - 3）package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口。
    // - - 注意：以上三点要求是一个规范的包结构必须遵守的格式

    // - 5、引入包的实际过程
    // - - require 引入 moment 包，实际去引入 node_modules 下 moment 中 package.json 中的 main 属性指向的入口文件
 * ```
 * 
 */