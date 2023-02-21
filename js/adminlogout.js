 let form = document.querySelector('form');
 let username=document.getElementById('username');
 let password=document.getElementById('password');
 let subbutton =document.getElementById('subbutton');
 let logout=document.getElementById('adminlogout');
 logout.addEventListener('click',function(){
     if(confirm("Are You Sure"))
     {
         sessionStorage.removeItem('username');
        setTimeout(() => {
             window.location.href="index.html";
         },400);
    }
})