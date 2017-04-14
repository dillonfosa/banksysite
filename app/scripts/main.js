$(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true
    });
    new WOW().init();
    echo.init({
        offset: 100
        , throttle: 250
        , unload: false
        , callback: function (element, op) {
            console.log(element, 'has been', op + 'ed')
        }
    });
    
});

$(document).ready(function ($) {
        $('.image img').click(function (event) {
            // detect data-id for later
            var id = $(this).data('id');
            // grab src to replace #featured
            var src = $(this).attr('src');
            // set featured image
            var img = $('#featured img');
            img.fadeOut('fast', function () {
                $(this).attr({
                    src: src
                , });
                $(this).fadeIn('fast');
            });
        });
    });

