const colors = ['green' , 'red', 'white', 'purple', 'brown', 'grey', 'yellow']
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomcolor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
function getRandomcolor(){
    return Math.floor(Math.random() * colors.length);
}