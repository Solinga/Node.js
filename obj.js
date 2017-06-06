//全局对象
//window 
//global 
//__filename脚本文件名字,带绝对路径
console.log(__filename);
// C:\Users\changjiang\Desktop\obj.js
// 路径
console.log(__dirname);
// C:\Users\changjiang\Desktop

console.time('x');
for(var i = 0 ; i< 10000; i++){

}
console.timeEnd('x');//592.966ms
console.error();
console.warn();
var i = 0;
//延迟
setTimeout(function(){
	console.log(++i);
},1000);
setInterval(function(){
	console.log(++i);
},1000);