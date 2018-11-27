const express = require('express');
const router = express.Router();

const addUser = require('../action/user/add-user');
const delUser = require('../action/user/del-user');


const corsRouter = require('../action/cors/cors-router');

// 跨域设置
corsRouter(router);

router.get('/', (req, res) => {
    res.send('user home');
});

router.get('/add', (req, res) => {
	const add_user = addUser({
		name: 'Jack',
		sex: 2
	});

	const query = req.query;// 查询字符串：name=jkjk&age=890
	const params = req.params;// 路由参数
	const body = req.body; // post参数

	add_user.then((data) => {
		res.send(JSON.stringify({
	        name: 'test-get-pelli',
	        age: 18,
	        data,
	        query,
			params,
			body
	    }));
	}).catch((e) => {
		console.log(e);
	});
});

router.post('/add', (req, res) => {
    res.send(JSON.stringify({
        name: 'test-post-pelli',
        age: 100
    }));
});

router.get('/del', (req, res) => {
	const user_id = req.query['user_id'];

	if(user_id){
		const del_user = delUser(user_id);

		del_user.then((data) => {
			res.send(JSON.stringify({
		        name: '删除一个用户',
		        age: 100,
		        data
		    }));
		}).catch((e) => {
			console.log(e);
			res.send(JSON.stringify({
		        name: '删除用户出错了',
		        age: 100,
		        data
		    }));
		});
	}else{
		res.send(JSON.stringify({
	        name: '参数有误',
	        age: 100
	    }));
	}
});

// req.session
router.get('/login', (req, res) => {
	// 设置session和读取session
	console.log(req.session.is_login);
	req.session.is_login = 1;
	console.log(req.session.is_login);
	req.session.is_login = 2;
	console.log(req.session.is_login);

	res.send(JSON.stringify({
        name: 'test-post-pelli',
        age: 100,
        is_logged_in: req.session.is_login === 1 ? true : false
    }));
});

module.exports = router;