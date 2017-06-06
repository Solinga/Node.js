const fs = require('fs');
var file = 'test.txt';
var str1 = 'html\ncss\njs\n';
fs.writeFile(file,str1);
//删除文件
fs.unlink(file);

fs.mkdir('myweb');

fs.rmdir('myweb');