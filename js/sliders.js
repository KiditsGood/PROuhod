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