const HAMBURGER_BUTTON = document.querySelector('.menu');
const NAVBAR_LOGO = document.querySelector('.nam');
const MOBILE_MENU_SCREEN = document.querySelector('.mobile-menu-screen');
HAMBURGER_BUTTON.addEventListener('click', () => {
  HAMBURGER_BUTTON.classList.toggle('active');
  MOBILE_MENU_SCREEN.classList.toggle('active');
  NAVBAR_LOGO.classList.toggle('active');
});
