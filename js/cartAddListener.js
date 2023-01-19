const minusButton = $('.product__col-button.minus')
const plusButton = $('.product__col-button.plus')
const productButton = $('.product__button')

productButton.click(function () {
    $(this).addClass('hidden')
    $(this).next().removeClass('hidden')
})

minusButton.click(function minusHandler () {
    let colInput = $(this).next()
    let colBlock = $(this).parent()

    if ($(this).hasClass('cols')){
        if (colInput.val() <= 1) {
            colInput.val(1)
        }
        else {
            colInput.val(Number(colInput.val()) - 1)
        }
    }
    else {
        if (colInput.val() <= 1) {
            colBlock.addClass('hidden')
            colBlock.prev().removeClass('hidden')
        }
        else {
            colInput.val(Number(colInput.val()) - 1)
        }
    }


})

plusButton.click(function () {
    let colInput = $(this).prev()

    colInput.val(Number(colInput.val()) + 1)
})

$(window).on('load', function () {
    if ($(window).width() < 1000) {
        $('.cart__button').text('Оформить')
    }
})