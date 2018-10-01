$(document).ready(function(){

    $('.boton-scroll').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        },500);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.boton-scroll').slideDown(300);
        } else {
            $('.boton-scroll').slideUp(300);
        }
    });
});