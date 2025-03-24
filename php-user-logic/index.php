<?php 

session_start(); //starts a session

if (isset($_SESSION["user_id"])) { //if the user is logged in, it will display the user's information

    $mysqli = require __DIR__ . "/database.php"; //gets the database connection

    $sql = "SELECT * FROM user WHERE id = " . $_SESSION["user_id"]; //selects the user's information from the database

    $result = $mysqli->query($sql); //executes the sql

    $user = $result->fetch_assoc(); //gets the data from the result method "fetch_assoc()"
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
    />
    <title>Home</title>
  </head>
  <body>
<h1>Home</h1>

<?php if (isset($user)):?>

    <p>Hello <?= htmlspecialchars($user["name"]) ?></p>

    <p><a href="logout.php">Logout</a></p>

    <?php else: ?>

    <p><a href="login.php">Login</a> or <a href="signup.html">Signup</a></p>

    <?php endif; ?>
  </body>
</html>