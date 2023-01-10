const noticeSlider = new Swiper('.notice', {
    autoplay: true,
    loop: true,
    navigation: {
        prevEl: '.notice__nav.prev',
        nextEl: '.notice__nav.next'
    },
    pagination: {
        el: '.notice__pagination',
        clickable: true
    }
})

const brandsSlider = new Swiper('.brands__field', {
    autoplay: true,
    loop: true,
    breakpoints: {
        0: {
          slidesPerView: 4
        },
        500: {
            slidesPerView: 5
        },
        700: {
            slidesPerView: 6
        },
        800: {
            slidesPerView: 7
        },
        850: {
          slidesPerView: 8
        },
        1000: {
            slidesPerView: 6
        },
        1300: {
            slidesPerView: 7
        },
        1400: {
            slidesPerView: 8
        },
        1500: {
            slidesPerView: 9
        }
    },
    navigation: {
        prevEl: '.brands__nav.prev',
        nextEl: '.brands__nav.next'
    }
})

const pictureSlider = new Swiper('.picture__slider .swiper', {
    spaceBetween: 8,
    loop: true,
    navigation: {
        prevEl: '.picture__slider-nav.prev',
        nextEl: '.picture__slider-nav.next'
    },
    breakpoints: {
        360: {
            slidesPerView: 3
        },
        530: {
            slidesPerView: 4
        },
        700: {
            slidesPerView: 5
        }
    }
})

const withSlider = new Swiper('.with .swiper', {
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.with__buttons-nav.prev',
        nextEl: '.with__buttons-nav.next'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        410: {
            slidesPerView: 2
        },
        585: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1480: {
            slidesPerView: 5
        }
    }
})