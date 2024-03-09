const colors = ["green", "red","blue","brown","black","yellow"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    //rand num between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}