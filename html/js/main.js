$(function(){

    var $document = $(document);

    /*//////////////////////////////////////
    //  burger open close
    //////////////////////////////////////*/

    if($(window).width() < 800){
        $('nav').on('click', function(){
            $('nav ul').toggleClass('active');
        });
    } else {
        $('nav .burger').on('click', function(){
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }

    var closeMenu = function(){
        if ($('nav ul').hasClass('active')){
            $('nav ul').removeClass('active');
        }
    };

    $('header, main, footer').on('click', function(){
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
            $('.scroll-to.top').css('opacity', '.75');
        } else {
            $('.scroll-to.top').css('opacity', '0');
        }

        if ($document.scrollTop() >= 100) {
            $('nav').removeClass('splash');
        } else {
            $('nav').addClass('splash');
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
    // jquery flip()
    $(".card").flip();


    /*//////////////////////////////////////
    //  fun facts carousel
    //////////////////////////////////////*/

    $('.slick-it').slick({
        slide: '.slick-it li',
        dots: false,
        arrows: true,
        infinite: true,
    });

    /*//////////////////////////////////////
    //  portfolio carousel
    //////////////////////////////////////*/

    $('.portfolio-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true
    });

    /*//////////////////////////////////////
    //  contact form
    //////////////////////////////////////*/

    $('form[name="contact_form"]').submit(function(){
        // $('input[name="name"], input[name="email"], textarea[name="message"]').val('');
        // $('.email-thanks').text('thanks for the message!');
    });

    /*//////////////////////////////////////
    //  link out
    //////////////////////////////////////*/
    $('.click-thru').each(function(){
        var linkContent = $(this).html();
        linkContent += '<img class="link-icon" src="img/link_out.svg"\/>';
        $(this).html(linkContent);
    });


});
