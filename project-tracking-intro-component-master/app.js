const dropdown = document.getElementById("dropdown");
dropdown.onclick = () => {
  document.getElementById("dropdown-icon").src = toggleDropdownIcon();
  document.getElementById("nav-items-mobile").classList.toggle("show");
};

function toggleDropdownIcon() {
  let icon_src = document.getElementById("dropdown-icon").src;
  let if_closed = icon_src.includes('icon-close');
  let icon_switch = {
    'true': './images/icon-hamburger.svg',
    'false': './images/icon-close.svg'
  }[if_closed];
  return icon_switch;
}