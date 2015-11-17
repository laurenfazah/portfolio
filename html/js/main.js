$(function() {
    function clearForm() {
        $('input[name="name"], input[name="email"], textarea[name="message"]').val("");
    }
    var $document = $(document);
    $(window).width() < 800 ? $("nav").on("click", function() {
        $("nav ul").toggleClass("active");
    }) : $("nav .burger").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    var closeMenu = function() {
        $("nav ul").hasClass("active") && $("nav ul").removeClass("active");
    };
    $("header, main, footer").on("click", function() {
        closeMenu();
    }), $(".scroll-to > a").on("click", function() {
        var scrollTo = $(this).attr("href");
        $("html, body").animate({
            scrollTop: parseInt($(scrollTo).offset().top)
        }, 500);
    }), $(".scroll-to.top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    }), $document.scroll(function() {
        $document.scrollTop() >= 400 ? $(".scroll-to.top").css("opacity", ".75") : $(".scroll-to.top").css("opacity", "0"), 
        $document.scrollTop() >= 100 ? $("nav").removeClass("splash") : $("nav").addClass("splash");
    }), $(".who").on("click", function() {
        $(".who p").toggleClass("active"), $(".who img").toggleClass("face-up");
    }), $(".card").flip(), $(".slick-it").slick({
        slide: ".slick-it li",
        dots: !1,
        arrows: !0,
        infinite: !0
    }), $(".portfolio-carousel").slick({
        dots: !1,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: !0
    }), $('form[name="contact_form"]').submit(function() {
        $(".email-thanks").text("thanks for the message!"), setTimeout(clearForm, 250);
    }), $(".click-thru").each(function() {
        var linkContent = $(this).html();
        linkContent += '<img class="link-icon" src="img/link_out.svg"/>', $(this).html(linkContent);
    });
});