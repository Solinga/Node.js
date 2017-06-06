'use strict';

//1.事件
//1.1引入事件模块
// const evnts = require('events');
// //1.2创建触发器对象
// var evt = new evnts.EventEmitter();
// //1.3创建一个函数处理程序
// function eventhandler(){
// 	console.log('1111');
// 	console.log('2222');
// }
// //1.4绑定事件和事件的处理程序
// evt.on('eventName',eventhandler);
// //1.5触发触发器,执行
// evt.emit('eventName');
//node里面的事件, 只要有异步,就有事件
//node模块:一个文件包起来, 得到一个对象

//2.引入show模块
const show  = require('./show');
// //2.1使用show类构造方法
// var obj1 = new show();
// //2.3让方法调用
// obj1.say();
show.say();