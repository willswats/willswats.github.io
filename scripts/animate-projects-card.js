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
