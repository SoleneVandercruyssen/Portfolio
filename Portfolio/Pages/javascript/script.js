"use strict";

// Fonction pour le menu burger

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// On passe de 0 à 360° à partir de l'axe Y (de gauche à droite)
let rotation = 0;

const photo = document.querySelector(".photo");
photo.addEventListener("click", () => {
    rotation += 360; 
    photo.style.transform = `rotateY(${rotation}deg)`; 
});