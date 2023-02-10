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

$('.my__wrap-item--field').click(function () {
    if ($(this).next().css('display') === 'none') {
        $('.my__wrap-hidden').slideUp(200)

        $(this).next().slideDown(200)
    }
    else {
        $(this).next().slideUp(200)
    }
})

$('.data__item-change').click(function () {
    if ($('.data__item-next--text').attr('readonly')) {
        $('.data__item-next--text').removeAttr('readonly')
        $(this).text('Сохранить')
    }
    else {
        $('.data__item-next--text').attr('readonly', '')
        $(this).text('Редактировать')
    }
})