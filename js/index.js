let topcontainer = document.getElementById('top-container');
// services  api..................
fetch('http://localhost:80/itCompanyBackend/backend/getservice.php',).then(response => {
    response.json().then(result => {
        for (let i = 0; i < result.length; i++) {

            let subdiv = document.createElement('div');
            subdiv.classList.add('col-lg-4', 'col-md-6', 'wow', 'zoomIn');
            subdiv.setAttribute('data-wow-delay', '0.3s');
            

            let card = document.createElement('div');
            card.classList.add('card');
            // card.style.width = "18rem";
            card.style.width = "22rem";
            // card.style.height="25rem";


            let img = document.createElement('img');
            img.src = result[i].projectImage;
            img.classList.add('card-img-top');
            img.style.width = "100%";
            // img.style.height = "170px";
            img.style.aspectRatio='2/1';
            img.style.objectFit="cover";

            let cardbody = document.createElement('div');
            cardbody.classList.add('card-body');
            let h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.innerText =result[i].projectName;
            let p = document.createElement('p');
            p.classList.add('card-text');
            p.innerText =result[i].projectDes;
            let a = document.createElement('a');
            a.href = "contact.html";
            a.classList.add('btn', 'btn-primary');
            a.innerText = "contact now";

            cardbody.appendChild(h5);
            cardbody.appendChild(p);
            cardbody.appendChild(a);

            card.appendChild(img);
            card.appendChild(cardbody);

            subdiv.appendChild(card);

            topcontainer.appendChild(subdiv);

        }
    }).catch(error => {
        console.log(error);
    })
})




// project api..............

let project_top=document.getElementById('project-top');

fetch('http://localhost:80/itCompanyBackend/backend/projectget.php').then(res=>{
    res.json().then(result=>{
        for(let i=0;i<result.length;i++)
        {
            const div = document.createElement("div");
                div.className = "col-lg-4 col-sm-6 wow slideInUp";
                div.setAttribute("data-wow-delay", "0.3s");
                
                // create the card
                const card = document.createElement("div");
                card.className = "card";
                card.style.width = "18rem";
                card.style.height="fit-content";
                div.appendChild(card);
                
                // create the card image
                const img = document.createElement("img");
                img.className = "card-img-top";
                img.src = result[i].projectImage;
                img.alt = "Card image cap";
                card.appendChild(img);
                img.style.width='100%';
                img.style.aspectRatio="2/1";
                img.style.objectFit="cover";
                
                // create the card body
                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);
                
                // create the card title
                const title = document.createElement("h5");
                title.className = "card-title";
                title.textContent = result[i].projectTitle;
                cardBody.appendChild(title);
                
                // create the input group
                const inputGroup = document.createElement("div");
                inputGroup.className = "input-group mb-3";
                cardBody.appendChild(inputGroup);
                
                // create project Name element\
                const p=document.createElement('p');
                p.innerText=result[i].Project;
                cardBody.appendChild(p);
                
                // create the "Contact Now" button
                const btn = document.createElement("a");
                btn.href = "contact.html";
                btn.className = "btn btn-primary";
                btn.textContent = "Contact Now";
                cardBody.appendChild(btn);
                
                // add the div to the document
                project_top.appendChild(div);
        }
    }).catch(error=>{
        console.log(error);
    })
})



// for(let i=0;i<4;i++){
//     const div = document.createElement("div");
//     div.className = "col-lg-4 wow slideInUp";
//     div.setAttribute("data-wow-delay", "0.3s");
    
//     // create the card
//     const card = document.createElement("div");
//     card.className = "card";
//     card.style.width = "18rem";
//     div.appendChild(card);
    
//     // create the card image
//     const img = document.createElement("img");
//     img.className = "card-img-top";
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZzKtIXMB_raTngnhypcsHTlSINScaRLaRyGRunFTRA&s";
//     img.alt = "Card image cap";
//     card.appendChild(img);
//     img.style.width='100%';
//     img.style.aspectRatio="1/1";
//     img.style.objectFit="cover";
    
//     // create the card body
//     const cardBody = document.createElement("div");
//     cardBody.className = "card-body";
//     card.appendChild(cardBody);
    
//     // create the card title
//     const title = document.createElement("h5");
//     title.className = "card-title";
//     title.textContent = result.projectTitle;
//     cardBody.appendChild(title);
    
//     // create the input group
//     const inputGroup = document.createElement("div");
//     inputGroup.className = "input-group mb-3";
//     cardBody.appendChild(inputGroup);
    
//     // create project Name element\
//     const p=document.createElement('p');
//     p.innerText="project Name";
//     cardBody.appendChild(p);
    
//     // create the "Contact Now" button
//     const btn = document.createElement("a");
//     btn.href = "#";
//     btn.className = "btn btn-primary";
//     btn.textContent = "Contact Now";
//     cardBody.appendChild(btn);
    
//     // add the div to the document
//     project_top.appendChild(div);
//     }