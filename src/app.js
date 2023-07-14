/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { doc } from "prettier";

window.onload = function() {
  //write your code here
  //let palos = ["♦", "♥", "♠", "♣"];

  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];

  var palos = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];

  let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];
  //console.log(palo);

  document.querySelectorAll(".palo").forEach((elem, index) => {
    elem.innerHTML = palo.s;
    elem.style.color = palo.color;
  });
  document.querySelector(".numero").innerHTML = numero;
  document.querySelector(".numero").style.color = palo.color;
};
