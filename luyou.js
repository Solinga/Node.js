//路由, 有一个主入口, 在这个主入口上分配到不同的页面上去
//
//1.引入相应的模块
const http = require('http');
const url = require('url');
const fs = require('fs');
var cs ;
//2.构造函数
cs = function(req,res){
	var uri = req.url;
	if( uri !=='/favicon.ico'){
		// var arr = url.parse(uri);
		// console.log(arr);
		// 2.1通过pathname来观察路径地址变化
		var path = url.parse(uri).pathname;
		switch(path){
			case "/user/add":
			res.write('<h1>user add<h1>');
				break;
			case "/user/delete":
			res.write('<h1>user delete<h1>');
				break;
			case "/user/update":
			res.write('<h1>user update<h1>');
				break;
			case "/user/find":
			res.write('<h1>user find<h1>');
				break;
			default:
				var indexFile = 'index.html';
				var data = fs.readFileSync(indexFile);
				res.write(data.toString());
				break;
		}
	}
	res.end();
}
//3.建服务器,打开端口
http.createServer(cs).listen(5561);
console.log('server is ok');

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: null,
//   query: null,
//   pathname: '/abc/hij',
//   path: '/abc/hij',
//   href: '/abc/hij' }
