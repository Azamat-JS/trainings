<?php
   $age = 2;

   if($age >= 18){
    echo "You may enter this site";
   }
   elseif($age <= 10 && $age >= 1){
    echo "You are kid";
   }elseif($age == 0){
    echo "You were just born";
   }
   else{
    echo "You are between 10 and 18 wait some years";
   }
?>