let navBar = document.querySelector('#nav-bar');
let navBarLinks = document.querySelector('#nav-bar-links');
let linkContainer = document.querySelector('#link-container');
let navSection = document.querySelector('#nav');
let toggleBtn = document.querySelector('#toggle-btn');
let yearSpan = document.querySelector('#date');
let scrollLinks = document.querySelectorAll('.smooth-scroll');

window.addEventListener('resize', function() {
  // if small screen, and the container still in the nav-bar, then move!
  if (window.innerWidth <= 768 && document.querySelector('#nav-bar-links #links')) {
    let ulLinks = document.querySelector('#nav-bar-links #links');
    linkContainer.appendChild(ulLinks);
  }
  if (window.innerWidth > 768 && document.querySelector('#link-container #links')) {
    let ulLinks = document.querySelector('#link-container #links');
    navBarLinks.appendChild(ulLinks);
  }
})

toggleBtn.addEventListener('click', function() {
  if (linkContainer.offsetHeight === 0) {
    linkContainer.style.height = document.querySelector('#links').getBoundingClientRect().height  + "px";
  } 
  else {
    linkContainer.style.height = "0px";
  }
})

window.addEventListener('scroll', function() {
  if (window.scrollY > navSection.getBoundingClientRect().height + 20) {
    navSection.classList.add('fixed-navbar');
  }
  if (navSection.classList.contains('fixed-navbar')) {
    navSection.style.top = window.scrollY + "px"; 
  }
  if (window.scrollY === 0) {
    navSection.classList.remove('fixed-navbar');
  }
})

window.addEventListener('DOMContentLoaded', function() {
  let today = new Date();
  yearSpan.textContent = today.getFullYear();
})
 
scrollLinks.forEach( (link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let scrollTo = e.currentTarget.getAttribute('href');
    let objectDestination = document.querySelector(scrollTo);
    console.log(navSection.offsetHeight);
    linkContainer.style.height = "0px"; 
    console.log(navSection.offsetHeight);
    window.scrollTo(0, (objectDestination.offsetTop - navBar.offsetHeight));
  })
})