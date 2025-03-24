<?php 

$mysqli = require __DIR__ . "/database.php";

$sql =sprintf("SELECT * FROM user 
                WHERE email = '%s'", // %s is a placeholder for a string
                $mysqli->real_escape_string($_GET["email"])); // $_GET["email"] is the email that the user entered in the form

$result = $mysqli->query($sql); // query the database

$is_available = $result->num_rows === 0; // if the number of rows is 0, then the email is available

header("Content-Type: application/json"); // tell the browser that we are sending back JSON

echo json_encode(["available" => $is_available]); // send back the result as JSON
            

?>