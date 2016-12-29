var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');
var request = require('request');
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password:'',
    database:'test'
});

var app = express();

var countId = 1;
app.get('/', function (req, res) {

    console.log('connected to id:'+countId);

    connection.query('SELECT * from users',function(err, rows, fields){
        res.send(rows);
    });

    countId ++;
})



app.listen(3000,function(err){
    if(!err){
        console.log("App started");
    }else{
        console.log("App booting error:"+err);
    }
});