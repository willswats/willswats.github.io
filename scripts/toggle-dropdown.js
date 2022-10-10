const navSvg = document.querySelector('.nav__svg');
const navMenu = document.querySelector('.nav__menu');

const navSvgToggleDropdown = () => {
  navMenu.classList.toggle('drop-down');
};

const navMenuToggleDropDown = () => {
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle('drop-down');
  }
};

navSvg.addEventListener('click', navSvgToggleDropdown);
navMenu.addEventListener('click', navMenuToggleDropDown);
