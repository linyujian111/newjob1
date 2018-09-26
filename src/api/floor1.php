<?php

$password:"";
$dbname:'myjob';
$username:'root';
$servername:"localhost";

$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect.error){
    die("连接失败：".$conn->connect.error)
}else{
    echo "11111"
}




?>