
//admin main page..........................



fetch('http://localhost:80/itCompanyBackend/backend/getservice.php').then(response=>{
    response.json().then(data=>{
        let tbody=document.getElementById('tbody');
        for(let i=0;i<data.length;i++)
        {
            
            let trtag=document.createElement('tr');
            let tdid=document.createElement('td');
            tdid.textContent=data[i].id;
            trtag.appendChild(tdid);

            let projectName=document.createElement('td');
            projectName.textContent=data[i].projectName;
            trtag.appendChild(projectName);

            let projectDes=document.createElement('td');
            projectDes.textContent=data[i].projectDes;
            trtag.appendChild(projectDes);

            
            let projectImagetd=document.createElement('td');
    


            let img = document.createElement('img');
            img.src =data[i].projectImage;
    
            img.classList.add('projectImage');
            projectImagetd.appendChild(img);
            trtag.appendChild(projectImagetd);


            let buttontd=document.createElement('td');
            let editbutton=document.createElement('button');
            editbutton.textContent="edit";
            editbutton.classList.add('btn','btn-success');
            buttontd.appendChild(editbutton);
            trtag.appendChild(buttontd);
            editbutton.addEventListener('click',()=>{
                let url=`updateservice.html?id=${data[i].id}`;
                window.location.href=url;
            })
            let deletetd=document.createElement('td');
            let deletebutton=document.createElement('button');
            deletebutton.textContent="delete";
            deletebutton.classList.add('btn','btn-danger');
            deletetd.appendChild(deletebutton);
            trtag.appendChild(deletetd);
            deletebutton.addEventListener('click', () => {
                let id = data[i].id;
                if (confirm("Are you sure you want to delete this item?")) {  
               
                  fetch(`http://localhost:80/itCompanyBackend/backend/delete.php?id=${id}`, {
                    method: "POST"
                  })
                  .then(response => {
                   response.json().then(message=>{
                    window.location.reload();
                  
                   }).catch(error=>{
                    console.log("error",error)
                   })
                  })
                }
              });
            tbody.appendChild(trtag);
        }
    }).catch(error=>{
        console.log(error)
    })
})