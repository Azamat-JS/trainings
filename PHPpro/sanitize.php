<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="validate.php" method="post">
        username:
        <input type="text" name="username"><br>
        age:
        <input type="text" name="age"><br>
        email:
        <input type="text" name="email"><br>
        <input type="submit" name="login" value="Log in">
    </form>
</body>
</html>

<?php
  if(isset($_POST['login'])){
    $username = filter_input(INPUT_POST, "username", 
                            FILTER_SANITIZE_SPECIAL_CHARS);
    echo "Salom {$username}<br>";

    $age = filter_input(INPUT_POST, "age",
                        FILTER_SANITIZE_NUMBER_INT);
    echo "You are {$age} years old<br>";

    $email = filter_input(INPUT_POST, "email",
                        FILTER_SANITIZE_EMAIL);
    echo "Your email: {$email}";

  }

?>