<?php 
$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "nodeweb";
// 创建连接
$conn =mysqli_connect($servername, $username, $password, $dbname);

$id = $_GET['id'];
$sql = "delete from user where id={$id}";
//前端根据返回的数据1执行隐藏方法
if (mysqli_query($conn,$sql)) {
	//处理删除数据，返回前端一个结果（echo 1）
	echo 1;
}
?>
