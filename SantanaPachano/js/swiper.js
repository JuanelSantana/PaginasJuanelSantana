const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: -1,

    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
});

