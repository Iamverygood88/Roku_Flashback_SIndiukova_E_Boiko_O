<?php 
include('functions.php');

// if we are passing in a user key in the GET superglobal, then go get a user

if(isset($_GET["getUsers"])) {
    $users = getUsers($pdo);

    echo json_encode($users);
}

if(isset($_GET["getKidMovies"])) {
    $kidMovies = getKidMovies($pdo);

    echo json_encode($kidMovies);
}

if(isset($_GET["getKidTelevision"])) {
    $kidTelevision = getKidTelevision($pdo);

    echo json_encode($kidTelevision);
}

if(isset($_GET["getMusic"])) {
    $music = getMusic($pdo);

    echo json_encode($music);
}