$(document).ready(function(){
    $(".header-top").sticky({topSpacing:0});
    $('.mainmenu').slicknav();
    $.scrollUp({
        scrollText:'Instant Quote',
    });
    /* SLIDER JQUERY*/
    var slider = tns({
        container: '.slider-list',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controls:false
    });
    /* CREATIVE JQUERY*/
    var slider = tns({
        container: '.creative-list',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
    });
    var slider = tns({
        container: '.team-list',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
    });
    var slider = tns({
        container: '.responsive-list',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
        controls:false
    });
      








});