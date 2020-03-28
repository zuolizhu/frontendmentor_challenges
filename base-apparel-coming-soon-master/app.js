document.getElementById("email").addEventListener("focus", () => {
  // remove error message when cursor focused
  document.getElementById("errorMsg").classList.remove("show");
  // also the error icon
  document.getElementById("errorIcon").classList.remove("show");
  // and the highlighted border
  document.getElementById("errorBorder").classList.remove("error");

});

function validateEmail() {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById("email").value;
  if (emailRegex.test(email)) {
  } else {
    document.getElementById("errorMsg").classList.add("show");
    document.getElementById("errorIcon").classList.add("show");
    document.getElementById("errorBorder").classList.add("error");
  }
}