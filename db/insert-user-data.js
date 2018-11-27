const dbQuery = require('./db-query');

module.exports = function(data){
	const sql = `
		insert into user(user_name, user_sex) values("${data.name}", "${data.sex}"); 
	`;

	return dbQuery(sql);
};