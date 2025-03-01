let reviewsSwiper = new Swiper(".review-swiper", {
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.reviews-slider-prev',
        prevEl: '.reviews-slider-next',
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1.1,},
        576: {slidesPerView: 1.3},
        779: {slidesPerView: 1.7},
        870: {slidesPerView: 1.9},
        954: {slidesPerView: 2.1},
        1139: {slidesPerView: 2.5},
        1224: {slidesPerView: 3},
        1300: {slidesPerView: 3},

    },


});

document.querySelector(".review-swiper").addEventListener("click", (event) => {
    let swiperWrapper = document.querySelector(".review-swiper .swiper-wrapper");
    let activeSlide = document.querySelector(".review-swiper .swiper-slide-active");

    let wrapperRect = swiperWrapper.getBoundingClientRect();
    let clickX = event.clientX;
    let middleX = window.innerWidth / 2;

    if (clickX > middleX) {
        reviewsSwiper.slideNext();
    } else {
        reviewsSwiper.slidePrev();
    }
});


let heroSwiper = new Swiper(".hero-swiper", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,

    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


