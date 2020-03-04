<?php
    require('connect.php');

       function getUsers($conn) {

           $getData = 'SELECT * FROM tbl_user';
        //    $getData = 'SELECT * FROM tbl_user WHERE user_name="'.$username.'"';
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


    function getUser($conn) {
        // validate that the post method is working from out JS file
        $username = $_POST['username'];

        // echo $userame; 

        $getUser = 'SELECT * FROM tbl_user WHERE user_name="'.$username.'"';
        $runQuery = $conn->query($getUser);

        $resultUser = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $resultUser[] = $row;
        }

        return $resultUser;
    }

?>