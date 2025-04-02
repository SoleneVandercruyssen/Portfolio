"use strict";

const knowmore1 = document.querySelector("#btn1")    //En savoir +
const knowmore2 = document.querySelector("#btn2")    //En savoir +
const knowmore3 = document.querySelector("#btn3")    //En savoir +
const knowmore4 = document.querySelector("#btn4")    //En savoir +
const knowmore5 = document.querySelector("#btn5")    //En savoir +
const modale = document.querySelector(".modale")
const fermer = document.getElementById("ferme")     //Bouton Fermer

// Lorsqu'on appuie sur le bouton "En savoir +" la popup s'affiche.
knowmore1.addEventListener("click", ()=>{
    if(knowmore1.checked){
        modale.style.display = "block"
    }
})

// Appuyer sur le bouton "Fermer" cela fermera la popup
fermer.addEventListener("click", ()=>{
    if (fermer.checked) {
        modale.style.display = "none"
    }
})

// modale.addEventListener("popup", popup)


// Fonction pour les données json
function dataJson(params) {
    
}

