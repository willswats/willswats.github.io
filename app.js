// Hide and show the mobile menu
const mobileMenu = document.querySelector('#mobile-menu')
const navMenu = document.querySelector('#nav-menu')
const showMobileMenu = () => {
    mobileMenu.classList.toggle('cross')
    navMenu.classList.toggle('drop-down')
}
mobileMenu.addEventListener('click', showMobileMenu)

const hideMobileMenu = () => {
    const cross = document.querySelector('.cross')
    if (window.innerWidth <= 960 && cross) {
        mobileMenu.classList.toggle('cross')
        navMenu.classList.toggle('drop-down')
    }
}
navMenu.addEventListener('click', hideMobileMenu)

const cardTops = document.getElementsByClassName('projects-card-top')
const cardTitles = document.getElementsByClassName('projects-card-title')
const cardTexts = document.getElementsByClassName('projects-card-text')

for (let i = 0, cardTopsLength = cardTops.length; i < cardTopsLength; i++) {
    cardTops[i].addEventListener('mouseenter', () => {
        cardTitles[i].classList.toggle('hide')
        cardTexts[i].classList.toggle('show')
    })
}
for (let i = 0, cardTopsLength = cardTops.length; i < cardTopsLength; i++) {
    cardTops[i].addEventListener('mouseleave', () => {
        cardTitles[i].classList.remove('hide')
        cardTexts[i].classList.remove('show')
    })
}

