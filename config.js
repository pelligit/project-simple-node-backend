module.exports = {
	port: 3434, // 本地服务器端口
	db: {
		user: 'root', // 数据库用户名
		password: 'root', // 数据库密码
		port: 3306, // 数据库端口
		database: 'mytest' // 数据库名
	},
	proxy: {
		on: true, // 是否开启代理
		url: 'http://127.0.0.1', // 被代理的链接
		router: '/proxy' // 此代理使用的路由
	},
	cors: {
		on: true, // 是否允许跨域
		host: '*'
	}
}
