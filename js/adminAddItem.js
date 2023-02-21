const myform = document.getElementById('my-form');
myform.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectname = document.getElementById('projectname').value;
  const projectdes = document.getElementById('projectdes').value;
  const file = document.getElementById('file').files[0];

  if(projectdes==="" && projectname=="" && file==="" )
  {
    alert("please insert data");
  }
  else{
 
  const formData = new FormData();
  formData.append('projectname', projectname);
  formData.append('projectdes', projectdes);
  formData.append('file', file);
  
  fetch('http://localhost:80/itCompanyBackend/backend/adminAddData.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    alert(data.message);
    setTimeout(()=>{
      window.location.href="adminpage.html";
  },400)

  })
  .catch(error => {
    console.error(error);
  });
}
});
