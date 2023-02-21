<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
$server = "localhost";
$username = "root";
$password = "";
$database = "itcompanydata";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    echo "connection failed: " . mysqli_connect_error();
} else {
    $id = $_GET['id'];
    $sql = "SELECT * FROM projects WHERE id=$id";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0) {
        $data= mysqli_fetch_assoc($query);
        $data['projectImage']='../uploads/'.$data['projectImage'];
        echo json_encode($data);

    } else {
        echo "data not found";
    }
}
?>