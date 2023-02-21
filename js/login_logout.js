let login=document.getElementById('login');
let logout=document.getElementById('logout');
logout.addEventListener('click',()=>{
    if(confirm("Are You Sure"))
    {
    sessionStorage.clear();
    window.location.href="login.html";
    }

})

if(sessionStorage.getItem('email'))
{
    logout.style.display="block";
   login.style.display="none"; 


}
else
{
    login.style.display="block";
    // logout.style.display="none";
}

let adminlogin=document.getElementById('adminlogin');
console.log(adminlogin);
adminlogin.addEventListener('click',()=>{
    let username=sessionStorage.getItem('username');
    if(username)
    {
        window.location.href="adminpage.html";
    }
    else{
        window.location.href="adminlogin.html";
    }
})