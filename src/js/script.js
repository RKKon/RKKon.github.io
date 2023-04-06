'use strict'
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close')
const menuOverlay = document.querySelector('.menu__overlay');

btnMenu.addEventListener('click', () => menu.classList.add('active'));
menuClose.addEventListener('click', () => menu.classList.remove('active'));
menuOverlay.addEventListener('click', (e) => {
  if (!e.target.classList.contains('.menu__block')) {
    menu.classList.remove('active');
  }
});


const subSkillsProgress = document.querySelectorAll('.subskills__progress span');
const line = document.querySelectorAll('.subskills__percent');

function setPercent() {
  let arr = [];
  line.forEach(item => { arr.push(+item.outerText.slice(0,-1)) });
  for (let i = 0; i < line.length; i++) {
    subSkillsProgress[i].style.width = `${arr[i] <= 100 ? arr[i] : '90'}%`;
  }
}
setPercent();