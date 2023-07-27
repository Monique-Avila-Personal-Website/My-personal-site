// below for inserting my favQuote!
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
let contacth1 = document.querySelector('.contacth1')
const setRandColor = () => {
  let rand = randColors();
  intro.style.color = rand;
  name.style.color = rand;
  // contacth1.style.color =rand;
}

setRandColor();
setInterval(() => {
  setRandColor();
}, 3300);

// storing rand colors in local storage for usage across all pages
colorToElement = (elementId) => {
  const colors = randColors();
  localStorage.setItem('colors', colors);
  const contacth1 = document.querySelector('.' + contacth1);
  contacth1.style.color = colors;
}

// hello world below!
console.log('Hello, world!');

// hamburger
document.addEventListener('DOMContentLoaded', function() {
  const menubtn = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  menubtn.addEventListener('click', function() {
  menubtn.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});
});


