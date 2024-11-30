// scripts.js
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');
const body = document.body;

// Fungsi untuk membuka menu
hamburgerMenu.addEventListener('click', () => {
  sideMenu.style.left = '0'; // Pindahkan menu ke layar
});

// Fungsi untuk menutup menu saat klik di luar
body.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && e.target !== hamburgerMenu) {
    sideMenu.style.left = '-100%'; // Kembalikan menu ke posisi awal
  }
});