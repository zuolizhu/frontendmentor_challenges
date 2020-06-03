// page transition
const options = {
  cache: false,
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
};
const swup = new Swup(options);

// burger menu
const burgerButton = document.getElementById('burger');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

burgerButton.onclick = () => {
  mobileNav.classList.toggle('hide');
  burgerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
}