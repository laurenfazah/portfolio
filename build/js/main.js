$(function(){

    /*//////////////////////////////////////
    //  burger open close
    //////////////////////////////////////*/
    $('nav').on('click', function(){
        $('nav ul').toggleClass('active');
    });

    /*//////////////////////////////////////
    //  fun facts carousel
    //////////////////////////////////////*/
    $('.slick-it').slick({
        slide: '.sliding',
        dots: true,
        arrows: true,
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 3
    });

});
