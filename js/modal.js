$('.menu__item:nth-child(3)').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.soc__item.user').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.login__form-forgot').click(() => {
    $('#reset').modal({
        fadeDuration: 200
    })
})

$('.login__form-cancel').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.reset__form').on('submit', function (event) {
    event.preventDefault()

    //ajax(Если удачно, то открываем модалку в саксессе (на вёрстке просто некст строчка от этой))
    //ajax(Если неудачно, то подсвечиваем в самом окне, не открывая)

    $('#success').modal({
        fadeDuration: 200
    })
})

$('.login__form-text--again').click(() => {
    $('#reset').modal({
        fadeDuration: 200
    })
})

$('.reg').click(() => {
    $('#reg').modal({
        fadeDuration: 200
    })
})

$('.entry').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.default').on($.modal.BEFORE_OPEN, function () {
    $('html').css({
        overflow: 'hidden'
    })
})

$('.default').on($.modal.AFTER_CLOSE, function () {
    $('html').css({
        overflow: 'visible'
    })
})

$('.order__item-title--exist').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.footer__contacts-item:last-child').click(() => {
    $('#map').modal({
        fadeDuration: 200
    })
})