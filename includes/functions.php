<?php
    require('connect.php');

       function getUsers($conn) {

           $getData = 'SELECT * FROM tbl_user';
           $runQuery = $conn->query($getData);

           $result = array();

           while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
               $result[] = $row;
           }

           return $result;
       }

?>