var inputElement = document.getElementById("default");
var pick = null;

function update() {
pick = document.getElementById("option").value;
pick1=pick-1;
pick2=pick-2;
pick3=pick-3;
pick4=pick-4;
document.getElementById("card1").textContent = ""+pick+"";
document.getElementById("card2").textContent = ""+pick-1+"";
document.getElementById("card3").textContent = ""+pick-2+"";
document.getElementById("card4").textContent = ""+pick-3+"";
document.getElementById("card5").textContent = ""+pick-4+"";};
