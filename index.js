var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6 + 1);
if (randomnumber1 === 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if (randomnumber1 === 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if (randomnumber1 === 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if (randomnumber1 === 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if (randomnumber1 === 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}
var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2 * 6 + 1);
if (randomnumber2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/1dice1.png");
} else if (randomnumber2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/2dice2.png");
} else if (randomnumber2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/3dice3.png");
} else if (randomnumber2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/4dice4.png");
} else if (randomnumber2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/5dice5.png");
} else {
  document.querySelector("img.img2").setAttribute("src", "images/6dice6.png");
}

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "player one wins";
  document.querySelector("i.trp2").style.visibility = "hidden";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "player two wins";
  document.querySelector("i.trp1").style.visibility = "hidden";
} else {
  document.querySelector("h1").innerHTML = "draw";
  document.querySelector("i.trp1").style.visibility = "hidden";
  document.querySelector("i.trp2").style.visibility = "hidden";
}
