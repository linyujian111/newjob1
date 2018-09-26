<?php

/*

    连接数据库
        1、配置参数
        2、创建连接

 */
    //配置参数
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'myjob';

//连接数据库
$conn = new mysqli($servername,$username,$password,$dbname);

 // 检测连接
    if ($conn->connect_error) {
        // 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }


     //查询前设置编码，防止输出乱码
        $conn->set_charset('utf8');

    //$conn->query  用于执行sql语句
    // $sql = "select id,name,password from name";
    // $result= $conn->query($sql);

    //得到所有结果
    // $row=($result->fetch_all(MYSQLI_ASSOC));

    // echo json_encode($row);





?>