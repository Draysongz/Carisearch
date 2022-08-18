
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


let result = document.getElementById('result')
result.innerHTML = ""
var query= document.querySelector('#searchbar').value
if (query ==''){
    alert('Please type something')
}
var url= `https://api.scaleserp.com/search?api_key=3FA7BBDE1FD84CA485B05CB4C7AAE113&q=${query}`
console.log(url);
fetch(url).then(res=> res.json())
.then(json => {
console.log(json);
 json.organic_results.forEach(res => {

    let h = document.createElement('h3')
    // let br = document.createElement('br')
    let a = document.createElement('a')
    let p = document.createElement('p')
    let newDiv = document.createElement('div')
    a.href= res.link;
    console.log(res)
    a.innerHTML= res.link;
    h.innerHTML= res.title;
    p.innerHTML= res.snippet
    newDiv.append(h)

    
    newDiv.append(a)
    newDiv.append(p)
    console.log(newDiv)

         document.getElementById('result').append(newDiv);
        });
        

    })
})
