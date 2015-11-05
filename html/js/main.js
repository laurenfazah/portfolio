$(function() {
    var $document = $(document);
    $(window).width() < 800 && $("nav").on("click", function() {
        $("nav ul").toggleClass("active");
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
        $document.scrollTop() >= 400 ? $(".scroll-to.top").css("opacity", ".95") : $(".scroll-to.top").css("opacity", "0");
    }), $(".who").on("click", function() {
        $(".who p").toggleClass("active"), $(".who img").toggleClass("face-up");
    }), $(".card").flip(), $(".slick-it").slick({
        slide: ".slick-it li",
        dots: !1,
        arrows: !0,
        infinite: !0
    }), $('form[name="contact_form"]').submit(function(e) {
        e.preventDefault(), $('input[name="name"], input[name="email"], textarea[name="message"]').val(""), 
        $(".email-thanks").text("thanks for the message!");
    });
});