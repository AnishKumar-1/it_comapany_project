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
    // register api...
    $email=$_POST['email'];
    $mobile_number=$_POST['mobile_number'];
    $password=$_POST['password'];
    if(!empty($email && $mobile_number && $password))
    {
            $sql="SELECT * FROM register WHERE email='$email'";
            $result=mysqli_query($conn,$sql);
            if(mysqli_num_rows($result)>0)
            {
                echo json_encode("user already registerd");
            }
            else
            {
               $sql2="INSERT INTO register(email,mobileno,password) VALUES('$email','$mobile_number','$password')";
               if(mysqli_query($conn,$sql2))
               {
                echo json_encode("registration successfull");
               }
            }
        }
      else {
         echo json_encode("error");
     
    }
}
mysqli_close($conn);
?>