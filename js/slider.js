const testimonialsSlider = new Siema({
  selector: '.testimonials-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  loop: true
});

const pricingSlider = new Siema({
  selector: '.pricing-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  loop: true
});

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
prev.addEventListener("click", () => pricingSlider.prev());
next.addEventListener("click", () => pricingSlider.next());

setInterval(() => {
  testimonialsSlider.next();
  pricingSlider.next();
}, 5000);