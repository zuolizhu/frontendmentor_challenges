const MenuTrigger = document.querySelector('button.menu-trigger');
const MenuTriggerIcons = document.querySelectorAll('svg.menu-trigger__icon');
const SideMenu = document.querySelector('nav.side-menu');

MenuTrigger.onclick = () => {
  SideMenu.classList.toggle('open');
  MenuTriggerIcons.forEach(icon => {
    icon.classList.toggle('active');
  });
}

