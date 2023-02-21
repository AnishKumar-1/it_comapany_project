document.getElementById("subbutton").addEventListener("click", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailmessage = document.getElementById('emailmessage');
  let passwordmessage = document.getElementById('passwordmessage');


  if (email === "" && password === "") {
    emailmessage.textContent = "Enter email";
    passwordmessage.textContent = "Enter password";
  } else if (email === "") {
    emailmessage.textContent = "Enter email";
  } else if (password === "") {
    passwordmessage.textContent = "Enter password";
  }
  else {
    fetch('http://localhost:80/itCompanyBackend/backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`
    })
      .then(response => response.json())
      .then(data => {

        if (data.email) {
          alert(data.message);
          sessionStorage.setItem('email', data.email);
          window.location.href="index.html";
          emailmessage.textContent = "";
          passwordmessage.textContent = "";


        }
        else {
          alert(data.message);
          emailmessage.textContent = "";
          passwordmessage.textContent = "";
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});