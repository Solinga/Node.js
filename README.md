# Node.js
>文件模块 file.js
路由 luyou.js
全局对象  obj.js
自定义模块 show.js
工具模块  tool.js
#index2 包含以下案例
os模块；path模块；dns；net模块；
>>
聊天原理, 终端中输入, 控制台中显示
# jsonp
>跨域的方法
1.通过服务器写代理(后端做)
2.$.ajax{
	dataType:jsonp(设置服务器返回的数据类型，必须是jsonp)
	data:{
	jsonp:'jsonpcallback',为jsonp请求制定一个回调函数名，替代自动生成的函数名
	}
}
3.$.getJSONP(url?cb=?)
jquery会随机自动生成函数名来替代问号?
