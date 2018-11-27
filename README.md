# 说明

前后端分离之极简的node后端

# 相关技术

* express
* pm2
* mysql

# 如何开始

```bash
$ git clone ......

$ cd backend-node && npm install

# 修改配置文件
# 配置端口、数据库等信息
$ vim config.js
# ......

# 初始化数据库
$ npm run init_database

# 以下三条可开启服务器
$ npm start
# 或
$  ./node_modules/.bin/pm2 start server.js
# 或
$ node server.js
# 以上是开启服务器命令

# 如果使用npm start开启服务器，则：
# 停用服务器
$  ./node_modules/.bin/pm2 stop server.js

# 重启服务器
$  ./node_modules/.bin/pm2 restart server.js
```

# 示例链接：

假设`port=3434`

* `localhost:3434/`
* `localhost:3434/user`
* `localhost:3434/user/add`
* `localhost:3434/user/add?name=pelli&age=18`
* `localhost:3434/test`

# 代理

* `localhost:3434/proxy`