$(function(){

    /*//////////////////////////////////////
    //  burger open close
    //////////////////////////////////////*/
    if($(window).width() < 800){
        $('nav').on('click', function(){
            $('nav ul').toggleClass('active');
        });
    }

    /*//////////////////////////////////////
    //  intro info toggle
    //////////////////////////////////////*/
    $('.who').on('click', function(){
        $('.who p').toggleClass('active');
    });

    /*//////////////////////////////////////
    //  fun facts carousel
    //////////////////////////////////////*/
    $('.slick-it').slick({
        slide: '.slick-it li',
        dots: false,
        arrows: true,
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 3
    });

});
