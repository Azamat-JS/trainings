<?php
include("header.html")
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   This website about programming details with Node.js

   <form action="about.php" method="post">
       <h2>Fill this form to provide your info</h2>
        <label>Name:</label>
        <input type="text" name="name"><br>
        <label>Email:</label>
        <input type="email" name="email"><br>
        <input type="submit" name="confirm" value="confirm">
   </form>
</body>
</html>

<?php
  if(isset($_POST["confirm"]))
    $username = $_POST["name"];
    $email = $_POST["email"];

    if(empty($username)){
        echo"Name is missing";
    }elseif(empty($email)){
        echo"Email is missing";
    }else{
        echo "Your name: {$username} <br> Your email: {$email}";
    }
    
?>

<?php
include("footer.html")
?>