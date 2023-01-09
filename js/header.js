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
    });

    $('.search__catalog').click(function () {
        if (subMenu.hasClass('active')) {
            subMenu.removeClass('active')
            bodySelector.removeClass('hidden')
            $('#overlay').removeClass('active')
        }
        else {
            subMenu.addClass('active')
            bodySelector.addClass('hidden')
            $('#overlay').addClass('active')
        }
    })

    $(document).click(function (e) {
        if ($(window).width() > 999) {
            if ($(e.target).closest(".search").length) {

            }
            else {
                subMenu.removeClass('active')
                $('#overlay').removeClass('active')
                bodySelector.removeClass('hidden')
            }
        }
    })

    $('button.sub__item-link').click(function () {
        if ($(window).width() > 999) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                subMenu.removeClass('open')
            }
            else {
                $('button.sub__item-link').removeClass('active')

                $(this).addClass('active')
                subMenu.addClass('open')
            }
        }
        else {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).next().slideUp(200)
            }
            else {
                $('button.sub__item-link').removeClass('active')
                $('.sub__item-hidden').slideUp(200)

                $(this).addClass('active')
                $(this).next().slideDown(200)
            }
        }
    })
});
