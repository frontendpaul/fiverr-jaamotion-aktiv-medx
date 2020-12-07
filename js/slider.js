function animateTestimonialsSlide() {
  if(window.innerWidth >= 1024) {


    for (let i = 3 - this.innerElements.length; i < 3; i++) {
      console.log(i);
      const addOrRemove = i+2 === this.currentSlide ? 'add' : 'remove';
      this.innerElements[i+2].classList[addOrRemove]('active');
    }

    this.innerElements.forEach((slide, i) => {
      const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
      this.innerElements[i].classList[addOrRemove]('active');
    });
  }
}

const testimonialsSlider = new Siema({
  selector: '.testimonials-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
  },
  loop: true,
  onInit: animateTestimonialsSlide,
  onChange: animateTestimonialsSlide
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
  // testimonialsSlider.next();
  pricingSlider.next();
  staffSlider.next();
}, 5000);