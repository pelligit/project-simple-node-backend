const dbQuery = require('./db-query');

module.exports = function(user_id){
	const sql = `
		delete from user where user_id=${user_id};
	`;

	return dbQuery(sql);
};