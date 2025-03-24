"use strict";

const nom = document.getElementById("name");
const nom2 = /^[a-zA-Z]*$/;
nom.addEventListener("change", champname);

function champname() {
    if (nom = nom2) {
        nom.style.backgroundColor = "black";
    }
    else{
        nom.style.backgroundColor = "red"
    }
}
console.log(nom);

const phone = document.getElementById("phone");
const phone2 =  /^[0-9]*$/;
phone.addEventListener("change", champphone);

function champphone() {
    if (phone = phone2) {
        nom.style.backgroundColor = "black";
    }
    else{
        nom.style.backgroundColor = "red"
    }
}

console.log(phone);
