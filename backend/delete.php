<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
$servername = "localhost";
$username = "root";
$password = "";
$database="itcompanydata";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else
{
    $id=$_GET['id'];
    $sql="DELETE FROM services WHERE id=$id";
    if(mysqli_query($conn,$sql)){
       $data=array("message" => "data deleted");
       echo json_encode($data);
    }
    else{
        $data=array("message" => "data not deleted");
        echo json_encode($data);
    }
}
?>