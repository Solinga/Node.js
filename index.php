<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "0606";

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
    $sql = "SELECT * FROM form0606";
    $result = mysqli_query($conn, $sql);
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <style type="text/css">
        *{
            font-family: 微软雅黑;
        }
    </style>
    <link rel="stylesheet" type="text/css" href="bs/css/bootstrap.min.css">
    <script type="text/javascript" src="bs/js/jquery.min.js"></script>
    <script type="text/javascript" src="bs/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <h2 class='page-header'>查看用户:</h2>
        <table class='table table-bordered table-hover'>
            <tr>
                <th>编号</th>
                <th>用户名</th>
                <th>密码</th>
                <th>删除</th>
            </tr>
            <?php
            while($row = mysqli_fetch_assoc($result)) {
                // echo "<pre>";
                // print_r($row);
                // echo "</pre>";
                //
                echo "<tr>";
                echo "<td>{$row['id']}</td>";
                echo "<td>{$row['name']}</td>";
                echo "<td>{$row['pwd']}</td>";
                echo "<td><a href='javascript:' class='del' id='{$row['id']}'>删除</a></td>";
                echo "</tr>";
            }
             ?>
        </table>
    </div>   
</body>

<script type="text/javascript">
    $('.del').click(function(){
    id=this.id;
    console.log(id);
    obj = $(this);
    //出现错误
    // 使用此方法进行跨域时，需要在请求路径上加上"callback=?",jquery会自动替换请求路径后面?   部分为正确的函数名，从而执行这个函数.
    
    // cb: 'jQuery111304381409227893893_1497098624884',id: '11',
    // jQuery自动随机生成的函数名
    $.getJSON('http://localhost:8888?cb=?',{id:id},
        function(json){
            if(json.ok=='1'){
                obj.parent().parent().hide(1000);
            }
        // console.log(json);
    });
});
</script>
