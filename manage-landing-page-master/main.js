const burgerButton = document.getElementById('burger');

const mobileNav = document.getElementById('mobile-nav');

burgerButton.onclick = () => {
  burgerButton.classList.toggle('active');
  mobileNav.classList.toggle('show');
}

mobileNav.onclick = () => {
  mobileNav.classList.toggle('show');
  burgerButton.classList.toggle('active');
}