// color animation

var kinder = document.querySelector(".kinder");
var bueno = document.querySelector(".bueno");
var text = document.querySelector(".text");
var milk = document.getElementsByClassName("milk");


setInterval(() =>{
  kinder.style.color = "rgb(216, 32, 32)";
  bueno.style.color = "rgb(153, 59, 30)";
}, 2000);

setInterval(() =>{
  kinder.style.color = "rgb(17, 17, 17)";
  bueno.style.color = "rgb(17, 17, 17)";
}, 4000);

setInterval(() =>{
  milk.style.color = "rgb(216, 32, 32)";
}, 2000);

setInterval(() =>{
  milk.style.color = "blue";
}, 4000);

setInterval(() =>{
  milk.style.color = "rgb(17, 17, 17)";
}, 4000);




