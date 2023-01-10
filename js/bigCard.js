$('.picture__slider-item.swiper-slide').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    $('.picture__main-image').attr('src', $(this).attr('src'))
})

$('.tabs__buttons-item').click(function () {
    $(this).addClass('active')
        .siblings()
        .removeClass('active')
        .parent()
        .next()
        .find('.tabs__field-item')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
})