// Mobile nav
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

// Email validation
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Form validation
const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.querySelector('input[name="email"]');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    emailInput.nextElementSibling.classList.remove('hide');
  } else {
    emailInput.value = '';
  }
});

emailInput.addEventListener('focus', () => {
  emailInput.classList.remove('error');
  emailInput.nextElementSibling.classList.add('hide');
});


