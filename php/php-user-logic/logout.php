<?php 
session_start(); //must start session in file to destroy it

session_destroy(); //destroys all data registered to a session

header("Location: index.php");
exit;

?>