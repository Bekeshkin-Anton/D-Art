const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuBtn = document.querySelector('.close-button');

const toggleMenu = (e) => {
  menu.classList.toggle('is-open');
}
menuButton.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
