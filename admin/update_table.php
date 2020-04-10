<?php
    require_once '../load.php';

    if (isset($_GET["update_table"])) {
        $result = updateagetable($id);
    }

    echo json_encode($result);
