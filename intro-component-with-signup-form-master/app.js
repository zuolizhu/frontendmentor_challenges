function validateForm() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (isEmpty(firstName.value)) {
    firstName.classList.add("error");
    firstName.nextElementSibling.classList.add("show");
  } 
  if (isEmpty(lastName.value)) {
    lastName.classList.add("error");
    lastName.nextElementSibling.classList.add("show");
  }
  if (isEmpty(email.value) || !validEmail(email.value)) {
    email.classList.add("error");
    email.nextElementSibling.classList.add("show");
  }
  if (isEmpty(password.value)) {
    password.classList.add("error");
    password.nextElementSibling.classList.add("show");
  }
}

document.querySelectorAll("input").forEach(element => {
  element.addEventListener("focus", () => {
    element.classList.remove("error");
    element.nextElementSibling.classList.remove("show");
  });
});

function isEmpty(value) {
  return value.length == 0;
}

function validEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}