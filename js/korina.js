$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on')
        };
    });
}); //jquery end