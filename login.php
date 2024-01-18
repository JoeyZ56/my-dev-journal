<?php 
$is_invalid = false; 

//checks if request matches data from the records
if ($_SERVER["REQUEST_METHOD"] === "POST") { 

    $mysqli = require __DIR__ . "/database.php"; //gets the database connection

    //selects record based on email address 
    $sql = sprintf("SELECT * FROM user
            WHERE email = '%s'", //any column used in a where clause should have an index, '%s' is a placeholder for a string
            $mysqli->real_escape_string($_POST["email"])); //$_POST["email"] is the email address entered by the user, real_escape_string escapes special characters in a string for use in an SQL statement

    //executes the sql
    $result = $mysqli->query($sql); //query() performs a query against the database

    //to get the data from the result method "fetch_assoc()"
    $user = $result->fetch_assoc(); //fetch_assoc() fetches a result row as an associative array

    if ($user) {
        
        if (password_verify($_POST["password"], $user["password_hash"])) {

            session_start();

            session_regenerate_id(); //regenerates the session id (prevents session fixation attacks)

            $_SESSION["user_id"] = $user["id"];

            header("Location: index.php");
            exit;
        }
     }

    $is_invalid = true;

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
    <title>Signup</title>
  </head>
  <body>
<h1>Login</h1>

<?php if ($is_invalid): ?>
    <em>Invalid Login</em>
 <?php endif; ?> <!--if the login is invalid, it will display "Invalid Login" -->
 

<form method="post">
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" 
        value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
    </div>

    <button>Login</button>
</form>

<button><a href="signup.html">Create User</a></button>
  </body>
</html>