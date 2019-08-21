# node_koa
a koa project based on node

# 安装依赖
## koa
* koa -- 框架
* koa-router -- 路由
* koa-bodyparser -- 格式化data值
* require-directory -- 自动加载路由工具

## 数据库
* sequelize -- 操控数据库
* mysql2 -- 数据库

## 热更新工具
* nodemon

## 验证器
* validator
* LinValidator
* jwtwebtoken
* bcryptjs -- 加密工具
* basic-auth -- 

## 工具库
* lodash

## 发送请求工具
* axios

# 项目目录
- node_koa
  + app
    + api
      + v1
        - book.js
        - classic.js
        - user.js
    + exception
      - httpException.js
    + libs
    + model
      - user.js
    + service
      - xxx.js
    + validator
      - validator
  + config
    - config.js
  + core
    - LinValidator.js
  + middleware
    - exception
  - app.js


## 准备工作
* 定义捕获异常中间件

## 所需接口
### user
* v1/user/register -- 注册
-- 登录类型：账号+密码 邮箱+密码
* v1/user/login -- 登录

### blog
* v1/blog/hot -- get 热门博客列表
* v1/blog/list -- get 所有博客列表
* v1/blog/new -- post 新增博客
* v1/blog/update -- post 更新博客
* v1/blog/delete -- post 删除博客
* v1/blog/like -- get 点赞博客
* v1/blog/unlike -- get 取消点赞
* v1/blog/search/id: -- get 搜索博客
* v1/blog/comment -- post 评论博客
* v1/blog/comment/delete -- post 删除评论


一、取得前端通过接口传过来的值
二、连接数据库，创建用户表，各方面打通

## 需要建立的表格
* 用户表格 -- id username email password
* 热门博客 -- id author title type content update create delete(软删除)
* 博客评论 -- id content create
* 博客列表 -- id title author time

## 加密密码，使用model的set方法
* 同步加密 -- 简单
* 异步加密 -- 有些问题

## 新建一个接口，用来验证token，颁布token
* 生成token返回给客户端
* 客户端下次访问的时候携带token，比对
* 新建中间件，验证token

## 登录
* 用户名 + 密码
* 邮箱 + 密码

## 发布到云端

使用 koa-static 放置前端静态页面

### 前端生产环境的编译
* 1、根据不同的环境变量请求不同的接口
* 2、配置打包文件的输出路径为后端的放置静态资源的目录
* 3、npm run build 编译文件
* 4、测试本地请求成功

### 购买域名和服务器

### 远程连接
* 1、ssh root@47.74.179.221
* 2、

linux 命令：
- ls 查看当前目录下的文件
- pwd 查看当前所在文件夹
- cd ~ 进入个人文件夹

### 域名解析

### Nginx 安装和配置
* apt show nginx -- 查看是否安装了 nginx
* apt update -- 全部更新
* apt install nginx -y -- 安装nginx

**关于安装了nginx之后外网不能访问的问题**
>问题描述：未配置安全组规则
解决方法：添加安全组规则，端口范围：80 授权对象：0.0.0.0/0 

**安装mysql**
* apt install mysql -y
* netstat -tap | grep mysql -- 查看是否安装成功
tcp        0      0 localhost:mysql         0.0.0.0:*               LISTEN      18538/mysqld
* dpkg -l | grep mysql
* mysql -u root -p -- 登录
* show databases
* 数据库初始化
1、安装验证密码插件 -- mysql_secure_installation
2、检查mysql服务状态 -- systemctl status mysql


### 安装 git
* apt install git -y
* ssh-keygen -- 生成 ssh key
* cat /root/.ssh/id_rsa.pub


### 安装 node.js
* apt install node.js -y
* nrm 切换镜像源
* npm install n -g -- 使用 n 管理 node版本
* n [node版本号]即可安装指定版本node

### 拉取代码，安装 pm2 启动项目

**git管理代码**
* 新建仓库，与本地代码建立连接
* 服务器端直接拉取 github 上的代码

```
git remote add origin git@github.com:deepCloned/node_koa_blog.git
fatal: remote origin already exists.

git remote rm origin -- 删除远程库

git push -u origin master
```

1. git init //初始化仓库

2. git add .(文件name) //添加文件到本地仓库

3. git commit -m "first commit" //添加文件描述信息

4. git remote add origin + 远程仓库地址 //链接远程仓库，创建主分支

5. git pull origin master // 把本地仓库的变化连接到远程仓库主分支
git pull origin master --allow-unrelated-histories -- 强制

6. git push -u origin master //把本地仓库的文件推送到远程仓库

**配置服务器git权限**
>部署公钥，加入服务器端 ssh key

**拉取代码**
* nginx
cd /var/www
cd html
mkdir /data
cd data
git clone 
