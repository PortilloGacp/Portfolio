let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log("Menu icon clicked"); // Adicione esta linha para depuração
    console.log("Navbar active:", navbar.classList.contains('active')); // Adicione esta linha para depuração
};