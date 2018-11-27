const createConnection = require('./create-db-connection');

module.exports =  function dbQuery(sql){
	return new Promise(function(resolve, reject){
		const mysql = sql;

		const connection = createConnection();

		connection.connect();

		connection.query(mysql, function(err, results, fields){
			if(err){
				reject(err);
			}else{
				resolve({
					results,
					fields
				});
			}
		});

		connection.end();
	});
}