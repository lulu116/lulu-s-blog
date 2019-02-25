# lulu's blog 个人网站
这是我个人制作的项目，由于时间原因，项目存在很多缺陷，后期会定期优化。此项目基于vue、vue-router、vuex、element ui前端主流技术栈，webpack打包部署

## 项目预览
![项目主页](图片地址 ''图片title'')

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
