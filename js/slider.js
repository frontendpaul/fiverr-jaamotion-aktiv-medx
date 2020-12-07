const testimonialsSlider = new Siema({
  selector: '.testimonials-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
  },
  loop: true
});

const pricingSlider = new Siema({
  selector: '.pricing-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  loop: true
});

const pricingPrev = document.querySelector(".pricing-slider-wrapper .prev-btn");
const pricingNext = document.querySelector(".pricing-slider-wrapper .next-btn");
pricingPrev.addEventListener("click", () => pricingSlider.prev());
pricingNext.addEventListener("click", () => pricingSlider.next());


function animateCurrentSlide() {
  this.innerElements.forEach((slide, i) => {
    const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
    this.innerElements[i].classList[addOrRemove]('active');
  });
}

const staffSlider = new Siema({
  selector: '.staff-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
  },
  loop: true,
  onInit: animateCurrentSlide,
  onChange: animateCurrentSlide
});

const staffPrev = document.querySelector(".staff-slider-controls .prev-btn");
const staffNext = document.querySelector(".staff-slider-controls .next-btn");
staffPrev.addEventListener("click", () => staffSlider.prev());
staffNext.addEventListener("click", () => staffSlider.next());




setInterval(() => {
  testimonialsSlider.next();
  pricingSlider.next();
  staffSlider.next();
}, 5000);