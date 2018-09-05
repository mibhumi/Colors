<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mysql_host = "localhost";
    $mysql_username = "root";
    $mysql_password = "";
    $mysql_database = "color";

    $u_name = filter_var($_POST["instacolorclean"], FILTER_SANITIZE_STRING);
    $instaid = filter_var($_POST["instaid"], FILTER_SANITIZE_STRING); 
    $mysqli = new mysqli($mysql_host, $mysql_username, $mysql_password, $mysql_database);
    
    if ($mysqli->connect_error) {
        die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }   
    
    $statement = $mysqli->prepare("INSERT INTO liked (liked,instaid) VALUES(?,?)"); //
    $statement->bind_param('ss', $u_name , $instaid);
    
    if($statement->execute()){
        header('Location: index.php');

    }else{
        header('Location: index.php');
    }
}
?>