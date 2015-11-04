$(function() {
    $(window).width() < 800 && $("nav").on("click", function() {
        $("nav ul").toggleClass("active");
    });
    var closeMenu = function() {
        $("nav ul").hasClass("active") && $("nav ul").removeClass("active");
    };
    $("header").on("click", function() {
        closeMenu();
    }), $("main").on("click", function() {
        closeMenu();
    }), $("footer").on("click", function() {
        closeMenu();
    }), $(".who").on("click", function() {
        $(".who p").toggleClass("active"), $(".who img").toggleClass("face-up");
    }), $(".card").flip({}), $(".slick-it").slick({
        slide: ".slick-it li",
        dots: !1,
        arrows: !0,
        infinite: !0
    });
});