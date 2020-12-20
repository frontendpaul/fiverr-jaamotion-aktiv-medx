gsap.registerPlugin(ScrollTrigger);


// Hero
if(document.querySelector('.hero')) {
  
  gsap.fromTo('.hero .hero-content', {opacity: 0}, {duration: .5, delay: .5, opacity: 1, ease: "none"})
  gsap.fromTo('.hero .hero-content', {scale: .5}, {duration: 1, scale: 1, ease: "elastic.out(5, 0.3)"})

  gsap.fromTo('.hero .btn, .hero .section-title', {opacity: 0, y: 50}, {duration: 1, delay: .3, opacity: 1, y:0, ease: "none"})
  
  gsap.fromTo('.hero-bg-img#hero-img-4',{
    y: '15vh'},
    {scrollTrigger: {
      trigger: '.hero-bg-img#hero-img-4',
      scrub: true
    },
    y: '-10vh'}
  );
}

// Goals
if(document.querySelector('.goals')) {
  gsap.fromTo('.goals .section-title',{
    opacity: 0},
    {scrollTrigger: {
      trigger: '.goals',
      scrub: true,
      start: "top bottom-=200px",
      end: "-=200",
      // markers: true
    },
    opacity: 1}
  );
  
  gsap.fromTo('.goals-cards',{
    opacity: 0,
    scale: 1.3},
    {scrollTrigger: {
      trigger: '.goals',
      scrub: true,
      end: "-=100",
      // markers: true
    },
    opacity: 1,
    scale: 1}
  );
  
  gsap.fromTo('.goals',{
    opacity: 1,
    scale: 1},
    {scrollTrigger: {
      trigger: '.goals',
      scrub: true,
      start: "top top-=150px",
      // markers: true
    },
    opacity: .5,
    scale: .8}
  );
}

// Video
if(document.querySelector('.video-section')) {  
  gsap.fromTo('.video-section',{
    opacity: 0},
    {scrollTrigger: {
      trigger: '.video-section',
      scrub: true,
      end: "-=30%",
      // markers: true
    },
    opacity: 1}
  );
  
  gsap.fromTo('.video-section',{
    opacity: 1},
    {scrollTrigger: {
      trigger: '.video-section',
      scrub: true,
      start: "top top-=150px",
      // markers: true
    },
    opacity: .5}
  );
}

// Banner
if(document.querySelector('.banner')) {  
  let banners = gsap.utils.toArray('.banner');

  banners.forEach((banner) => {

    gsap.fromTo(banner,{
      opacity: 0},
      {scrollTrigger: {
        trigger: banner,
        scrub: true,
        end: "-=30%",
        // markers: true
      },
      opacity: 1}
    );
    
    gsap.fromTo(banner,{
      opacity: 1},
      {scrollTrigger: {
        trigger: banner,
        scrub: true,
        start: "top top-=150px",
        // markers: true
      },
      opacity: .5}
    );

  });
}


// Bottom CTA
if(document.querySelector('.article-cta')) {
  gsap.fromTo('.article-cta .hero-content',{
    opacity: 0},
    {scrollTrigger: {
      trigger: '.article-cta .hero-content',
      start: "top bottom-=30%",
      // markers: true
    },
    duration: .5, opacity: 1, ease: "none"}
  );

  gsap.fromTo('.article-cta .hero-content',{
    scale: .5},
    {scrollTrigger: {
      trigger: '.article-cta .hero-content',
      start: "top bottom-=30%",
      // markers: true
    },
    duration: 1, scale: 1, ease: "elastic.out(1, 0.3)"}
  );
}

// Numbered Cards
if(document.querySelector('.numbered-cards-section')) {
  gsap.fromTo('.numbered-cards-section .section-title',{
    opacity: 0},
    {scrollTrigger: {
      trigger: '.numbered-cards-section',
      scrub: true,
      start: "top bottom-=200px",
      end: "-=200",
      // markers: true
    },
    opacity: 1}
  );
  
  gsap.fromTo('.numbered-cards',{
    opacity: 0},
    {scrollTrigger: {
      trigger: '.numbered-cards-section',
      scrub: true,
      end: "-=100",
      // markers: true
    },
    opacity: 1}
  );
  
  gsap.fromTo('.numbered-cards-section',{
    opacity: 1,
    scale: 1},
    {scrollTrigger: {
      trigger: '.numbered-cards-section',
      scrub: true,
      start: "top top-=150px",
      // markers: true
    },
    opacity: .5,
    scale: .8}
  );
}

// Articles
if(document.querySelector('.article')) {
  let articles = gsap.utils.toArray('.article');

  articles.forEach((article) => {
        
    gsap.fromTo(article,{
      opacity: 0,
      scale: 1.3},
      {scrollTrigger: {
        trigger: article,
        scrub: true,
        end: "-=100",
        // markers: true
      },
      opacity: 1,
      scale: 1}
    );
    
    gsap.fromTo(article,{
      opacity: 1,
      scale: 1},
      {scrollTrigger: {
        trigger: article,
        scrub: true,
        start: "top top-=150px",
        // markers: true
      },
      opacity: .5,
      scale: .8}
    );
    
  })
}