<?php

function getAll($tbl)
{
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM ' . $tbl;
    $results = $pdo->query($queryAll);

    if ($results) {
        return $results->fetchAll(PDO::FETCH_ASSOC);
    } else {
        return 'There was a problem accessing this info';
    }
}

function getMoviesByFilter($args){

    $pdo = Database::getInstance()->getConnection();

    $filterQuery = 'SELECT * FROM ' . $args['tbl'] . ' AS t, ' . $args['tbl2'] . ' AS t2, ' . $args['tbl3'] . ' AS t3';
    $filterQuery .= ' WHERE t.' . $args['col'] . ' = t3.' . $args['col'];
    $filterQuery .= ' AND t2.' . $args['col2'] . ' = t3.' . $args['col2'];
    $filterQuery .= ' AND t2.' . $args['col3'] . ' = "' . $args['filter'] . '"';

    $results = $pdo->query($filterQuery);


    if ($results) {
        return $results;
    } else {
        return 'There was a problem accessing this info';
    }
}

function updateTable(){

    $pdo = Database::getInstance()->getConnection();
    
    $update_query = 'UPDATE tbl_movies SET age_appropriateness = :agerate WHERE movie_title = :movie_title';
        $update_set = $pdo->prepare($update_query);
        $results = $update_set->execute(
            array(

                ':movie_title'=>$_POST['movie_title'],
                ':agerate'=>$_POST['age_appropriateness']
            

            )

        );

    if ($results) {
            
            return array('result' => $results);
    } else {
            // failure
            // echo 'could not add user';
            return array('result' => false);
    }

}

function updateTableTV() {
    
    $pdo = Database::getInstance()->getConnection();
    
    $update_query = 'UPDATE tbl_television SET age_appropriateness = :agerate WHERE movie_title = :movie_title';
        $update_set = $pdo->prepare($update_query);
        $results = $update_set->execute(
            array(

                ':movie_title'=>$_POST['movie_title'],
                ':agerate'=>$_POST['age_appropriateness']
            

            )

        );

    if ($results) {
            
            return array('result' => $results);
    } else {
            
            return array('result' => false);
    }
}

function updateTableMusic() {
    
    $pdo = Database::getInstance()->getConnection();
    
    $update_query = 'UPDATE tbl_music SET age_appropriateness = :agerate WHERE movie_title = :movie_title';
        $update_set = $pdo->prepare($update_query);
        $results = $update_set->execute(
            array(

                ':movie_title'=>$_POST['movie_title'],
                ':agerate'=>$_POST['age_appropriateness']
            

            )

        );

    if ($results) {
            
            return array('result' => $results);
    } else {
            
            return array('result' => false);
    }
}


