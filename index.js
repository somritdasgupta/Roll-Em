let randomNumber1= Math.floor(Math.random()*6)+1
let randomImage1= "./images"+"/dice"+randomNumber1+".png"
let dice1= document.querySelectorAll("img")[0].setAttribute("src", randomImage1)
let randomNumber2= Math.floor(Math.random()*6)+1
let randomImage2= "./images"+"/dice"+randomNumber2+".png"
let dice2= document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Settled with Player one."
    document.querySelector("h1").style.fontSize="5rem"
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Settled with Player two."
    document.querySelector("h1").style.fontSize="5rem"
} else{
    document.querySelector("h1").innerHTML="It's a draw."
}

const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
  location.reload();
});

