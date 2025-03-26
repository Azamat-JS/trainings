<?php
 $password = 'admin123';

 $hash = password_hash($password, PASSWORD_DEFAULT);

 if(password_verify("admin123", $hash)){
    echo "You are logged in";
 }else{
    echo "Incorrect password";
 }

?>