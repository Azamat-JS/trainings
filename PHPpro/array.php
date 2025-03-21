<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <form action="array.php" method="post">
      <label>Enter a country</label>
      <input type="text" name="country">
      <input type="submit">
   </form>
</body>
</html>


<?php
//    $foods = array("apple", "orange", "banana", "coconut");

//    $foods[0] = "pineapple";
// //    array_push($foods, "pear", "kiwi");
//     // array_pop($foods);
//     // array_shift($foods);
//     // array_unshift($foods, "peach", "appricot");
//    $reversed_foods = array_reverse($foods);
//    echo count($foods);

//    foreach($foods as $food){
//     echo $food . "<br>";
//    };

    $capitals = array("USA"=>"Washington D.C.",
                       "Japan"=> "Kyoto",
                       "South Korea"=> "Seoul",
                       "India"=> "New Delhi");
   //    $capitals["USA"] = "Las-Vegas";
   //    $capitals["CHINA"] = "Beijing";
   //   $keyss = array_keys($capitals);
   //   $values = array_values($capitals);
//   $capitals = array_flip($capitals);
//   $capitals = array_reverse($capitals);
//    foreach($capitals as $key => $value){
//       echo "{$key}={$value} <br>";
   // }

   $capital = $capitals[$_POST["country"]];
   echo $capital;
?>