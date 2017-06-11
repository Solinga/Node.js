// 引入http模块
// var http=require('http');
// // 引入地址模块
// var url=require('url');
// var queryString=require('querystring');
// var cs=function(req,res){
// 	var uri=req.url;
// 	var json=queryString.parse(url.parse(uri).query);
// 	console.log(json);
// 	res.write('1');
// 	res.end();
// }
// http.createServer(cs).listen(8566);


'use strict';
//1.自架web服务器，引入http和URL和querystring和mysql四个模块
var http =require('http');
var url = require('url');
var queryString = require('querystring');
//连接数据库
var mysql = require('mysql');

// 回调函数
var cs = function(req,res){
	//这个值会经常变,请求一次就变一次
	// res.write('jQuery111308636421768088602_1493532902268({"id":"1"})');
	// 3.1接收请求URL
	var uri = req.url;
	var json = queryString.parse(url.parse(uri).query);
	console.log(json);
	var fname = json.cb;
	var id = json.id;

	var jsonstr = fname+'({"ok":"1"})';
	//连接操作数据库
	var conn = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123456',
		database:'0606'
	});
	//操作数据库
	conn.connect();
	//测试一下,是否能连接上数据库
	conn.ping(function(err){
		console.log('mysql is OK');
	});
	//操作数据库
	conn.query('delete from form0606 where id= '+id,function(err,rs){
		if (rs.affectedRows == '1') {
			//给前段jsonp返回成功删除的消息 ok :1
			res.write(jsonstr);

			//关闭响应
			res.end();
		}
	});
	conn.end();
}
// 2.打开端口时才用上面的回调函数
http.createServer(cs).listen(8888);

