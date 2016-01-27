$(function() {
    function clearForm() {
        $('input[name="name"], input[name="email"], textarea[name="message"]').val("");
    }
    var $document = $(document), $window = $(window), sections = $("section"), nav = $("nav"), nav_height = nav.outerHeight();
    $window.width() < 800 ? nav.on("click", function() {
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
    }), $(".scroll-to").on("click", function() {
        var scrollTo = $(this).attr("href");
        $("html, body").animate({
            scrollTop: parseInt($(scrollTo).offset().top + 80)
        }, 500);
    }), $(".scroll-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    }), $document.scroll(function() {
        $document.scrollTop() >= 400 ? $(".scroll-top").css({
            opacity: ".75",
            cursor: "pointer"
        }) : $(".scroll-top").css({
            opacity: "0",
            cursor: "auto"
        }), $document.scrollTop() >= 100 ? nav.removeClass("splash") : nav.addClass("splash");
    }), $window.scroll(function() {
        if ($window.scrollTop() + $window.height() === $document.height() ? $(".scroll-top").addClass("bottom") : $(".scroll-top").removeClass("bottom"), 
        $window.width() >= 800) {
            var cur_pos = $(this).scrollTop();
            sections.each(function() {
                var top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight();
                cur_pos >= top && bottom >= cur_pos && (nav.find("li").removeClass("active"), sections.removeClass("active"), 
                $(this).addClass("active"), nav.find('a[href="#' + $(this).attr("id") + '"] > li').addClass("active"));
            });
        }
    }), $(".who").on("click", function() {
        $(".who p").toggleClass("active"), $(".who img").toggleClass("face-up");
    }), $(".card").flip(), $(".piece").flip(), $('form[name="contact_form"]').submit(function(e) {
        e.preventDefault();
        var name = $('input[name="name"]').val(), email = $('input[name="email"]').val(), message = $('textarea[name="message"]').val(), body = {
            name: name,
            email: email,
            message: message
        };
        $.ajax({
            type: "POST",
            data: body,
            url: "/mailgun",
            success: function(data) {}
        }), $(".email-thanks").text("thanks for the message!"), setTimeout(clearForm, 250);
    }), $("form > .contact-input").keyup(function() {
        var empty = !1;
        $("form > .contact-input").each(function() {
            "" === $(this).val() && (empty = !0);
        }), empty ? $(".submit").removeClass("ready") : $(".submit").addClass("ready");
    }), $(".click-thru").each(function() {
        var linkContent = $(this).html();
        linkContent += '<img class="link-icon" src="img/link_out.svg"/>', $(this).html(linkContent);
    });
});