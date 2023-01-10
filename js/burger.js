$(window).on('load', function () {
    if ($(window).width() < 1000) {
        $('.header__nav').prepend(`
            <button class="button button--light mobile__button" onclick="catalogOpenBurger()">Каталог и поиск</button>
        `).append(`
            <div class="footer__menu">
                <a href="" class="footer__menu-item">Доставка и оплата</a>
                <a href="" class="footer__menu-item">Контакты</a>
                <a href="" class="footer__menu-item">О нас</a>
            </div>
        `)
    }
})

$('#burger').click(function () {
    $(this).toggleClass('open')
    $('.header__nav').slideToggle('200')
    $('body').toggleClass('hidden')
})

$('.menu__item:first-child').click(() => {catalogOpen()})

function catalogOpen() {
    $('.search').slideToggle(200)
    $('body').toggleClass('hidden')
    $('.menu__item:first-child').toggleClass('active')

    $('#burger').removeClass('open')
    $('.header__nav').slideUp(200)
}

function catalogOpenBurger() {
    $('.search').slideToggle(200)
    $('.menu__item:first-child').toggleClass('active')

    $('#burger').removeClass('open')
    $('.header__nav').slideUp(200)
}