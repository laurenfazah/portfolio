$(function(){

    /*//////////////////////////////////////
    //  burger open close
    //////////////////////////////////////*/
    if($(window).width() < 800){
        $('nav').on('click', function(){
            $('nav ul').toggleClass('active');
        });
    }

    var closeMenu = function(){
        if ($('nav ul').hasClass('active')){
            $('nav ul').removeClass('active');
        }
    };

    $('header').on('click', function(){
        closeMenu();
    });

    $('main').on('click', function(){
        closeMenu();
    });

    $('footer').on('click', function(){
        closeMenu();
    });

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
    //  resume section
    //////////////////////////////////////*/
    // $('#card').on('click', function(){
    //     console.log("click");
    //     $('this').flip();
    // });
    $(".card").flip({
      // axis: 'x',
      // trigger: 'click'
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
