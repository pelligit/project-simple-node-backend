const config = require('../../config');

module.exports = (router) => {
	const cors = config['cors'];

	// 判断是否允许跨域
	if(cors.on){
		router.use((req, res, next) => {
			const cors_host = cors.host;

			if(cors_host){
				res.header("Access-Control-Allow-Origin", cors_host);
			}else{
				res.header("Access-Control-Allow-Origin", '*');
			}

		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

		    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
		    res.header("X-Powered-By",'Express');
		    res.header("Content-Type", "application/json;charset=utf-8");
		    
		    next();
		});
	}
};