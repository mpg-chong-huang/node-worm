var express = require('express');
var mysql 	= require('mysql');
var app 	= express();

var pool	= mysql.createPool({
	connectionLimit : 100,
	host			: 'localhost',
	user			: 'root',
	password		: '',
	database		: 'test',
	debug			: false
});

function handle_database(req, res){
	pool.getConnection(function(err,connetion){
		if(err){
			res.json({"code":100,"status":"Error in connetion to database"});
			return;
		}

		console.log('connected to id:'+connetion.threadId);

		connetion.query("SELECT * from users",function(err,rows){
			connetion.release();
			if(!err){
				res.json(rows);
			}
		});
		connetion.on('error',function(err){
			res.json({"code":100,"status":"Error in connetion to database"});
			return;
		})
	});
}

app.get("/",function(req,res){
	handle_database(req,res);
});

app.listen(3000);