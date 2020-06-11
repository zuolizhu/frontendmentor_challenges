console.log('form validation');

const inputFields = document.querySelectorAll('.contact-form__input-field');

const contactForm = document.getElementById('contact-form');

// validation on submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  inputFields.forEach(inputField => {
    if (inputField.value.length == 0) {
      // input form alert border
      inputField.classList.add('error');
      inputField.nextElementSibling.classList.remove('hide');
    }
  });

  return false;
});

// form on focus
inputFields.forEach(inputField => {
  inputField.addEventListener('focus', () => {
    inputField.classList.remove('error');
    inputField.nextElementSibling.classList.add('hide');
  });
});