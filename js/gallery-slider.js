const gallerySlider = new Siema({
  selector: '.full-width-gallery-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  loop: true,
});

const galleryPrev = document.querySelector(".full-width-gallery-container .prev-btn");
const galleryNext = document.querySelector(".full-width-gallery-container .next-btn");
galleryPrev.addEventListener("click", () => gallerySlider.prev());
galleryNext.addEventListener("click", () => gallerySlider.next());


setInterval(() => {
  gallerySlider.next();
}, 5000);