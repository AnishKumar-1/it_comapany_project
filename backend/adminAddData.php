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
    $projectname=$_POST['projectname'];
    $projectdes=$_POST['projectdes'];
    $file=$_FILES['file'];
    if(!empty($projectname && $projectdes && $file))
    {
        $file_name=$_FILES['file']['name'];
        $tmp_name=$_FILES['file']['tmp_name'];
        $file_destination="../uploads/".$file_name;
        move_uploaded_file($tmp_name,$file_destination);
        mysqli_query($conn, "ALTER TABLE services AUTO_INCREMENT = 1");
        $sql="INSERT INTO services(projectName,projectDes,projectImage) VALUES('$projectname','$projectdes','$file_name')";
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