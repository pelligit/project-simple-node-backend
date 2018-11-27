const dbQuery = require('../db/db-query');

// 创建user表
const user_table_sql = `
		create table if not exists user(
			user_id int(12) not null primary key auto_increment,
			user_name varchar(64),
			user_sex int(1) not null default 0
		);
	`;

const create_user_table = dbQuery(user_table_sql);

create_user_table.then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});

// 创建contact表
const contact_table_sql = `
		create table if not exists contact(
			contact_id int(12) not null primary key auto_increment,
			contact_name varchar(64),
			contact_phont int(1) not null default 0
		);
	`;

const create_contact_table = dbQuery(contact_table_sql);

create_contact_table.then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});
