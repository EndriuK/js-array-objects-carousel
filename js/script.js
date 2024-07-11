const images = [
  {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// 1. recupero elemento dal DOM
const items = document.querySelector(".items");
const thumbs = document.querySelector(".thumbs");

// creo due variabili per le due immagini attive nel dom
let itemsContent = "";
let thumbsContent = "";

// ciclo le immagini per creare i singoli elementi
images.forEach((image) => {
  itemsContent += `<div class="item">
                      <img src="${image.image}" alt="${image.title}">
                      <div class="text">
                        <h2>${image.title}</h2>
                        <p>${image.text}</p>
                      </div>
                    </div>`;
  thumbsContent += `<div class="thumb">
                      <img src="${image.image}" alt="${image.title}">
                    </div>`;
});

// appendere con innerHTML il contenuto della variabile itemsContent al contenitore items
items.innerHTML = itemsContent;

// appendere con innerHTML il contenuto della variabile thumbsContent al contenitore thumbs
thumbs.innerHTML = thumbsContent;

// Seleziona il primo elemento come attivo
document.querySelector(".item").classList.add("active");
document.querySelector(".thumb").classList.add("active");
