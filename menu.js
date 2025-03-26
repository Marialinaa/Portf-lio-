let AgmMenu = document.getElementById('Agm-abrir');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-Menuu');
let AgmFechar = document.querySelector('.AGM-fechar i');

// Evento para abrir o menu
AgmMenu.addEventListener('click', () => {
  menu.classList.add('menu-aberto');
  overlay.style.display = 'block';
  menu.style.opacity = '1';
});

// Evento para fechar o menu ao clicar no ícone de fechar
AgmFechar.addEventListener('click', () => {
  menu.classList.remove('menu-aberto');
  overlay.style.display = 'none';
  menu.style.opacity = '0';
});

// Evento para fechar o menu ao clicar na overlay
overlay.addEventListener('click', () => {
  menu.classList.remove('menu-aberto');
  overlay.style.display = 'none';
  menu.style.opacity = '0';
});

// Evento aos links de navegação
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    if (menu.classList.contains('menu-aberto')) {
      menu.classList.remove('menu-aberto');
      overlay.style.display = 'none';
      menu.style.opacity = '0';
    }
    if (window.matchMedia('(max-width: 768px)').matches) {
      menu.classList.remove('menu-aberto');
      overlay.style.display = 'none';
      menu.style.opacity = '0';
    }
    section.scrollIntoView({ behavior: 'smooth' });
  });
});