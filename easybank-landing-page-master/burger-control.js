const burgerButton = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
const burgerIcons = document.querySelectorAll('svg.mobile-nav-icon');
const header = document.querySelector('header');
const headerSpacer = document.getElementById('header-spacer');

burgerButton.onclick = () => {
  burgerIcons.forEach(icon => {
    icon.classList.toggle('hide');
  });
  mobileNav.classList.toggle('show');
  header.classList.toggle('sticky');
  headerSpacer.classList.toggle('show');
}