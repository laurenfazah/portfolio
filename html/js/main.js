$(function() {
    $(window).width() < 800 && $("nav").on("click", function() {
        $("nav ul").toggleClass("active");
    }), $(".who").on("click", function() {
        $(".who p").toggleClass("active");
    }), $(".slick-it").slick({
        slide: ".slick-it li",
        dots: !1,
        arrows: !0,
        infinite: !0
    });
});