const mysql = require('mysql');
const config = require('../config');

module.exports = function(){
	return mysql.createConnection({
	    host: 'localhost',
	    user: config['db']['user'],
	    password: config['db']['password'],
	    database: config['db']['database']
	});
}


