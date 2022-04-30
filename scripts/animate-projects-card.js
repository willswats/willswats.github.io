const cardContentEls = document.getElementsByClassName(
  'projects__card-content'
);
const cardTextEls = document.getElementsByClassName(
  'projects__card-description'
);
const cardOverlayEls = document.getElementsByClassName(
  'projects__card-overlay'
);

for (
  let i = 0, cardContentElsLength = cardContentEls.length;
  i < cardContentElsLength;
  i++
) {
  cardContentEls[i].addEventListener('mouseenter', () => {
    cardTextEls[i].classList.toggle('show');
    cardOverlayEls[i].classList.toggle('show');
  });
}
for (
  let i = 0, cardContentElsLength = cardContentEls.length;
  i < cardContentElsLength;
  i++
) {
  cardContentEls[i].addEventListener('mouseleave', () => {
    cardTextEls[i].classList.remove('show');
    cardOverlayEls[i].classList.remove('show');
  });
}
