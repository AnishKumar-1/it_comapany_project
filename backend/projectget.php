<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
$servername = "localhost";
$username = "root";
$password = "";
$database="itcompanydata";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
$sql = "SELECT * FROM projects";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $row['projectImage'] = "../uploads/" . $row['projectImage'];
        $data[] = $row;
    }
    echo json_encode($data);
    
} 
else {
    echo json_encode("Data not found");
}