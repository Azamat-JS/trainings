  <?php
   $name = "Azamat";
   $food = "pizza";
   $email = "azamat@gmail.com";
   $employed = true;
   $online = false;
   $for_sale = false;
   $quantity = 3;
   $price = 12000;

   $total = null;
   
   
   echo "salom {$name}<br>";
   echo"You like {$food}<br>";
   echo"Your email {$email} <br>";
   echo"you have ordered {$quantity} x {$food}s<br>";
   $total = $quantity * $price;
   echo"your total is: \${$total}<br><br>";

     $x = 10;
     $y = 2;

     $z = null;
     $z = $x - $y;

     echo $z;
     echo"<br>";

     $all = 2 + 8 / 2;
     echo $all;
    
   ?>
