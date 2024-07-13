const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Definizioni delle variabili
let itemsContent = ""; // Definizione della variabile che contiene le immagini
let activeElement = 0; // Definizione della variabile che contiene l'elemento attivo

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Ciclo l'array e concateno ad itemsContent l'HTML delle immagini realizzato prima in maniera statica
images.forEach((elem) => {
  itemsContent += `
  <div class="image position-relative h-100 d-none">
      <img src="${elem.image}" class="main-image" alt="${elem.title}">
      <div class="txt-image">
           <h3>${elem.title}</h3>
           <p>${elem.text}</p>
      </div>
  </div>`;
});

// Vado a recuperare l'elemento del DOM che deve contenere le immagini
document.querySelector("#my-carousel-container .images").innerHTML =
  itemsContent;

// Recupero il primo elemento con la classe image che ha anche la classe d-none per toglierle quest'ultima
let allImages = document.querySelectorAll(".image"); // Recupero tutti gli elementi che hanno la classe .image
allImages[activeElement].classList.remove("d-none"); // Al primo tolgo la classe d-none

// Definisco il comportamento del click sulla freccia destra
next.addEventListener("click", function () {
  allImages[activeElement].classList.add("d-none"); // Aggiungo all'elemento attuale la classe d-none

  if (activeElement === allImages.length - 1) {
    activeElement = 0;
  } else {
    activeElement++; // Incremento l'elemento attivo
  }

  allImages[activeElement].classList.remove("d-none"); // Tolgo la classe d-none
});

// Definisco il comportamento del click sulla freccia sinistra
prev.addEventListener("click", function () {
  allImages[activeElement].classList.add("d-none"); // Aggiungo all'elemento attuale la classe d-none

  if (activeElement === 0) {
    activeElement = allImages.length - 1;
  } else {
    activeElement--; // Decremento l'elemento attivo
  }

  allImages[activeElement].classList.remove("d-none"); // Tolgo la classe d-none
});
