const scrollSection = document.querySelector('.horizontal-wrapper');

scrollSection.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollSection.scrollLeft += e.deltaY;
}, { passive: false });
