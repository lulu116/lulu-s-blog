# lulu's blog 个人网站 
这是我个人制作的项目，由于时间原因，项目存在很多缺陷，后期会定期优化，由于时间原因，没有处理移动端样式布局，请用PC端进行查看。此项目基于vue、vue-router、vuex、element ui前端主流技术栈，webpack打包部署

在线预览：https://lulu116.github.io/Myblog-online/

## 项目预览
![项目主页](图片地址 ''图片title'')

## 项目运行
运行项目需要安装: [node.js](https://nodejs.org/en/)、 [git](https://git-scm.com/)
```
项目克隆：git clone https://github.com/lulu116/MyBlog.git
进行项目目录: cd MyBlog
下载依赖: cnpm install / yarn add (开发环境、生产环境依赖)
项目运行: npm start
项目构建: npm run build
生产环境运行: http-server ./dist (http-server 全局安装)
```

## 项目目录
```
├── .vscode                  # vscode编辑器配置
├── build                    # webpack 生产、开发环境配置
├── config                   # webpack 配置中需要用到的变量，单独抽出来
├── dist                     # 打包资源
├── node_modules             # node模块
├── src                      # 源码目录
│   ├── assets              # 静态资源
│   ├── components          # 自定义组件
│   ├── datas               # 模拟静态数据
│   ├── router              # 路由文件
│   ├── services            # 接口调用
│   ├── store               # 状态管理
│   ├── styles              # 样式文件
│   ├── utils               # 自定义工具类
│   ├── views               # 显示的具体页面
│   ├── App.vue             # 模板入口
│   ├── main.js             # 入口文件
├── static                   # 静态资源路径(直接拷贝的文件)
├── .babelrc                 # babel配置(预设和插件)
├── .eslintrc.js             # eslint配置
├── .gitignore               # 上传到git需要忽略的文件
├── .postcssrc.js            # postcss配置
├── index.html               # 模板文件
├── package.json             # 项目描述
└── README.md                # 项目自述
```

## 项目解说
* 一直想做一个属于自己的个人网站，把一些比较前沿的技术用到项目中，也算是自己对所接触到的技术的一个实践。
* 项目用webpack部署,分生产环境、开发环境。用vue+vuex+element ui+vue-router搭建整个项目，一开始我是对vue不太熟悉，因为自己是刚接触，vue中很多指令都跟之间接触的react的书写方式不一样，vue中很多API，如果不熟悉的话可以要去看API文档。状态管理也是比较复杂的，由于在dva框架中接触到状态管理，所以vuex的状态管理看了一遍文档就有点眉目，不过vue的状态目录结构建议细分，这是官方的建议。vuex 中有一些辅助函数用起来比较方便，直接可以拿到某modules下面的方法。element ui完美的与vue进行组合，所以在技术选型的时候进行了参考，element ui设计语言有很多直接写好的组件供我们使用。博客网站参考
[vue-element-admin](https://panjiachen.github.io/vue-element-admin/#/login?redirect=%2Fdashboard)进行页面布局。项目所有数据都是静态的，后期会对项目请求数据这一块进行优化，现在由于时间、资源的不足，暂时只能进行模拟数据。问题太多，欢迎指点。

