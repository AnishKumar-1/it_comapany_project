document.getElementById("subbutton").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let mobile_number = document.getElementById("mobile_number").value;
    let password = document.getElementById("password").value;
    if((email && mobile_number && password)=="")
    { 
     alert("enter data");
    }
    else
    {
    fetch('http://localhost:80/itCompanyBackend/backend/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&mobile_number=${mobile_number}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
      alert(data)
        window.location.href="login.html";
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
  });
