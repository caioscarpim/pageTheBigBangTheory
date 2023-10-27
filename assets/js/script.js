// FUNCTION PARA O MENU-MOBILE
function menuShow() {
    let menuButton = document.querySelector('.mobile-menu-icon button');
    let mobileMenu = document.querySelector('.mobile-menu');
  
    if (menuButton.classList.contains('open')) {
      menuButton.classList.remove('open');
      mobileMenu.style.display = 'none'; // Oculta o menu 
      document.querySelector('.icon').src="assets/icons/menu-fechado.png";
    } else {
      menuButton.classList.add('open');
      mobileMenu.style.display = 'block'; // Exibe o menu
      document.querySelector('.icon').src="assets/icons/menu-aberto.png"; 
    }
  }
  
  // OCULTA MENU QUANDO REDIMENSIONA A TELA, MESMO ESTANDO ABERTO
  window.addEventListener('resize', function () {
    let windowWidth = window.innerWidth;
    let mobileMenu = document.querySelector('.mobile-menu');
    let menuButton = document.querySelector('.mobile-menu-icon button');
  
    if (windowWidth > 730) {
      mobileMenu.style.display = 'none'; // Oculta o menu
      menuButton.classList.remove('open');
    }
  });