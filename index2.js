/*
* @Author: changjiang
* @Date:   2017-04-29 15:07:00
* @Last Modified by:   changjiang
* @Last Modified time: 2017-06-04 19:22:31
*/

'use strict';
// //os模块
// //os operating system
// var os = require('os');
// //mem: memory 
// //totalmem:总共内存,单位字节
// var tot = os.totalmem();
// console.log(tot);//17088417792
// //freemem: 空闲/剩余内存 
// console.log(os.freemem());
// //tmpdir 默认临时文件夹
// console.log(os.tmpdir());
// //hostname 默认操作系统的主机名
// console.log(os.hostname());
// //操作系统名 windowsME NT 95 98 2000 XP 
// console.log(os.type());//Windows_NT
// //操作系统平台 win32
// console.log(os.platform());
// //[ 0, 0, 0 ] 包含1,5,15平均负载的数组
// console.log(os.loadavg());
// //CPU信息
// console.log(os.cpus());
// //网络接口
// console.log(os.networkInterfaces());
// //cpu架构 x86 x64 arm ia32
// console.log(os.arch());//x64

//path模块
//处理文件路径的模块
// var path = require('path'); 
// var str = '/user/local/www/lamco.sh';
// //路径
// //dirname /user/local/www
// //路径名
// console.log(path.dirname(str));
// //文件名
// //basename lamco.sh
// console.log(path.basename(str));
// //后缀名
// //.sh 
// // test.txt.txt
// console.log(path.extname(str));
// //解析路径
// //parse解析
// //字符串路径解析成相应的对象
// console.log(path.parse(str));


// var pobj = 
// 	{ root: '/',
//   dir: '/user/local/www',
//   base: 'lamco.sh',
//   ext: '.sh',
//   name: 'lamco' }
//win系统中以\结束
//把路径对象转成路径字符串
// console.log(path.format(pobj));

// dns
// // 用来解析域名
// var dns = require('dns');

// var domain = 'www.baidu.com';
// //将域名机械为第一条找到的记录
// dns.lookup(domain,function(err,ip,family){
// 	console.log('ip is '+ip);//101.200.191.133
// 	//反向即系IP地址.
// 	dns.reverse(ip,function(err,name){
// 	if (err) {
// 		console.log(err.stack);
// 	}
// 	console.log(JSON.stringify(name));
// });
// });


// //net模块
// //提供了一些用于底层的网络通信工具,包含创建服务器/客户端方法
// const net=require('net');
// //创建服务器
// var chat=net.createServer();
// //绑定网络
// chat.on('connection',function(client){
// 	client.write('hello world');

// 	client.end();
// });


// console.log('telnet server ok!');

// //聊天原理, 终端中输入, 控制台中显示
const net=require('net');
//建立服务器
var chat=net.createServer();
//创建连接
chat.on('connection',function(client){
	client.write('hello world');

	client.on('data',function(data){
		console.log(data.toString());
	})
});
//打开一个端口
chat.listen(9011);

console.log('telnet server ok!');



//ES6写法
// var show=()=>{
// 	console.log('hello');
// }
// show();

// (function(){
// 	console.log('hello');
// })();
// //ES6写法
// (()=>{
// 	console.log('hello');
// })();