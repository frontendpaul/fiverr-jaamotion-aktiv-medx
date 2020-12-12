// Sticky header handler
window.addEventListener("scroll", function () {
  window.scrollY > 20
    ? (document
        .querySelector(".header")
        .classList.add("sticky"))
    : (document
        .querySelector(".header")
        .classList.remove("sticky"));
});


// Open menu
document.querySelector('.menu-trigger').addEventListener('click', function () {
  document.querySelector('.header').classList.add('menu-open');
})
// Close menu
document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.header').classList.remove('menu-open');
})

// Dropdown menu handler
const dropdownLink = document.querySelector(".has-dropdown > a");
const submenu = document.querySelector('.submenu');

dropdownLink.addEventListener('click', function (e) {
  this.parentElement
    .querySelector(".submenu")
    .classList.toggle("active");
  this.classList.toggle("open");

  // Important because of event bubbling below
  e.preventDefault();
  e.stopPropagation();
});

// Clicking outside will hide submenu
// Working by event bubbling
document.addEventListener('click', (e) => {
  if (submenu.classList.contains('active') && e.target != submenu) {
    dropdownLink.classList.remove('open');
    submenu.classList.remove('active');
  }
});


// Hidden text handler
const faqItems = document.querySelectorAll('.faq');

for (const faqItem of faqItems) {
  faqItem.addEventListener('click', (e) => {
    e.target.closest('.faq').classList.toggle('open');
  });
}