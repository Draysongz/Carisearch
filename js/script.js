
// const background = document.getElementById("background");

// const getRandomNumber = (limit) => {
//   return Math.floor(Math.random() * limit);
// };

// const getRandomColor = () => {
//   const h = getRandomNumber(360);
//   const s = getRandomNumber(100);
//   const l = getRandomNumber(100);
//   console.log(`hsl(${h}deg, ${s}%, ${l}%)`);

//   return `hsl(${h}deg, ${s}%, ${l}%)`;
// };

// const setBackgroundColor = () => {
//   const randomColor = getRandomColor();
//   background.style.backgroundColor = randomColor;
//   background.style.color = randomColor;
// };

// setBackgroundColor();

// setInterval(() => {
//   setBackgroundColor();
// }, 2000);

let searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click', (e)=>{
e.preventDefault()

var query= document.querySelector('#searchbar').value
var API_KEY ='5f8d2545199a43617f85ba63acf7450a' 
var url= 'https://api.serpstack.com/search?access_key=' + API_KEY +"&type=web&query=" + query
console.log(url);


fetch(url, function(data){
    console.log(data);
}) 

})