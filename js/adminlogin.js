


// admin login 
subbutton.addEventListener('click',(event)=>{
    event.preventDefault();
 
    if(username.value==="" && password.value=="")
    {
        alert("enter data")
    }
    else if(username.value==="")
    {
        alert("enter username");
    }
    else if(password.value==="")
    {
        alert("enter password");
    }
    else
    { 
        fetch('http://localhost:80/itCompanyBackend/backend/admin_login.php',{
            method:"POST",
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`username=${username.value}&password=${password.value}`
        }).then(response=>{
            response.json().then(data=>{
                if(data.username)
                {
                   sessionStorage.setItem('username',data.username);
                   alert("login success")
                   setTimeout(()=>{
                    window.location.href="adminpage.html";
                   },400)
                }
                else{
                    alert(data.message);
                }
            }).catch(error=>{
                console.log(error);
            })
        })
    }
})

// logout functionality
