<?php
//   function can_do($name, $skill){
//     echo"{$name} can {$skill}<br>";
//     echo"You can read<br><br>";
//   }

//   can_do("patric", "write");
//   can_do("john", "run")

    // function is_even($num){
    //    return $num % 2;
    // }

    //   echo is_even(10);

    function hypotenuse(float $a, float $b){
        $c = sqrt($a ** 2 + $b ** 2);
        return $c;
    }

    echo hypotenuse("6", 9);
?>