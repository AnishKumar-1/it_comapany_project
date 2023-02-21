let urlparams=new URLSearchParams(window.location.search);
let id=urlparams.get('id');
let projectname=document.getElementById('projectname');
let projectdes=document.getElementById('projectdes');
fetch(`http://localhost:80/itCompanyBackend/backend/getservicebyid.php?id=${id}`,{
    method:"POST"
}).then(res=>{
    res.json().then(result=>{
        projectname.value=result.projectName;
        projectdes.value=result.projectDes;
    }).catch(error=>{
        console.log(error);
})
})

// update api for service table
let adminAddItem=document.getElementById('adminAddItem');
adminAddItem.addEventListener('click',(event)=>{
    event.preventDefault();
  const projectname = document.getElementById('projectname').value;
  const projectdes = document.getElementById('projectdes').value;
  const file = document.getElementById('file').files[0];

    const formData = new FormData();
    formData.append('projectname', projectname);
    formData.append('projectdes', projectdes);
    formData.append('file', file);

    fetch(`http://localhost:80/itCompanyBackend/backend/update.php?id=${id}`, {
    method: 'POST',
    body: formData
}).then(res => {
    res.json().then(data => {
        alert(data.message);
        setTimeout(()=>{
            window.location.href="adminpage.html";
        },400)
    }).catch(error => {
        console.log(error);
    });
})
  


})