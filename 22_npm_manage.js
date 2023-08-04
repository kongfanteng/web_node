/**
 * @example
 *
 * ```js
    // npm-包管理配置文件
    // - 1、包管理配置文件
    // - - npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置信息。例如：
    // - - - 项目的名称、版本号、描述等
    // - - - 项目中都用到了哪些包
    // - - - 哪些包只在开发期间会用到
    // - - - 哪些包在开发和部署时都需要用到

    // - 2、多人协作问题？（共享时剔除 node_modules）
    // - - 整个项目的体积是 30.4M
    // - - 第三方包的体积是 28.9M
    // - - 项目源代码的体积 1.6M
    // - - 遇到的问题：第三方包的体积过大，不方便团队成员之间共享项目源代码
    // - - 解决方案：共享时剔除 node_modules

    // - 3、如何记录项目中安装了哪些包？
    // - - 在项目根目录中，创建一个叫做 package.json 的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码
    // - - 注意：今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中。

    // - 4、快速创建 package.json？
    // - - npm 包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建 package.json 这个包管理配置文件：
    // - - 作用：在执行命令所处的目录中，快速创建 package.json 文件
    npm init -y
    // - - 注意：
    // - - - 上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。
    // - - - 运行 npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.json 中。

    // - 5、dependecies 节点
    // - - package.json 文件中，有一个 dependencies 节点，专门用来记录您使用 npm install 命令安装了哪些包。

    // - 6、一次性安装所有依赖包？
    // - - 当我们拿到一个剔除了 node_modules 的项目之后，需要先把所有包下载到项目中，才能将项目运行起来。否则会包类似于下面的错误：
    // - - 由于项目运行依赖于 moment 这个包，如果没有提前安装好这个包，就会报如下的错误：
    Error: Cannot find module 'moment'
    // - - 可以运行 npm install 命令（或 npm i）一次性安装所有的依赖包
    // - - 执行 npm install 命令时，npm 包管理工具会先读取 package.json 中的 dependencies 节点
    // - - 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
    npm install

    // - 7、卸载包？
    // - - 可以运行 npm uninstall 命令，来卸载指定的包：
    // - - 使用 npm uninstall 具体的包名来卸载包
    npm uninstall moment
    // - - 注意：npm uninstall 命令执行成功后，会卸载的包，自动从 package.json 的 dependencies 中移除掉。

    // - 8、devDependencies 节点？
    // - - 如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中。
    // - - 与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。
    // - - 您可以使用如下的命令，将包记录到 devDependencies 节点中：
    // - - 安装指定的包，并记录到 devDependencies 节点中
    npm i 包名 -D
    // - - 注意：上述命令是简写形式，等价于下面完整的写法：
    npm install 包名 --save-dev
 * ```
 * 
 */