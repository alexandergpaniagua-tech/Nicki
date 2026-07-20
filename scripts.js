var inputElement = document.getElementById("default");
var pick = null;
document.getElementById("option").value = pick;
inputElement.addEventListener(MouseEvent.click, function update() {
document.getElementById("card1").innerHTML = pick;
document.getElementById("card2").innerHTML = pick-1;
document.getElementById("card3").innerHTML = pick-2;
document.getElementById("card4").innerHTML = pick-3;
document.getElementById("card5").innerHTML = pick-4; };
