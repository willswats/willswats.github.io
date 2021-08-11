const mobileMenu = document.querySelector('#mobile-menu')
const navMenu = document.querySelector('#nav-menu')
const activateMobileMenu = () => {
    mobileMenu.classList.toggle('cross')
    navMenu.classList.toggle('drop-down')
}
mobileMenu.addEventListener('click', activateMobileMenu)

const disableMobileMenu = () => {
    const cross = document.querySelector('.cross')
    if (window.innerWidth <= 960 && cross) {
        mobileMenu.classList.toggle('cross')
        navMenu.classList.toggle('drop-down')
    }
}
navMenu.addEventListener('click', disableMobileMenu)
