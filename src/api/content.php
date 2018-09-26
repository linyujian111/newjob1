<?php
include "connet.php";

    //接收前端传回来的信息
    $id = isset($_GET['id'])?$_GET['id']:null;
    $table = isset($_GET['table'])?$_GET['table']:null;


    // $password = isset($_POST['password'])?$_POST['password']:null;
    // $password = md5($password);
// var_dump($username);
    $sql = "select * from $table where id=$id";
    // $wSql = "insert into user(username,password) values('$username','$password')";

    //执行sql语句
    $result = $conn->query($sql);
    //使用查询结果集
    //得到数组
    


    $row = $result->fetch_all(MYSQLI_ASSOC);



    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    // $info=mysqli_query($conn,"select * from goods where id='$id' ");
    // $newArr=array();
    
    // while($array=mysqli_fetch_array($info,MYSQLI_ASSOC)){
    //     array_push($newArr,$array);
    // };
    // echo(json_encode($newArr));

    // 判断是否含有前端传过来的值
    // if(($result->num_rows)>0){

    //     echo 'no';

    // }
    // else{

    //     $result = $conn->query($wSql);
    //     echo 'yes';
    // }

        //释放查询结果集，避免资源浪费
    // $result->close();


    // 关闭数据库，避免资源浪费
    // $conn->close();

    ?>