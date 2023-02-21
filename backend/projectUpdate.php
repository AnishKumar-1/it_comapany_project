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
}
else {

$id = $_GET['id'];
$projectTitle = $_POST['projectTitle'];
$project = $_POST['project'];
$file = $_FILES['file'];

if (!empty($file)) {
    $file_name = $_FILES['file']['name'];
    $tmp_name = $_FILES['file']['tmp_name'];
    $file_destination = "../uploads/" . $file_name;
    move_uploaded_file($tmp_name, $file_destination);

    $sql = "UPDATE projects SET projectTitle='$projectTitle', project='$project', projectImage='$file_name' WHERE id=$id";
} else {
    $sql = "UPDATE projects SET projectTitle='$projectTitle', project='$project' WHERE id=$id";
}

if (mysqli_query($conn, $sql)) {
    ob_clean();
    $response = array('message' => 'update successfully');
} else {
    ob_clean();
    $response = array('message' => 'not update');
}
echo json_encode($response);

}

?>




