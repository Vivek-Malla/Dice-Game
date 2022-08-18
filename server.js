var Number1 = (Math.random()*6)+1;
var randomNumber1 = Math.floor(Number1);
var imagenumber1 = "dice"+randomNumber1+".png";
var imagesource1 = "Dice/images/"+imagenumber1;
var source1 = document.querySelectorAll("img")[0];
source1.setAttribute("src", imagesource1);

var Number2 = (Math.random()*6)+1;
var randomnumber2 = Math.floor(Number2);
var imagenumber2 = "dice"+randomnumber2+".png";
var imagesource2 = "Dice/images/"+imagenumber2;
var source2 = document.querySelectorAll("img")[1];
source2.setAttribute("src", imagesource2);

if(randomNumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}