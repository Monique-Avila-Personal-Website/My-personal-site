// below for inserting my quote
let quote = document.getElementsByClassName('fav-quote')[0];

const showMyQuote = () => {
  return quote.innerText = 'My fav quote: Let go or be dragged';
}

showMyQuote();

//below to gen random colors
const randColors = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
let intro = document.querySelector('.intro');
let name = document.querySelector('.name');
const setRandColor = () => {
  let rand = randColors();
  intro.style.color = rand;
  name.style.color = rand;
}
setRandColor();
setInterval(() => {
  setRandColor();
}, 2600);

// hello world below!
console.log('Hello, world!');