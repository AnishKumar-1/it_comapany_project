
const urlparams = new URLSearchParams(window.location.search);
const id = urlparams.get('id');

fetch(`http://localhost:80/itCompanyBackend/backend/getprojectbyid.php?id=${id}`).then(res => {
    res.json().then(result => {
        document.getElementById('projectTitle').value =result.projectTitle;
        document.getElementById('project').value =result.Project;
    }).catch(error => {
        console.log(error);
    })
})

// update project table by id
const adminAddItem=document.getElementById('adminAddItem');
adminAddItem.addEventListener('click',(event)=>{
    event.preventDefault();
    let projectTitle=document.getElementById('projectTitle').value;
    let project=document.getElementById('project').value;
    let file=document.getElementById('file').files[0];
    const formdata=new FormData();
    formdata.append('projectTitle',projectTitle);
    formdata.append('project',project);
    formdata.append('file',file);
    fetch(`http://localhost:80/itCompanyBackend/backend/projectUpdate.php?id=${id}`,{
        method:"POST",
        body:formdata
    }).then(res=>{
        res.json().then(result=>{
            alert(result.message)
            setTimeout(() => {
                window.location.href="projectTable.html";
            }, 400);
        }).catch(error=>{
            console.log(error);
        })
    })
})