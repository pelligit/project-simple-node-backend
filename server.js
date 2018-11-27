const express = require('express');
const proxy = require('express-http-proxy');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const config = require('./config');

// 路由
const index = require('./api/index');
const test = require('./api/test');
const user = require('./api/user');

// 使用session
app.use(cookieParser());
app.use(session({
	cookie: {
		maxAge: 1000 * 60 * 30,
		// secure: true,
	},
	secret: 'pellisite',
	resave: false,
	saveUninitialized: true,
}));

// 配置路由
app.use('/', index);
app.use('/test', test);
app.use('/user', user);

// 代理相关配置
const proxy_config = config['proxy'];

// 配置代理
if(proxy_config['on']){
	app.use(proxy_config['router'] || '/proxy', proxy(proxy_config['url']));
}

// 端口
const port = config.port || 8989;

// 开启服务器
app.listen(port, () => {
	console.log('localhost:' + port);
});
