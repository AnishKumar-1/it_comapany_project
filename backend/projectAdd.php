<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Content-Type');
$server="localhost";
$username="root";
$password="";
$database="itcompanydata";

$conn=mysqli_connect($server,$username,$password,$database);
if(!$conn)
{
    echo "connection failed". mysqli_connect_error();
}
else {
    $projectTitle=$_POST['projectTitle'];
    $project=$_POST['project'];
    $file=$_FILES['file'];
    if(!empty($projectTitle && $project && $file))
    {
        $file_name=$_FILES['file']['name'];
        $file_tmp=$_FILES['file']['tmp_name'];
        $destination=__DIR__.'/../uploads/'.$file_name;
        move_uploaded_file($file_tmp,$destination);
        mysqli_query($conn, "ALTER TABLE projects AUTO_INCREMENT = 1");
        $sql="INSERT INTO projects(projectTitle,project,projectImage) VALUES('$projectTitle','$project','$file_name')";

        if(mysqli_query($conn,$sql))
        {
            $data=array("message" => "data inserted successfully");
            echo json_encode($data);
        }
        else{
            $data=array("message" => "sorry");
            echo json_encode($data);
        }
    }
}
?>