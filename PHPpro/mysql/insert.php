<?php
  include("database.php");

  $username = "Feruz";
  $password = "fer123";
  $hash = password_hash($password, PASSWORD_BCRYPT);

  $sql = "INSERT INTO users (name, passwords)
  VALUES ('$username', '$hash')";

  try{
      mysqli_query($conn, $sql);
     echo "User is now registered";
  }catch(mysqli_sql_exception){
    echo "Could not register user";
  }
  mysqli_close($conn);
?>

