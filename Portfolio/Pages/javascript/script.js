"use strict";

const nom = document.getElementById("name");
const nom2 = /^[a-zA-Z]*$/;
nom.addEventListener("input", champname);

function champname() {
    if (nom = nom2) {
        nom.style.backgroundColor = "white";
    }
}