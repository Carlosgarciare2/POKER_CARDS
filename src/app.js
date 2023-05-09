/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let palo = ["♦", "♥", "♠", "♣"];

  const createCard = () => {
    let numberRandom = num[Math.floor(Math.random() * num.length)];
    let paloRandom = palo[Math.floor(Math.random() * palo.length)];

    let paloSuperior = document.querySelector("#paloUp");
    paloSuperior.innerHTML = paloRandom;

    let paloInferior = document.querySelector("#paloDown");
    paloInferior.innerHTML = paloRandom;

    document.querySelector("#number").innerHTML = numberRandom;

    if (paloRandom === "♥" || paloRandom === "♦") {
      paloSuperior.classList.add("text-danger");
      paloInferior.classList.add("text-danger");
    } else {
      paloSuperior.classList.remove("text-danger");
      paloInferior.classList.remove("text-danger");
    }
  };
  createCard();
};
