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

let moveMenu = document.querySelector('.menu__list').children
Array.from(moveMenu).forEach(menuItem => menuItem.addEventListener('click', () => {
  menu.classList.remove('active')
}))

const validationForm = (inputName, inputEmail, inputTextarea) => {
  if (inputName.length > 2 ) {
    document.querySelector('#name').classList.remove('form_input_error')
  } else {
    document.querySelector('#name').classList.add('form_input_error')
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
    document.querySelector('#email').classList.remove('form_input_error')
  } else {
    document.querySelector('#email').classList.add('form_input_error')
  }

  if (inputTextarea.length > 3 ) {
    document.querySelector('#textarea').classList.remove('form_input_error')
  } else {
    document.querySelector('#textarea').classList.add('form_input_error')
  }    
}

//const sendForm = () => {}
/* document.querySelector('.btn__message').addEventListener('click', e => {
  e.preventDefault()
  const inputName = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const inputTextarea = document.getElementById('textarea').value;
  const validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  validationForm(inputName, inputEmail, inputTextarea)
  
  if (inputName.length > 2  && inputTextarea.length > 3 && validationEmail.test(inputEmail)) {
    console.log(inputName, inputEmail, inputTextarea);
    document.querySelector('.contacts__form').reset();
  } else {console.log('Please fill out the form correctly');}

}); */


// const subSkillsProgress = document.querySelectorAll('.subskills__progress span');
// const line = document.querySelectorAll('.subskills__percent');

// function setPercent() {
//   let arr = [];
//   line.forEach(item => { arr.push(+item.outerText.slice(0,-1)) });
//   for (let i = 0; i < line.length; i++) {
//     subSkillsProgress[i].style.width = `${arr[i] <= 100 ? arr[i] : '90'}%`;
//   }
// }
// setPercent();