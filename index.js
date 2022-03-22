// Show mobile menu
const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('#nav-menu');
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

// Animate project cards
const cardTops = document.getElementsByClassName('projects-card-top');
const cardTexts = document.getElementsByClassName('projects-card-text');
const cardOverlays = document.getElementsByClassName('projects-card-overlay');

for (let i = 0, cardTopsLength = cardTops.length; i < cardTopsLength; i++) {
  cardTops[i].addEventListener('mouseenter', () => {
    cardOverlays[i].classList.toggle('show');
    cardTexts[i].classList.toggle('show');
  });
}
for (let i = 0, cardTopsLength = cardTops.length; i < cardTopsLength; i++) {
  cardTops[i].addEventListener('mouseleave', () => {
    cardOverlays[i].classList.remove('show');
    cardTexts[i].classList.remove('show');
  });
}
