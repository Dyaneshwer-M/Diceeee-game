// dice 1 image
var diceno1= (Math.round(Math.floor(Math.random()*6 + 1)));
var dicePics1 = "images/dice" + diceno1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src" , dicePics1);

// dice 2 image
var diceno2= (Math.round(Math.floor(Math.random()*6 + 1)));
var dicePics2 = "images/dice" + diceno2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src" , dicePics2);

// winner
if (diceno1 > diceno2){
  document.querySelector("h1").innerText = "Player 1 wins 🚩 !"
}
else if (diceno1 < diceno2){
  document.querySelector("h1").innerText = "Player 2 wins 🚩 !"
}
else if (diceno1 == diceno2){
  document.querySelector("h1").innerText = "Draw"
}
