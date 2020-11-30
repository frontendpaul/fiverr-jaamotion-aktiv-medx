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
document.querySelector(".has-dropdown > a").addEventListener('click', function () {
  this.parentElement
    .querySelector(".submenu")
    .classList.toggle("active"),
    this.classList.toggle("open");
});