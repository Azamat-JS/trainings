<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="radioBtn.php" method="post">
      <input type="radio" name="credit-card" value="Visa">
      Visa<br>

      <input type="radio" name="credit-card"  value="MasterCard">
      MasterCard<br>

      <input type="radio" name="credit-card"  value="AmericanExpress">
      AmericanCard<br>

      <input type="submit" name="confirm" value="confirm">
    </form>
</body>
</html>

<?php

    $credit_card = null;
    if(isset($_POST["credit-card"])){
        $credit_card = $_POST["credit-card"];
    }
    // if($credit_card == "Visa"){
    //     echo"You selected Visa";
    // }elseif($credit_card == "MasterCard"){
    //     echo"You selected MasterCard";
    // }elseif($credit_card == "AmericanExpress"){
    //     echo"You selected AmericanExpress";
    // }    
    // else{
    //     echo"Please make a selection";
    // }

    switch($credit_card){
        case "Visa":
            echo"selected Visa";
            break;
        case "AmericanExpress":
            echo"selected AmericanExpress";
            break;
        case "MasterCard":
            echo"selected MasterCard";
            break;
        default:
            echo"Please make a selection";
    }
?>