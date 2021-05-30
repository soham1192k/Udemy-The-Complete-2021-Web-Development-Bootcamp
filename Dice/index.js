var randomNumber1=1+Math.floor(Math.random()*6);
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;
document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSource1);
var randomNumber2=1+Math.floor(Math.random()*6);
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
document.getElementsByClassName("img2")[0].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].textContent="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.getElementsByTagName("h1")[0].textContent="Player 2 Wins!";
}
else{
    document.getElementsByTagName("h1")[0].textContent="Draw!";
}