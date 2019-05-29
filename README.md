# onlineexam: 在线题库系统

> A Vue.js project

## Build Setup: 开发设置

``` bash
# install dependencies
# 安装全部依赖包
npm install

# serve with hot reload at localhost:8080
# 在8080端口运行开发服务
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目结构图

> 打*的为配置文件，尽量不要修改

```
├── /build/           # *CLI的支持文件目录
├── /config/          # *CLI配置
├── /node_modules/    # *依赖的包
├── /pages/           # 存放页面的目录
│ ├─ /login/          # 登录页面，项目的入口
│ ├─ /loginadmin/     # 管理员登录页面
│ ├─ /student/        # 学生端
│ ├─ /teacher/        # 教师端
│ ├─ /admin/          # 管理员端
│ └─ /exam/           # 考试页面
├── /src/             # 资源目录
│ ├─ /assets/         # 图片资源目录
│ ├─ /components/     # 组件目录
│ └─ /router/         # 路由目录
├── /static/          # 静态资源目录，js, json和css存放在此处
├── .babelrc          # *babel配置文件
├── .editorconfig     # *文件编辑配置
├── .eslintignore     # *设置eslint略过的文件
├── .eslintrc.js      # *eslint配置文件
├── .gitignore        # *设置git略过的文件
├── .postcssrc.js     # *postcss配置文件
├── package-lock.json # *项目依赖版本号留档
└── package.json      # *项目依赖的目录
```
