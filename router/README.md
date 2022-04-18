## 一、初始项目
1. 项目介绍与版本库地址
2. 编辑器的选择
3. 项目文件结构与浏览器插件
4. 用到的依赖包
    - 
    ```js
    路由：               yarn add vue-router
    path包：             yarn add path -D       yarn add -d @types/path
    安装lodash：         yarn add lodash        yarn add -d @types/lodash
    安装mockjs：         yarn add mockjs         yarn add -d vite-plugin-mock
    安装axios：          yarn add axios 
    安装tailwindcss：    yarn add -D tailwindcss postcss autoprefixer   npx tailwindcss init -p
    安装sass：           yarn add -d sass
    安装表单验证库：       yarn add vee-validate@next @vee-validate/rules yup @vee-validate/i18n
    安装组件库            yarn add element-plus
    ```
## 二、自动注册路由
1. 初始路由
2. 优化路由定义
3. 布局页面思路分析
4. 路由嵌套与TS类型断言
5. 路由别名定义
6. 优化布局路由文件结构
7. 自动提取布局页面
8. 自动生成布局路由
9. 完成布局路由提取
10. 提取子路由
11. 修正子路由提取的问题
12. 让页面可以自定义路由规则

## 三、VITE环境变量
1. vite别名alias声明
2. 修复main.ts中别名报错问题