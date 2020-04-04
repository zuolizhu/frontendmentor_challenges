const switchButton = document.getElementById("switch");
const body = document.body;

switchButton.onclick = () => {
  switchButton.classList.toggle('off');
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
  } else {
    body.classList.replace('light', 'dark');
  }
};