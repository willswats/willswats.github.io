const overlay = document.querySelector('.overlay');
const navSvg = document.querySelector('.nav__svg');
const navMenu = document.querySelector('.nav__menu');

const toggleNavMenu = () => {
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle('enable');
    overlay.classList.toggle('enable');
  }
};

const removeNavMenu = () => {
  navMenu.classList.remove('enable');
  overlay.classList.remove('enable');
};

const resizeHandler = () => {
  if (window.innerWidth > 768) {
    removeNavMenu();
  }
};

navSvg.addEventListener('click', toggleNavMenu);
navMenu.addEventListener('click', toggleNavMenu);
overlay.addEventListener('click', removeNavMenu);
window.addEventListener('resize', resizeHandler);
