$(function() {
    const subMenu = $('.sub')
    const bodySelector = $('body')

    $(window).on("scroll", function() {
        if($(window).width() > 999) {
            if($(window).scrollTop() > 50) {
                $(".header__top").addClass("scroll")
            } else {
                $(".header__top").removeClass("scroll")
            }
        }
        else{
            if($(window).scrollTop() > 50) {
                $(".header__top").addClass("scroll")
            } else {
                $(".header__top").removeClass("scroll")
            }
        }
    });

    $('.search__catalog').click(function () {
        if (subMenu.hasClass('active')) {
            subMenu.removeClass('active')
            bodySelector.removeClass('hidden')
            $('#overlay').remove()
        }
        else {
            subMenu.addClass('active')
            bodySelector.addClass('hidden').append('<div id="overlay"></div>')
        }
    })

    $(document).click(function (e) {
        if ($(window).width() > 999) {
            if ($(e.target).closest(".search").length) {

            }
            else {
                subMenu.removeClass('active')
                $('#overlay').remove()
                bodySelector.removeClass('hidden')
            }
        }
    })

    $('button.sub__item-link').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            subMenu.removeClass('open')
        }
        else {
            $('button.sub__item-link').removeClass('active')

            $(this).addClass('active')
            subMenu.addClass('open')
        }
    })
});
