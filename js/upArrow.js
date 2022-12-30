$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $('.up').html('<button class="up__outer"><svg><use xlink:href="sprite.svg#arrow"></use></svg></button>')
            $('.up__outer').click(() => {
                $('html, body').animate({scrollTop: 0}, 300);
            })
        } else {
            $('.up__outer').remove()
        }
    });
});