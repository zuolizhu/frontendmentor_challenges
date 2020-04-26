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

dropdownTrigger.onclick = () => {
  dropdownMenu.classList.toggle('open');
  dropdownArrow.classList.toggle('open');
}

dropdownItems.forEach(item => {
  item.onclick = () => {
    selectedMeridiem.textContent = item.children[1].textContent;
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