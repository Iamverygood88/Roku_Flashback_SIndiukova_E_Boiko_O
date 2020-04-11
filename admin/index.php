<?php
    require_once '../load.php';


    if(isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);

    } 
    
    if(isset($_GET['filter'])) {

        $args = array(
        
        'tbl' => $tbl,
        'tbl2' => 'tbl_year',
        'tbl3' => 'tbl_year_media',
        'col' => 'media_id',
        'col2' => 'year_id',
        'col3' => 'year_name',
        'filter' => $_GET['filter'],
        );

        $results = getMoviesByFilter($args);

        echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));
    
    } 

    elseif(isset($_GET['filtertv'])) {

        $args = array(
        
        'tbl' => $tbl,
        'tbl2' => 'tbl_year',
        'tbl3' => 'tbl_year_tv',
        'col' => 'tv_id',
        'col2' => 'year_id',
        'col3' => 'year_name',
        'filter' => $_GET['filtertv'],
        );

        $results = getMoviesByFilter($args);

        echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));
    
    }

    elseif(isset($_GET['filtermsc'])) {

        $args = array(
        
        'tbl' => $tbl,
        'tbl2' => 'tbl_year',
        'tbl3' => 'tbl_year_music',
        'col' => 'music_id',
        'col2' => 'year_id',
        'col3' => 'year_name',
        'filter' => $_GET['filtermsc'],
        );

        $results = getMoviesByFilter($args);

        echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));
    
    }
    
    else {

        $results = getAll($tbl);
        echo json_encode($results);
    }



