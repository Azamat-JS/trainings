<?php
//   $username = "Azamat Abdullayev Developer";
  $username = array("Azamat", "Abdullayev", "Developer");
  $phone_number = "998-91-099-99-99";

//   $username = strtolower($username);
//   $username = strtoupper($username);
//   $username = trim($username);
//    $phone_number = str_replace("-", "_", $phone_number);
    // $username = strrev($username);
//    $checkEquality = strcmp($username, "Azamat Abdullayev");
// $index = strpos($phone_number, "-");
//    $first_name = substr($username, 0, 6);
//    $last_name = substr($username, 7);
//   $fullname = explode(" ", $username);
  $username = implode("-", $username);

   echo $username
      
?>