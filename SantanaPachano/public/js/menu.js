document.querySelector(".bars__menu").addEventListener("click", animateBars);

document.querySelector(".bars__menu").addEventListener("click", abrirCerrarMenu);

var line1__bars = document.querySelector(".line1__bars-menu");

var line2__bars = document.querySelector(".line2__bars-menu");

var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeLine1__bars-menu");
    line2__bars.classList.toggle("activeLine2__bars-menu");
    line3__bars.classList.toggle("activeLine3__bars-menu");
}

var nav = document.querySelector(".nav");

function abrirCerrarMenu() {
    nav.classList.toggle("menu");
}

// Cerrar menú al hacer clic en el overlay
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav');
    const barsMenu = document.querySelector('.bars__menu');

    // Si el menú está abierto y se hace clic fuera del menú y del botón hamburguesa
    if (nav.classList.contains('menu') &&
        !nav.contains(event.target) &&
        !barsMenu.contains(event.target)) {
        nav.classList.remove('menu');
        // También remover las clases de animación de las barras
        const line1 = document.querySelector('.line1__bars-menu');
        const line2 = document.querySelector('.line2__bars-menu');
        const line3 = document.querySelector('.line3__bars-menu');
        if (line1) line1.classList.remove('activeLine1__bars-menu');
        if (line2) line2.classList.remove('activeLine2__bars-menu');
        if (line3) line3.classList.remove('activeLine3__bars-menu');
    }
});

window.addEventListener("scroll", ponerFondo);

function ponerFondo() {
    var header = document.querySelector(".Header");
    if (!header) return;
    header.classList.toggle("HeaderAbajo", window.scrollY > 0);
}
let lastScrollY = 0; // Almacena la última posición del scroll
window.addEventListener("scroll", ocultarHeader);
function ocultarHeader() {
    const header = document.querySelector(".HeaderAbajo") || document.querySelector(".Header");
    const nav = document.querySelector(".nav");
    if (!header) return;
    const currentScrollY = window.scrollY;

    // Cerrar menú móvil si está abierto y se hace scroll hacia abajo
    if (nav && nav.classList.contains("menu") && currentScrollY > lastScrollY && currentScrollY > 50) {
        nav.classList.remove("menu");
        // También remover las clases de animación de las barras
        const line1 = document.querySelector('.line1__bars-menu');
        const line2 = document.querySelector('.line2__bars-menu');
        const line3 = document.querySelector('.line3__bars-menu');
        if (line1) line1.classList.remove('activeLine1__bars-menu');
        if (line2) line2.classList.remove('activeLine2__bars-menu');
        if (line3) line3.classList.remove('activeLine3__bars-menu');
    }

    if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: ocultar header
        header.classList.add("HeaderOculto");
        header.classList.remove("HeaderVisible");
    } else {
        // Scroll hacia arriba: mostrar header
        header.classList.remove("HeaderOculto");
        header.classList.add("HeaderVisible");
    }

    // Fondo transparente al llegar al tope
    if (currentScrollY === 0) {
        header.classList.add("HeaderTransparente");
    } else {
        header.classList.remove("HeaderTransparente");
    }

    lastScrollY = currentScrollY;

};