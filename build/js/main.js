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
    //  intro section
    //////////////////////////////////////*/
    $('.who').on('click', function(){
        // open who am i
        $('.who p').toggleClass('active');
        // flip arrow
        $('.who img').toggleClass('face-up');
    });

    /*//////////////////////////////////////
    //  fun facts carousel
    //////////////////////////////////////*/
    $('.slick-it').slick({
        slide: '.slick-it li',
        dots: false,
        arrows: true,
        infinite: true,
    });

});
