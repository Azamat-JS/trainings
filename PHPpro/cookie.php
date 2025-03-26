<?php
  setcookie("token", "1234qwert", time() + 864000, "/");
  setcookie("access", "gmailonly", time() + 12000, "/");
  setcookie("parol", "1234admin", time() - 0, "/");

//   foreach($_COOKIE as $key => $value){
    // echo"{$key} = {$value}<br>";
//   }

   if(isset($_COOKIE["parol"])){
    echo"Your parol is: {$_COOKIE["parol"]}";
   }else{
    echo"You don't have a parol";
   }
?>