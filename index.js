const burger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sideBar");
const stockElements = document.querySelector(".stockElements");
const backBtn = document.querySelector(".material-symbols--arrow-back");
const createContact = document.querySelectorAll(".navItem");
const form = document.querySelector("form");
const allContact = document.querySelector(".allContact");
const firstName = document.getElementById("firstName");
const lasttName = document.getElementById("lastName");
const entreprise = document.getElementById("entreprise");
const fonction = document.getElementById("fonction");
const codePays = document.getElementById("codePays");
const numTelephone = document.getElementById("telephone")
const email = document.getElementById("email");
const btnEmail = document.querySelector(".btnEmail"); 
const submit = document.querySelector("#submit");
const inputMail = document.querySelector(".inputMail");
const table = document.querySelector(".table");
const creationLibelle = document.querySelector(".creationLibellé");
const menuMobile = document.querySelector(".menuMobile");
const hamburgerMobile = document.querySelector(".nav__hamburgerMobile");
const buttonCreateMobile = document.querySelector(".createContactMobile");
const addLibelle = document.querySelector(".addLibellé");
const submitLibelle = document.querySelector(".submitLibellé");
const closedWindow = document.querySelector(".closedWindow");
const buttonMobile = document.querySelector(".buttonMobile");
const barreRecherche = document.querySelector(".barre__recherche");
const counter = document.querySelector(".counter");
let count = 0;

const addClass = (element, className) => {
    element.classList.add(className); 
}
const removeClass = (element, className) => {
    element.classList.add(className); 
}

burger.addEventListener("click", () =>{
//    burger.classList.toogle("display.none")
    if (sideBar.classList.contains("display.none")){
        removeClass(sideBar, "display.none")
    }else{
        addClass(sideBar, "display.none")
    }
});

// function burgerMenu(){
//     if(sideBar.style.display === 'none'){
//         sideBar.style.display = 'flex';
//     }else{
//         sideBar.style.display = 'none';
//     }
// }
// burger.addEventListener("click", burgerMenu);

    function burgerMenuMobile(){
        if(menuMobile.style.display === 'none'){
            menuMobile.style.display = 'flex';
            stockElements.style.display = 'none';
        }else{
            menuMobile.style.display = 'none';
            stockElements.style.display = 'flex';
        }
    }

    hamburgerMobile.addEventListener("click", burgerMenuMobile);

  

    function contacts(){
            if(form.style.display === 'none'){
                form.style.display = 'flex';
                allContact.style.display = 'none';
                buttonCreateMobile.style.display = 'none';
        }else{
            form.style.display = 'none';
        }
    }
         for (let i = 0; i < createContact.length; i++) {
            createContact[i];
         }

    createContact[0].addEventListener("click", contacts);


    backBtn.addEventListener('click', function() {
        form.style.display = 'none';
        allContact.style.display = 'flex';    
   })

   function everyContacts(){
       if(allContact.style.display === 'none'){
           allContact.style.display = 'flex';
           form.style.display = 'none';
   }else{
       allContact.style.display = 'none';
   }
    }

   createContact[1].addEventListener("click", everyContacts);

   form.addEventListener("submit", function(event) {
    event.preventDefault(); 
   
})
submit.addEventListener("click", function() {
    form.style.display = 'none';
    allContact.style.display = 'flex';
})

function submitLibelles(){
    const libelleName = creationLibelle.querySelector('input').value;
    
    if (libelleName) {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.classList.add("el--arrow-right")
        span.classList.add('arrow')
        div.append(span, libelleName)
        addLibelle.append(div);
    }else{
        alert("Ajouter un libellé");
    }
}

function closedWin(){
    if (closedWindow){
        allContact.style.display = "flex";
        creationLibelle.style.display = 'none';
    }else{
        return;
    }
}


function addContact() {
    const trId = crypto.randomUUID();

    const modifier = document.createElement("button");
    modifier.textContent = "Modifier";

    const supprimer = document.createElement("button");
    supprimer.textContent = "Supprimer";

    const divButton = document.createElement("div");
    divButton.classList.add("divButton");
    console.log(divButton);
    divButton.append(modifier, supprimer);
    
    modifier.classList.add("buttonTable");
    supprimer.classList.add("buttonTable");
    
    counter.innerHTML = `(${++count})`;
    let tr = document.createElement('tr');
    tr.setAttribute('id', trId);
    let contact = {
        Titre : firstName.value
        + " "+ lasttName.value,
        Email : email.value || inputMail.querySelector('input').value, 
        Numéro : codePays.value + numTelephone.value,
        Fonction : fonction.value,
        libelles : " ",
        button1 : modifier,
        button2: supprimer,
    }
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    td1.textContent = contact.Titre;
    td2.textContent = contact.Email;
    td3.textContent = contact.Numéro;
    td4.textContent = contact.Fonction;
    td5.append(contact.button1, contact.button2);
    if(numTelephone === contact.Numéro){
        alert("Ce contact existe déjà");
    }else{
    tr.append(td1, td2, td3, td4, td5);
    table.append(tr);
    }
    firstName.value = " ";
    lasttName.value = " ";
    codePays.value = " ";
    numTelephone.value = " ";
    email.value = " ";
    // inputMail.querySelector('input').value = " ";
    fonction.value = " ";

    supprimer.addEventListener("click", function() {
    const confirmDelete = confirm("Voulez-vous supprimer ce numéro?");
     const ligneNum = document.getElementById(trId);
     if(confirmDelete){
         ligneNum.remove();
         counter.innerHTML = `(${--count})`;
     }
     })
    modifier.addEventListener("cllick", function() {
        const ligneNum = document.getElementById(trId);
       
        window.location.href = "form";
   
    });
}

submit.addEventListener("click", addContact);
 
function createInput() {
    const input = document.createElement('input');

    input.setAttribute('name','mail');
    input.setAttribute('type','email');
    input.style.height = "2rem";
    input.style.width = "20rem";
    input.style.border ="solid 1px black";
 
    inputMail.append(input);
}
btnEmail.addEventListener("click", createInput);

function createLibelle() {
    if(creationLibelle.style.display === 'none'){
        creationLibelle.style.display = 'flex';
        form.style.display = 'none';
    }else{
        creationLibelle.style.display = 'none';

}
}

createContact[3].addEventListener("click", createLibelle);

submitLibelle.addEventListener("click", submitLibelles);

closedWindow.addEventListener("click", closedWin);

document.querySelector(".libelle").addEventListener("click", createLibelle);

buttonCreateMobile.addEventListener("click", contacts);

function searchBar(){
    if (barreRecherche.style.display === 'none'){
        barreRecherche.style.display = 'flex';
    }else{
        barreRecherche.style.display = 'none';
    }
}
buttonMobile.addEventListener("click", searchBar);
