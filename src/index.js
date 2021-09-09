console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


function fetchImg() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then( results => {
   results.message.forEach(image => renderImg(image))
  })
} 

function renderImg(imageAr){
  const picSpot = document.getElementById("dog-image-container")
  let imgEl = document.createElement('img')
  imgEl.src = imageAr;
  picSpot.appendChild(imgEl)
  };
    








document.addEventListener("DOMContentLoaded",() => {
fetchImg();

});