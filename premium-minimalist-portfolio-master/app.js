// page transition config
const options = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
};
const swup = new Swup(options);

// update top nav active state
const pages =['index.html', 'portfolio.html', 'contact.html'];
const TopNavLinks = document.querySelectorAll('.main-nav__nav-item a');
const projectUrlPrefix = 'project-';
swup.on('contentReplaced', () => {
  const pathname = window.location.pathname;

  if (pathname.includes(projectUrlPrefix)) {
    TopNavLinks[1].classList.add('t-nav-link--active');
    TopNavLinks[0].classList.remove('t-nav-link--active');
    TopNavLinks[2].classList.remove('t-nav-link--active');
    return;
  }
  
  TopNavLinks.forEach((topNavLink, i) => {
    if (pathname.includes(pages[i])) topNavLink.classList.add('t-nav-link--active');
    else topNavLink.classList.remove('t-nav-link--active');
  });
});


// burger menu
const burgerButton = document.getElementById('burger');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

burgerButton.onclick = () => {
  mobileNav.classList.toggle('hide');
  burgerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
}