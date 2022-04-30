// Show mobile menu
const mobileMenu = document.querySelector('#nav__mobile-menu');
const navMenu = document.querySelector('#nav__menu');
const showMobileMenu = () => {
  mobileMenu.classList.toggle('cross');
  navMenu.classList.toggle('drop-down');
};
mobileMenu.addEventListener('click', showMobileMenu);

// Hide mobile menu
const hideMobileMenu = () => {
  const cross = document.querySelector('.cross');
  if (window.innerWidth <= 768 && cross) {
    mobileMenu.classList.toggle('cross');
    navMenu.classList.toggle('drop-down');
  }
};
navMenu.addEventListener('click', hideMobileMenu);
