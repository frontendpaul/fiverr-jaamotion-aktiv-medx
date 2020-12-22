gsap.registerPlugin(ScrollTrigger);


// Hero
gsap.fromTo('.hero-content', {opacity: 0}, {duration: .5, delay: .5, opacity: 1, ease: "none"})
gsap.fromTo('.hero-content', {scale: .5}, {duration: 1, scale: 1, ease: "elastic.out(5, 0.3)"})

gsap.fromTo('.hero-cta-btn', {opacity: 0, y: 50}, {duration: 1, delay: .3, opacity: 1, y:0, ease: "none"})

gsap.fromTo('.hero-bg-img#hero-img-1',{  x: '30vw'},
  {scrollTrigger: {
    trigger: '.hero',
    scrub: true
  },
  x: '-10vw'}
);

gsap.fromTo('.hero-bg-img#hero-img-4',{
  y: '15vh'},
  {scrollTrigger: {
    trigger: '.hero-bg-img#hero-img-4',
    scrub: true
  },
  y: '-10vh'}
);

gsap.fromTo('.hero-arrow .arrow-img',{
  y: '-15vh'},
  {scrollTrigger: {
    trigger: '.hero-arrow .arrow-img',
    scrub: true
  },
  y: '10vh'}
);



// Heading
let titleWrappers = gsap.utils.toArray('.title-wrapper');

titleWrappers.forEach((titleWrapper) => {
  gsap.fromTo(titleWrapper,{
    opacity: 0},
    {scrollTrigger: {
      trigger: titleWrapper,
      scrub: true,
      start: "top bottom-=200px",
      end: "-=200",
      // markers: true
    },
    opacity: 1}
  );
});


// Headings Arrows
let arrowsLeft = gsap.utils.toArray('.arrow-img--left');

arrowsLeft.forEach((arrowLeft) => {
  gsap.fromTo(arrowLeft,{
    x: '30vh'},
    {scrollTrigger: {
      trigger: arrowLeft,
      scrub: true,
      // markers: true
    },
    x: '0vh'}
  );
});

let arrowsRight = gsap.utils.toArray('.arrow-img--right');

arrowsRight.forEach((arrowRight) => {
  gsap.fromTo(arrowRight,{
    x: '-30vh'},
    {scrollTrigger: {
      trigger: arrowRight,
      scrub: true,
      // markers: true
    },
    x: '0vh'}
  );
});



// Main Heading
gsap.fromTo('.main-heading',{
  opacity: 0},
  {scrollTrigger: {
    trigger: '.main-heading',
    scrub: true,
    end: "-=200",
    // markers: true
  },
  opacity: 1}
);


// Methodology
gsap.fromTo('.methodology',{
  opacity: 0,
  scale: 1.2},
  {scrollTrigger: {
    trigger: '.methodology',
    scrub: true,
    end: "-=200",
    // markers: true
  },
  opacity: 1,
  scale: 1}
);

gsap.fromTo('.methodology',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.methodology',
    scrub: true,
    start: "top top-=150px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);


// Features
gsap.fromTo('.features',{
  opacity: 0},
  {scrollTrigger: {
    trigger: '.features',
    scrub: true,
    end: "top +=100",
    // markers: true
  },
  opacity: 1}
);


// Services / gallery
gsap.fromTo('.services-section .gallery',{
  opacity: 0,
  scale: 1.3},
  {scrollTrigger: {
    trigger: '.services-section',
    scrub: true,
    end: "-=100",
    // markers: true
  },
  opacity: 1,
  scale: 1}
);

gsap.fromTo('.services-section .container',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.services-section',
    scrub: true,
    start: "top top-=150px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);


// Analysis
gsap.fromTo('.analysis',{
  opacity: 0,
  scale: 1.3},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,
    end: "-=200",
    // markers: true
  },
  opacity: 1,
  scale: 1}
);

gsap.fromTo('.analysis',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,
    start: "top top-=40%",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);


gsap.fromTo('.analysis-bg-img#img-1',{
  x: '-30vh'},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,
    // markers: true
  },
  x: '10vh'}
);

gsap.fromTo('.analysis-bg-img#img-3',{
  y: '35vh'},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,
    // markers: true
  },
  y: '-30vh'}
);

gsap.fromTo('.analysis-bg-img#img-4',{
  y: 0},
  {scrollTrigger: {
    trigger: '.analysis-bg-img#img-4',
    scrub: true,
    start: 'top bottom-=30%',
    // markers: true
  },
  y: '-10vw'}
);

gsap.fromTo('.analysis-bg-img#img-5',{
  y: '20vh'},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,    
    // markers: true
  },
  y: '-30vh'}
);

gsap.fromTo('.analysis-bg-img#img-8',{
  x: '400'},
  {scrollTrigger: {
    trigger: '.analysis',
    scrub: true,    
    // markers: true
  },
  x: '-300'}
);


// Testimonials
gsap.fromTo('.testimonials-wrapper',{
  opacity: 0,
  scale: 1.3},
  {scrollTrigger: {
    trigger: '.testimonials',
    scrub: true,
    end: "-=200",
    // markers: true
  },
  opacity: 1,
  scale: 1}
);

gsap.fromTo('.testimonials',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.testimonials',
    scrub: true,
    start: "top top-=150px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);

gsap.fromTo('.testimonials-bg-img',{
  y: '20vh'},
  {scrollTrigger: {
    trigger: '.testimonials',
    scrub: true,    
    // markers: true
  },
  y: '-10vh'}
);


// Pricing
gsap.fromTo('.pricing',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.pricing',
    scrub: true,
    start: "top top-=350px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);


// Banner
gsap.fromTo('.banner',{
  opacity: 0},
  {scrollTrigger: {
    trigger: '.banner',
    scrub: true,
    end: "-=30%",
    // markers: true
  },
  opacity: 1}
);

gsap.fromTo('.banner',{
  opacity: 1},
  {scrollTrigger: {
    trigger: '.banner',
    scrub: true,
    start: "top top-=150px",
    // markers: true
  },
  opacity: .5}
);

// Staff
gsap.fromTo('.staff-slider',{
  opacity: 0,
  scale: 1.3},
  {scrollTrigger: {
    trigger: '.staff',
    scrub: true,
    end: "-=100",
    // markers: true
  },
  opacity: 1,
  scale: 1}
);

gsap.fromTo('.staff',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.staff',
    scrub: true,
    start: "top top-=150px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);
