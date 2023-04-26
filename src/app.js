/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let palo = ["♦", "♥", "♠", "♣"];

  let numberRandom = num[Math.floor(Math.random() * num.length)];
  let paloRandom = palo[Math.floor(Math.random() * palo.length)];

  document.querySelector("#paloUp").innerHTML = paloRandom;
  document.querySelector("#paloDown").innerHTML = paloRandom;
  document.querySelector("#number").innerHTML = numberRandom;
};
