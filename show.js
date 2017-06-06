//自定义模块
function show(){
	this.name = 'user1';
	this.say = function(){
		console.log('my name is'+this.name);
	}
}
//把show 类扔出去
// module.exports= show;
module.exports= new show();
