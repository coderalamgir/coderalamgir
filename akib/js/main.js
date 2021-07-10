$(document).ready(function(){
    $(".header-top").sticky({topSpacing:0});

    $('.mainmenu').slicknav();
    $.scrollUp({
        scrollText:'Instant Quote',
    });

    var slider = tns({
        container: '.slider-list',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"bottom",

      });








});