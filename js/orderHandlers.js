$('.point--label').click(() => {
    if ($('#point').is(':checked')){
        $('.point--input input').attr('disabled', '')
    }
    else {
        $('.point--input input').removeAttr('disabled')
    }
})

$('.pay__methods-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})
