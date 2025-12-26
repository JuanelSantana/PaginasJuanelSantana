
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: false,
    spaceBetween: -1,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

