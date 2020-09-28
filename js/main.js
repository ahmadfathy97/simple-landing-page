let slctElem = s => document.querySelector(s),
    slctElems = s => document.querySelectorAll(s);


let toggleLinks = slctElem('.toggle-links'),
    navLinks = slctElem('header nav .links');

function handleClick(e) {
  toggleLinks.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('prevent-scroll');
}
toggleLinks.addEventListener('click', handleClick);

let colors = slctElems('.color-balette .color');
function setColor(e) {
  document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
}
colors.forEach(color =>{
  color.style.background = color.dataset.color;
  color.addEventListener('click', setColor);
})
