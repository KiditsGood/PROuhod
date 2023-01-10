$('.sort__params-visible').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $('.sort__params-hidden').slideUp(200)
    }
    else {
        $(this).addClass('active')
        $('.sort__params-hidden').slideDown(200)
    }
})

$('.sort__params-hidden--item').click(function () {
    $('.sort__params-visible p').html($(this).text())
    $('.sort__params-visible').removeClass('active')
    $('.sort__params-hidden').slideUp(200)
})

$(document).click(function (e) {
    if ($(window).width() > 999) {
        if ($(e.target).closest(".sort__params").length) {

        }
        else {
            $('.sort__params-visible').removeClass('active')
            $('.sort__params-hidden').slideUp(200)
        }
    }
})

$('.sort__params-mobile').click(() => {
    $('.catalog__field-filter').addClass('active')
    $('body').addClass('hidden')
})

$('.filter__back-button').click(() => {
    $('.catalog__field-filter').removeClass('active')
    $('body').removeClass('hidden')
})