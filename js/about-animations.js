gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.staff .section-title',{
  opacity: 0},
  {scrollTrigger: {
    trigger: '.staff',
    scrub: true,
    start: "top bottom-=200px",
    end: "-=200",
    // markers: true
  },
  opacity: 1}
);

let staffGalleries = gsap.utils.toArray('.staff-gallery');

staffGalleries.forEach((staffGallery) => {
      
  gsap.fromTo(staffGallery,{
    opacity: 0,
    scale: 1.3},
    {scrollTrigger: {
      trigger: staffGallery,
      scrub: true,
      end: "-=100",
      // markers: true
    },
    opacity: 1,
    scale: 1}
  );
  
  gsap.fromTo(staffGallery,{
    opacity: 1,
    scale: 1},
    {scrollTrigger: {
      trigger: staffGallery,
      scrub: true,
      start: "top top-=150px",
      // markers: true
    },
    opacity: .5,
    scale: .8}
  );
  
});


gsap.fromTo('.gallery-section',{
  opacity: 0},
  {scrollTrigger: {
    trigger: '.gallery-section',
    scrub: true,
    start: "top bottom-=200px",
    end: "-=200",
    // markers: true
  },
  opacity: 1}
);

gsap.fromTo('.gallery-section',{
  opacity: 1,
  scale: 1},
  {scrollTrigger: {
    trigger: '.gallery-section',
    scrub: true,
    start: "bottom bottom-=150px",
    // markers: true
  },
  opacity: .5,
  scale: .8}
);

gsap.fromTo('.gallery-bg-img#img-1',{
  y: '0vh'},
  {scrollTrigger: {
    trigger: '.gallery-section',
    scrub: true,    
    // markers: true
  },
  y: '-60vh'}
);

gsap.fromTo('.gallery-bg-img#img-2',{
  x: '70vh'},
  {scrollTrigger: {
    trigger: '.gallerx-section',
    scrub: true,    
    // markers: true
  },
  x: '0vh'}
);

gsap.fromTo('.gallery-bg-img#img-3',{
  y: '30vh'},
  {scrollTrigger: {
    trigger: '.gallery-bg-img#img-3',
    scrub: true,    
    // markers: true
  },
  y: '-10vh'}
);


let galleryItems = gsap.utils.toArray('.gallery-item');

galleryItems.forEach((galleryItem) => {
      
  gsap.fromTo(galleryItem,{
    opacity: 0,
    scale: 0},
    {scrollTrigger: {
      trigger: galleryItem,
      start: "bottom bottom",
      // markers: true
    },
    opacity: 1,
    scale: 1,
    duration: .5}
  );
  
});