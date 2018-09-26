<?php
    include "connet.php";

    $sql = "select * from 1F";

    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $result->close();

    $conn->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);


?>