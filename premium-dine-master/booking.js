// vars for dropdown menu
const dropdownItems = document.querySelectorAll('.dropdown__item');
const selectedMeridiem = document.getElementById('selected-meridiem');

// vars for number picker
const numberOfPeople = document.getElementById("number-of-people");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

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