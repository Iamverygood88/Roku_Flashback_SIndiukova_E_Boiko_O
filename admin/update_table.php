<?php
    require_once '../load.php';


    if (isset($_GET["update_table"])) {
        
        $result = updateTable();
    }

    if (isset($_GET["update_table_tv"])) {
        
        $result = updateTableTV();
    }

    if (isset($_GET["update_table_music"])) {
        
        $result = updateTableMusic();
    }

    echo json_encode($result);
