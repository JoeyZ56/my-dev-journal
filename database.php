<?php
//connection details for database
$host = 'localhost';
$dbname = 'test_login_db'; //change this to your database name
$username = 'root'; 
$password = ''; //by default xampp has no password, so leave this blank

//connect to database
//if you use this method, they must be in this order
//$mysqli = new mysqli($host, $username, $password, $dbname); //must be in this order

//if you use this method, they can be in any order
$mysqli = new mysqli(hostname:$host, 
                        username:$username, 
                        password: $password, 
                        database: $dbname);

//check for errors
if ($mysqli->connect_errno) {
    die("connection error: " . $mysqli->connect_errno);
}

return $mysqli;