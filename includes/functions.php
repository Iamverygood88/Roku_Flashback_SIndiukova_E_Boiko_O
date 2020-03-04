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

    function getKidTelevision($conn) {

        $getData = 'SELECT * FROM tbl_television';
        $runQuery = $conn->query($getData);

        $resultKidTelevision = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $resultKidTelevision[] = $row;
        }

        return $resultKidTelevision;
    }

    function getMusic($conn) {

        $getData = 'SELECT * FROM tbl_music';
        $runQuery = $conn->query($getData);

        $resultMusic = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $resultMusic[] = $row;
        }

        return $resultMusic;
    }

?>