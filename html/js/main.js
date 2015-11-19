$(function(){

    var $document = $(document),
        $window = $(window),
        sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    /*//////////////////////////////////////
    //  burger open close
    //////////////////////////////////////*/

    if($window.width() < 800){
        nav.on('click', function(){
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

    $('.scroll-to').on('click', function(){
        var scrollTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: parseInt($(scrollTo).offset().top)
        }, 500);
    });

    $('.scroll-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $document.scroll(function() {
        // bring scroll top button in view
        if ($document.scrollTop() >= 400) {
            $('.scroll-top').css('opacity', '.75');
        } else {
            $('.scroll-top').css('opacity', '0');
        }

        // shrink nav on scrolldown
        if ($document.scrollTop() >= 100) {
            nav.removeClass('splash');
        } else {
            nav.addClass('splash');
        }
    });

    $window.scroll(function() {
        // scroll top button not overlapping footer
        if($window.scrollTop() + $window.height() === $document.height()) {
            $('.scroll-top').addClass('bottom');
        } else {
            $('.scroll-top').removeClass('bottom');
        }

        if($window.width() >= 800){
            //active scrolling
            var cur_pos = $(this).scrollTop();
            sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('li').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"] > li').addClass('active');
                }
            });
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

    // function mailOut(name, email, message){
    //     var api_key = 'key-3e522d2966a5fbb738696e453ccde349';
    //     var domain = 'mail.laurenfazah.com';
    //     var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    //     var data = {
    //       from: name + ' <' + email + '>',
    //       to: 'laurenfazah@gmail.com',
    //       subject: 'Portfolio Message',
    //       text: message
    //     };

    //     mailgun.messages().send(data, function (error, body) {
    //       console.log(body);
    //     });
    // }

    function clearForm(){
        $('input[name="name"], input[name="email"], textarea[name="message"]').val('');
    }

    $('form[name="contact_form"]').submit(function(e){
        e.preventDefault();

        console.log("submit");

        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var message = $('textarea[name="message"]').val();

        $.ajax({
            url: "https://docs.google.com/forms/d/1UIWw1tq3kGQ4aBOwfysMoL_2GAw4H-RFssizhdqg9VI/formResponse",
            data: { "entry_1634697116": name,
                "entry_815480734": email,
                "entry_951513797": message
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    // success
                },
                200: function () {
                }
            }
        });

        $('.email-thanks').text('thanks for the message!');
        setTimeout(clearForm, 250);
    });

    // submit button control on form
    $('form > .contact-input').keyup(function() {
        var empty = false;
        $('form > .contact-input').each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            $('.submit').removeClass('ready');
        } else {
            $('.submit').addClass('ready');
        }
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
