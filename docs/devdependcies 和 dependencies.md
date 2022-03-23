# Dependencies 与 devDependencies 异同

相同的地方就是在你或者别人 clone 这个库进行开发调试的时候，可以通过 npm install 一键安装这两个目录下所有的依赖，而不用去一行行找你到底在文件中引用了那些依赖。

不同的地方在于：当某个项目依赖了你的 mylib，那么在安装的时候会链式地安装 mylib 这个项目中 dependencies 配置声明的依赖，因为根据约定，npm 认为这是项目运行时需要的依赖。而 devDependencies 则是开发时需要的依赖。 如果你输入 npm install --production 指令，就只会安装 dependencies 目录下的依赖，在一些服务端自动构建的过程中或者在一些特殊的需求下，可能会用到这个指令。
