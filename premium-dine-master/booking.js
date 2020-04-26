// vars for dropdown menu
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const selectedMeridiem = document.getElementById('selected-meridiem');
const dropdownTrigger = document.getElementById('dropdown-trigger');
const dropdownArrow = document.getElementById('dropdown-arrow');
// vars for number picker
const numberOfPeople = document.getElementById('number-of-people');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
//vars for reservationButton
const reservationButton = document.getElementById('btn-reservation');
//vars for form elements
const name = document.querySelector("input[name='name']");
const email = document.querySelector("input[name='email']");
const month = document.querySelector("input[name='month']");
const day = document.querySelector("input[name='day']");
const year = document.querySelector("input[name='year']");
const hour = document.querySelector("input[name='hour']");
const minute = document.querySelector("input[name='minute']");
const errors = document.querySelectorAll('p.errormsg');
const inputboxes = document.querySelectorAll('input.input-box');
const datetimeFields = document.querySelectorAll('p.datetime-field-name');

dropdownTrigger.onclick = () => {
  dropdownMenu.classList.toggle('open');
  dropdownArrow.classList.toggle('open');
}

dropdownItems.forEach(item => {  
  item.onclick = () => {
    selectedMeridiem.textContent = item.children[1].textContent;
    // remove the old checked class
    dropdownItems.forEach(oldItem => {
      oldItem.children[0].classList.remove('checked');
    });
    // add the checked class to current clicked item
    item.children[0].classList.add('checked');
  }
});

minusButton.onclick = () => changeNumberOfPeople(false);
plusButton.onclick = () => changeNumberOfPeople(true);

function changeNumberOfPeople(isPlus) {
  let currentNumberOfPeople = parseInt(numberOfPeople.textContent);
  if (isPlus) {
    numberOfPeople.textContent = currentNumberOfPeople + 1;
  } else {
    if (currentNumberOfPeople != 1) {
      numberOfPeople.textContent = currentNumberOfPeople - 1;
    }
  }
}

reservationButton.onclick = () => {
  formValidate();
}

function formValidate() {
  if (name.value == '') {
    errors[0].classList.add('show');
    inputboxes[0].classList.add('error');
  }
  if (email.value == '') {
    errors[1].classList.add('show');
    inputboxes[1].classList.add('error');
  }
  if (month.value == '' || day.value == '' || year.value == '') {
    errors[2].classList.add('show');
    datetimeFields[0].classList.add('error');
    if (month.value == '') {
      inputboxes[2].classList.add('error');
    }
    if (day.value == '') {
      inputboxes[3].classList.add('error');
    }
    if (year.value == '') {
      inputboxes[4].classList.add('error');
    }
  }
  if (hour.value == '' || minute.value == '') {
    errors[3].classList.add('show');
    datetimeFields[1].classList.add('error');
    if (hour.value == '') {
      inputboxes[5].classList.add('error');
    }
    if (minute.value == '') {
      inputboxes[6].classList.add('error');
    }
  }
}

inputboxes.forEach((box, i) => {
  // remove error status when focus
  box.onfocus = () => {
    box.classList.remove('error');
    if (i == 0) {
      errors[0].classList.remove('show');
    } else if (i == 1) {
      errors[1].classList.remove('show');
    } else if (i > 1 && i < 5) {
      errors[2].classList.remove('show');
      datetimeFields[0].classList.remove('error');
    } else {
      errors[3].classList.remove('show');
      datetimeFields[1].classList.remove('error');
    }
  }
});