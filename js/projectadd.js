let projectadd = document.getElementById('projectadd');
projectadd.addEventListener('click', function (e) {
    e.preventDefault();
    let projectTitle = document.getElementById('projectTitle').value;
    let selectedOption = document.getElementById('projectSelect');
    let project = selectedOption.options[selectedOption.selectedIndex].innerText;
    let file = document.getElementById('file').files[0];
    if (projectTitle === "" && project == 'Choose Project' && file == null) {
        alert("enter data");
    }
    else {
        const formdata = new FormData();
        formdata.append('projectTitle', projectTitle);
        formdata.append('project', project);
        formdata.append('file', file);
        fetch('http://localhost:80/itCompanyBackend/backend/projectAdd.php', {
            method: 'POST',
            body: formdata
        }).then(res => {
            res.json().then(result => {
                if (result.message) {
                    alert(result.message);
                }
            }).catch(error => {
                console.log(error);
            })
        })
    }
})




//    let projectSelect = document.getElementById('projectSelect').value;
//     const selectedOption = projectSelect.options[projectSelect.selectedIndex].innerText;