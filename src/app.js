/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { doc } from "prettier";

window.onload = function() {
  // Write your code here
  let numbers = [
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
  let number = numbers[Math.floor(Math.random() * (13 - 0) + 0)];

  var suits = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];

  let suit = suits[Math.floor(Math.random() * (4 - 0) + 0)];

  document.querySelectorAll(".suit").forEach((elem, index) => {
    elem.innerHTML = suit.s;
    elem.style.color = suit.color;
  });
  document.querySelector(".number").innerHTML = number;
  document.querySelector(".number").style.color = suit.color;
};
