const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  let randomIndex = getRandomNumberForColorIndex();
  document.body.style.backgroundColor = colors[randomIndex];
  color.textContent = colors[randomIndex];
});

function getRandomNumberForColorIndex(){
  return Math.floor(Math.random() * colors.length);
}