const randomNumber1=Math.floor(Math.random()*6+1)    
let image1="./images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",image1);

const randomNumber2=Math.floor(Math.random()*6+1)
let image2="./images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",image2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("Player 1 Won");
}

else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML=("Player 2 Won");
}
else{
    document.querySelector("h1").innerHTML="Draw";
}