// Swiper para la sección de servicios - Versión interactiva como hero
const servicesSwiper = new Swiper('.services-wrapper', {
    // Configuración básica
    loop: true,
    grabCursor: true,
    spaceBetween: 0,
    speed: 1000,
    centeredSlides: true,

    // Configuración responsiva
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 0,
            centeredSlides: true,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
        }
    },

    // Paginación
    pagination: {
        el: '.services-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

    // Navegación
    navigation: {
        nextEl: '.services-button-next',
        prevEl: '.services-button-prev',
    },

    // Autoplay más dinámico
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
    },

    // Efectos avanzados
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Teclado
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    // Touch mejorado
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    allowTouchMove: true,
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,

    // Accesibilidad
    a11y: {
        enabled: true,
        prevSlideMessage: 'Servicio anterior',
        nextSlideMessage: 'Siguiente servicio',
        firstSlideMessage: 'Este es el primer servicio',
        lastSlideMessage: 'Este es el último servicio',
    },

    // Eventos avanzados
    on: {
        init: function () {
            console.log('Swiper de servicios interactivo inicializado');
            // Añadir clase inicial a la primera slide
            this.slides[this.activeIndex].classList.add('swiper-slide-active');
        },

        slideChange: function () {
            // Remover clase activa de todas las slides
            this.slides.forEach(slide => {
                slide.classList.remove('swiper-slide-active');
            });

            // Añadir clase activa a la slide actual
            this.slides[this.activeIndex].classList.add('swiper-slide-active');

            // Efecto de parallax en el contenido
            const activeSlide = this.slides[this.activeIndex];
            const cardContent = activeSlide.querySelector('.card-content');
            if (cardContent) {
                cardContent.style.transform = 'translateY(0) scale(1.05)';
                cardContent.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        },

        slideChangeTransitionStart: function () {
            // Efecto de salida
            this.slides.forEach(slide => {
                const cardContent = slide.querySelector('.card-content');
                if (cardContent) {
                    cardContent.style.transform = 'translateY(20px) scale(0.95)';
                    cardContent.style.opacity = '0.7';
                }
            });
        },

        slideChangeTransitionEnd: function () {
            // Efecto de entrada
            const activeSlide = this.slides[this.activeIndex];
            const cardContent = activeSlide.querySelector('.card-content');
            if (cardContent) {
                cardContent.style.transform = 'translateY(0) scale(1.05)';
                cardContent.style.opacity = '1';
            }
        },

        touchStart: function () {
            // Pausar autoplay al tocar
            this.autoplay.stop();
        },

        touchEnd: function () {
            // Reanudar autoplay después de un delay
            setTimeout(() => {
                this.autoplay.start();
            }, 2000);
        }
    }
});

// Efectos simplificados
document.querySelectorAll('.service-card').forEach((card, index) => {
    // Efecto de click para navegar
    card.addEventListener('click', () => {
        if (!card.classList.contains('swiper-slide-active')) {
            servicesSwiper.slideTo(index);
        }
    });
});

// Move navigation buttons out of the inner swiper wrapper so slides can be clipped
// while buttons remain visible outside the masked area.
document.addEventListener('DOMContentLoaded', () => {
    try {
        const container = document.querySelector('.services-swiper');
        if (!container) return;
        const inner = container.querySelector('.services-wrapper');
        if (!inner) return;
        const next = inner.querySelector('.services-button-next');
        const prev = inner.querySelector('.services-button-prev');
        // Append to container (becomes sibling of inner) so clipping on inner won't hide them
        if (next) container.appendChild(next);
        if (prev) container.appendChild(prev);
    } catch (e) {
        // silent
        console.warn('Could not move nav buttons:', e);
    }
});
