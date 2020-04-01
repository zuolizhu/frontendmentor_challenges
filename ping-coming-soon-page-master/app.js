let emailInput = document.getElementById("email");
document.querySelector("button.submit").addEventListener("click", () => {
  if (isEmpty(emailInput.value) || !validEmail(emailInput.value)) {
    emailInput.classList.add("error");
    emailInput.nextElementSibling.classList.add("show");
  }
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("error");
  emailInput.nextElementSibling.classList.remove("show");
});


function isEmpty(value) {
  return value.length == 0;
}

function validEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}