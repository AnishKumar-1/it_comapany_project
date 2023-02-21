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
    $username=$_POST['username'];
    $password=$_POST['password'];
    if(!empty($username && $password))
    {
        $sql="SELECT *FROM admin";
        $query=mysqli_query($conn,$sql);
        while($data=mysqli_fetch_assoc($query))
        {
            if($username==$data['username'])
            {
                if($password==$data['password'])
                {
                    $data = array(
                        "message" => "login success",
                        "username" => $data['username']
                      );
    
                    echo json_encode($data);
                }
                else
                {
                    $data=array(
                        "message"=>"password incorrect"
                    );
                    echo json_encode($data);
                }
            }
            else
            {
                $data=array(
                    "message"=>"username incorrect"
                );
                echo json_encode($data);
            }
        }
    }
}
?>