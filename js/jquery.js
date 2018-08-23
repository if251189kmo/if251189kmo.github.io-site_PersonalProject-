(function ($) {
    $(function () {
        $('icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);
/* 

$('.menuOpen').on('click', function (e) {
    e.preventDefault;
    $(this).toggleclass('menuOpen-aktive')
});

 */