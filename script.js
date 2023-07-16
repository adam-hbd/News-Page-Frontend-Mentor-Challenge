const burgerMenuElement = document.querySelector('.burger-menu');
const navbarElement = document.querySelector('.navbar-mobile');
const shadeElement = document.querySelector('.hide')
let menuOpen = false;

burgerMenuElement.onclick = () => {
  if (menuOpen === false) {
    navbarElement.classList.replace('menu-closed', 'menu-open');
    shadeElement.classList.replace('closed', 'open');
    burgerMenuElement.innerHTML = `<img class="close-menu" src="Starter file/assets/images/icon-menu-close.svg">`;
    menuOpen = true;
  } else if (menuOpen === true) {
    navbarElement.classList.replace('menu-open', 'menu-closed');
    shadeElement.classList.replace('open', 'closed');
    burgerMenuElement.innerHTML = `<img class="close-menu" src="Starter file/assets/images/icon-menu.svg">`;
    menuOpen = false;
  };
  
};