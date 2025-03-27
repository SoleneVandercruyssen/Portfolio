"use strict";

// const nom = document.getElementById("name");
// const nom2 = /^[a-zA-Z]*$/;
// nom.addEventListener("change", champname);

// function champname() {
//     if (nom = nom2) {
//         nom.style.backgroundColor = "black";
//     }
//     else{
//         nom.style.backgroundColor = "red"
//     }
// }
// console.log(nom);

// const phone = document.getElementById("phone");
// const phone2 =  /^[0-9]*$/;
// phone.addEventListener("change", champphone);

// function champphone() {
//     if (phone = phone2) {
//         nom.style.backgroundColor = "black";
//     }
//     else{
//         nom.style.backgroundColor = "red"
//     }
// }

// console.log(phone);


// Portfolio 
const boutons = document.querySelector(".btn");
const bouton1 = document.querySelector("#btn1");
const bouton2 = document.querySelector("#btn2");
const bouton3 = document.querySelector("#btn3");
const bouton4 = document.querySelector("#btn4");
const bouton5 = document.querySelector("#btn5");
const modale = document.querySelector(".modal");
const fermer = document.querySelector(".close");

boutons.addEventListener("click", popup);
fermer.addEventListener("click", fermer);

function popup() {
    console.log("modale");
    
    // modale.style.display = "block";
    // document.body.style.overflow = "hidden";
}

function closed() {
    console.log("fermer");
    // modale.style.display = "none";
    // document.body.style.overflow = "visible";
    
}


boutons.addEventListener("click", function() {
    modale.style.visibility = "visible";
    document.body.style.overflow = "hidden";
});

fermer.addEventListener("click", function() {
    modale.style.visibility = "hidden";
    document.body.style.overflow = "visible";
});