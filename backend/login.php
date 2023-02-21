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
    $email=$_POST['email'];
    $password=$_POST['password'];
    if(!empty($email && $password))
    {
        $sql="SELECT *FROM register WHERE email='$email'";
        $data=mysqli_query($conn,$sql);
        if(mysqli_num_rows($data)>0)
        {
            $result=mysqli_fetch_assoc($data);
            if($result['password']==$password)
            {
                $data = array(
                    "message" => "login success",
                    "email" => $result['email']
                  );

                echo json_encode($data);
            }
            else
            {
                $data = array(
                    "message" => "incorrect password",
                  
                  );

                echo json_encode($data);
            }
        }
        else
        {
            $data = array(
                "message" => "user not found",
              );

            echo json_encode($data);
        }
    }
}
?>