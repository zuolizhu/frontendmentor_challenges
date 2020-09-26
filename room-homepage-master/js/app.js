const timeline = gsap.timeline({
  defaults:{ ease: 'power1.out' }
});

// Page loading slider
timeline.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
timeline.to('.intro-slider', { y: '-100%', duration: 1.5, delay: 0.5 });
timeline.to('.intro', { y: '-100%', duration: 1 }, "-=1");

// Sections animation
timeline.fromTo('section.hero', {opacity: 0}, {opacity: 1, duration: 1});
timeline.fromTo('section.about', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.75");
timeline.fromTo('.header', {opacity: 0}, {opacity: 1, duration: 1});

const mySiema = new Siema({ loop: true, duration: 800 });
const prevButtons = document.querySelectorAll('.siema-button-prev');
const nextButtons = document.querySelectorAll('.siema-button-next');
prevButtons.forEach(btn => {
  btn.addEventListener('click', () => mySiema.prev());
});
nextButtons.forEach(btn => {
  btn.addEventListener('click', () => mySiema.next());
});

const burgerTrigger = document.querySelector('.mobile-nav-trigger');
const navMobile = document.querySelector('.nav-mobile');
const burgerIcons = document.querySelectorAll('.mobile-nav-trigger__icon');

burgerTrigger.addEventListener('click', () => {
  navMobile.classList.toggle('hide');
  burgerIcons.forEach(icon => {
    icon.classList.toggle('hide');
  })
});
// autoplay
setTimeout(() => {
  setInterval(() => mySiema.next(), 5000);
}, 3000);