<?php
 session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="login.php" method="post">
    username: <br>
    <input type="text" name="username">
    password: <br>
    <input type="password" name="password"><br>
    <input type="submit" name="login" value="Log in"><br>
  </form>
</body>
</html>

<?php
  if(isset($_POST['login'])){

    
    if(!empty($_POST["username"]) && !empty($_POST['password'])){
      
      $_SESSION['usename'] = $_POST["username"];
      $_SESSION['password'] = $_POST["password"];

      header("Location: home.php");
    }else{
      echo 'Missing username/password <br>';
    }
  }
?>