$(function() {
    $("div").on("click", function() {
        $("nav ul").toggleClass("active");
    }), $(".slick-it").slick({
        slide: ".sliding",
        dots: !0,
        arrows: !0,
        infinite: !0
    });
});