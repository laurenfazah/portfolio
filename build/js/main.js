$(function(){

    var $document = $(document);

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
    //  page scrolling
    //////////////////////////////////////*/

    $('.scroll-to > a').on('click', function(){
        var scrollTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: parseInt($(scrollTo).offset().top)
        }, 500);
    });

    $('.scroll-to.top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $document.scroll(function() {
        if ($document.scrollTop() >= 400) {
            $('.scroll-to.top').css('opacity', '.95');
        } else {
            $('.scroll-to.top').css('opacity', '0');
        }
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
