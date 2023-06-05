var randomNumber1 = (Math.random()*6) + 1; // setting random number
randomNumber1 = Math.floor(randomNumber1); //flooring to get only integer value.
var image1 = "dice" + randomNumber1 + ".png"; // adding concatenation so that we can have scenario like dice2.png
var imagesrc1 = "images/" + image1; // adding path of that random generated image path = images/dice2.png
document.querySelector(".img1").setAttribute("src", imagesrc1);

//for player2
var randomNumber2 = (Math.random()*6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var image2 = 'dice' + randomNumber2 + '.png';
var imagesrc2 = "images/" + image2;
document.querySelector(".img2").setAttribute("src", imagesrc2);

//checking if player 1 wins or player2
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = " 🚩 Player1 Won";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Won 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
