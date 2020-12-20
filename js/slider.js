// function animateTestimonialsSlide() {
//   if(window.innerWidth >= 1024) {

//     for (let i = 3 - this.innerElements.length; i < 3; i++) { 
//       if (i === this.currentSlide) {
//         if (this.currentSlide < 0) {
//           this.innerElements[this.currentSlide + this.innerElements.length].classList.add('active');
//         } else {
//           this.innerElements[this.currentSlide].classList.add('active');
//         }
//       } else if (i < 0) {
//           this.innerElements[i + this.innerElements.length].classList.remove('active');
//         } else {
//           this.innerElements[i].classList.remove('active');
//         }
      
      
//     }  
//     for (let i = 3 - this.innerElements.length; i < 3; i++) {
//       const addOrRemove = i === this.currentSlide ? 'add' : 'remove';

//       if (i < 0) {
//         this.innerElements[i + this.innerElements.length].classList[addOrRemove]('active');
//         console.log('minus');
//       } else {
//         console.log('plus');
//         this.innerElements[i].classList[addOrRemove]('active');
//       }

//       // console.log(i);
//     }
    
//     this.innerElements.forEach((slide, i) => {
//       const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
//       this.innerElements[i].classList[addOrRemove]('active');
//     });
//   }
// }

const testimonialsSlider = new Siema({
  selector: '.testimonials-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
  },
  loop: true,
  // onInit: animateTestimonialsSlide,
  // onChange: animateTestimonialsSlide
});

const pricingSlider = new Siema({
  selector: '.pricing-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    1280: 3,
  },
  loop: true
});

const pricingPrev = document.querySelector(".pricing-slider-wrapper .prev-btn");
const pricingNext = document.querySelector(".pricing-slider-wrapper .next-btn");
pricingPrev.addEventListener("click", () => pricingSlider.prev());
pricingNext.addEventListener("click", () => pricingSlider.next());


// function animateCurrentSlide() {
//   const currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;
//   this.innerElements.forEach((slide, i) => {
//     const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
//     this.innerElements[i].classList[addOrRemove]('active');
//   });
// }

const staffSlider = new Siema({
  selector: '.staff-slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
    1280: 4,
    1440: 5,
    1920: 6,
  },
  loop: true,
  // onInit: animateCurrentSlide,
  // onChange: animateCurrentSlide
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




function toggleSliders () {
  if (window.innerWidth > 1279) {
    testimonialsSlider.destroy(true);
    pricingSlider.destroy(true);
  } else {
    testimonialsSlider.init();
    pricingSlider.init();
  }
}

toggleSliders();
window.addEventListener('resize', toggleSliders)
