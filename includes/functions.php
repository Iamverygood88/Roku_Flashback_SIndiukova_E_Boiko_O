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

       function getKidMovies($conn) {

        $getData = 'SELECT * FROM tbl_movies';
        $runQuery = $conn->query($getData);

        $resultKidMovies = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $resultKidMovies[] = $row;
        }

        return $resultKidMovies;
    }

?>