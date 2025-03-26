<?php

   $db_server = "localhost";
   $db_root = "root";
   $db_pass = "azamat998877";
   $db_name = "my_database";
   $conn = "";
   

   try {
    $conn = mysqli_connect($db_server, 
                           $db_root, 
                           $db_pass, 
                           $db_name);
   } catch (mysqli_sql_exception) {
    echo "Couldn't connect!<br>";
  }

?>
