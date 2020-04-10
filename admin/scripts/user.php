<?php 



function getAllUsers(){
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute();

    $users = array();

    if($get_user_result){
        while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
            // parse all the users' info like we did for a single and pass them into users array

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['avatar'] = $user['user_avatar'];
            $currentuser['parmissions'] = $user['user_permissions'];
            $currentuser['uname'] = $user['user_name'];

            $users[]= $currentuser;
        }

        return json_encode($users);
    } else {
        
          return 'There was a problem getting the users';
    }
}

function updateagetable(){
    $pdo = Database::getInstance()->getConnection();

    $update_age_query = 'UPDATE tbl_movies SET age_appropriateness = :ageapprop WHERE id = :id';

    $update_age_set = $pdo->prepare($update_age_query);
    $update_age_result = $update_age_set->execute(
        array (
            ':ageapprop' => $_POST['age_appropriateness'],
            ':id' => $id
        )
    );

    if ($update_age_result) {
       
        return array('result' => $update_age_result);
    } else {
        
        return array('result' => false);
    }

}

