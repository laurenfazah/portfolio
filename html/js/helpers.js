$(function(){

    var $body = $('body'),
        $tweetTextarea = $('textarea[name="ask-hh"]'),
        $viewMore = $('.view-more-button'),
        $viewMoreDesktop = $('.view-more-button.social-content'),
        contentHeight = 300,
        $nav = $('.nav-nav'),
        $burger = $('.burger-box'),
        $menu = $('.menu'),
        $menuItems = $('.menu > ul > li > a'),
        videoCTA = $('.video-cta');

    var hhccHandles = ['sjcallan', 'hillholliday', 'erskinerob', 'cindymstockwell', 'mcproulx', 'JZ2000', 'triliamedia', 'KarenKaplanHH'];

    ///////////////////
    // establish content height
    ///////////////////
    var checkContentHeight = function(){
        contentHeight = 300;
        $('.articles:lt(3)').each(function() {
            contentHeight += $(this).height();
        });
    }
    checkContentHeight();

    ///////////////////
    // burger menu
    ///////////////////
    var toggleMobileMenu = function(){
        if ($burger.hasClass('open')) {
            $burger.removeClass('open').addClass('closed');
            $menu.removeClass('menu-open');
        }
        else {https://open.spotify.com/track/20GiNYO3NzOqBq9i8k8l9S
            $burger.addClass('open').removeClass('closed');
            $menu.addClass('menu-open');
        }
    };

    $burger.on('click', function(e){
        e.preventDefault();
        toggleMobileMenu();
    });

    $menuItems.on('click', function(e){
        e.preventDefault();
        toggleMobileMenu();
    });

    ///////////////////
    // nav change on scroll
    ///////////////////
    if ($(window).scrollTop() > 0) {
        $nav.addClass('scrolling-page');
    } else {
        $nav.removeClass('scrolling-page');
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $nav.addClass('scrolling-page');
        } else {
            $nav.removeClass('scrolling-page');
        }
    });

    ///////////////////
    // smooth scrolling
    ///////////////////
    var smoothScroll = function(scrollTo){
        $('html, body').animate({
            scrollTop: parseInt($(scrollTo).offset().top-80)
        }, 500);
    }
    $('.scroll-to').on('click', function(){
        var scrollTo = $(this).attr('href');
        smoothScroll(scrollTo);
    });

    ////////////////////
    // slick carousel
    ////////////////////

    // photo gallery
    $('.photo.stream > .block-content > ul').slick({
        slide: '.photo.stream > .block-content > ul >li',
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:1,
        adaptiveHeight: true,
        touchThreshold: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    // video gallery
    $('.video.stream > .block-content > ul').slick({
        slide: '.video.stream > .block-content > ul >li',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows:1,
        adaptiveHeight: true,
        touchThreshold: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //team
    if($(window).width() < 800){
        $('.team.stream > .block-content > ul').slick({
            slide: '.team.stream > .block-content > ul >li',
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows:1,
            adaptiveHeight: true,
            touchThreshold: 3
        });
    }

    ///////////////////
    // view more buttons
    ///////////////////
    var checkViewButton = function(element){
        if (element.hasClass('social')){
            if ($('.social-feed').find('.social-wrapper').hasClass('view-more')) {
                element.text('view less');
            } else {
                element.text('view more');
            }
        } else if (element.hasClass('content')) {
            if (($('.content').find('li.articles').hasClass('view-more')) || ($('.content').hasClass('view-more'))) {
                element.text('view less');
            } else {
                element.text('view more');
            }
        } else if (element.hasClass('social-content')){
            if ($('.stream.social-content').hasClass('view-more')) {
                element.text('view less');
            } else {
                element.text('view more');
            }
        }
    }

    $viewMore.on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('social')) {
            $('.social-feed').find('.social-wrapper').toggleClass('view-more');
            checkViewButton($(this));
        } else if ($(this).hasClass('content')) {
            if($(window).width() < 800){
                $('.content').find('li.articles').toggleClass('view-more');
            } else {
                $('.content').toggleClass('view-more');
            }
            checkViewButton($(this));
        } else if ($(this).hasClass('social-content')) {
            $('.stream.social-content').toggleClass('view-more');
            checkViewButton($(this));
        }

    });

    ///////////////////
    // show more content desktop
    ///////////////////
    var setContentHeight = function(){
        if($(window).width() >= 800){
            $('section.social, section.content').height(contentHeight);
            if($('li.articles').length < 4){
                $('.content .view-more-button').hide();
            }
        } else {
            if($('li.articles').length < 2){
                $('.content .view-more-button').hide();
            }
        }
    }
    setContentHeight();

    $(window).on('resize', function(){
        checkContentHeight();
        setContentHeight();
    });

    ///////////////////
    // video modal
    ///////////////////
    var launchVideoModal = function(videoType, videoID){
        var video;
        if($(window).width() <= 800){ // if on a mobile device
            if(videoType.toLowerCase() === 'youtube'){
                video = 'https://www.youtube.com/embed/'+videoID+'?autoplay=true&modestbranding=true?html5=1';
            }
            else{
                video = 'https://player.vimeo.com/video/'+videoID+'?title=0&byline=0&portrait=0';
            }
            window.open(video,'_blank');
        }
        else{
            if(videoType.toLowerCase() === 'youtube'){
                video = '<iframe src="https://www.youtube.com/embed/'+videoID+'?autoplay=true&modestbranding=true" frameborder="0" allowfullscreen></iframe>';
            }
            else{
                video = '<iframe src="https://player.vimeo.com/video/'+videoID+'?title=0&byline=0&portrait=0" width="500" height="211" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
            $body.append('<div class="video-modal-container"><div class="video-modal">'+video+'<button class="close-modal">Close Video</button></div></div>');
            setTimeout(function(){
                $body.addClass('modal-active');
            },50);
        }
    };

    var closeModal = function(){
        $body.removeClass('modal-active');
        window.history.pushState('', '', '/');
        setTimeout(function(){
            $body.find('.video-modal-container').remove();
            $body.find('.speaker-modal-container').remove();
        },400);
    };

    $body.on('click','.close-modal',function(){
        closeModal();
    });

    videoCTA.on('click',function(){
        var videoType = $(this).data('video-type');
        var videoID = $(this).data('video-id');
        launchVideoModal(videoType,videoID);
    });

    ///////////////////
    // tweet to HH
    ///////////////////
    $('.launch-tweet').on('click',function(e){
        e.preventDefault();
        tweetValue = '@hillholliday '+$tweetTextarea.val();
        finalTweet = encodeURIComponent(tweetValue);
        tweetIntent = "https://twitter.com/intent/tweet?text="+finalTweet;
        $tweetTextarea.val('');
        popItUp(tweetIntent,300,600);
    });

    //////////////////
    // siphon
    //////////////////
    $.ajax({
      method: "GET",
      url: siphonEndpoint,
    }).done(function(response) {
        var totalPosts = response.data.length;

        for (var i=0;i<totalPosts;i++){
            var post = response.data[i];
            if(post.provider === "twitter"){
                var socialMessage = findHyperlinks(post.message); //for twitter only rn
                twitterTemplate(post.id,post.userimageurl,post.full_name,post.username,post.created_at,post.social_id,socialMessage,post.image);
            }
            else if(post.provider === "instagram"){
                var socialMessage = findInstaHyperlinks(post.message); //for twitter only rn
                instagramTemplate(post.id,post.userimageurl,post.full_name,post.username,post.created_at,post.social_id,socialMessage,post.image);
            }
        }
    });

    var twitterTemplate = function(tweetID,profileImage,twitterName,twitterUser,twitterTime,twitterTweetUrl,twitterTweetEntity,twitterImage, source){
        var intentReply = 'https://twitter.com/intent/tweet?in_reply_to='+twitterTweetUrl;
        var intentRetweet = 'https://twitter.com/intent/retweet?tweet_id='+twitterTweetUrl;
        var intentFavorite = 'https://twitter.com/intent/favorite?tweet_id='+twitterTweetUrl;
        var msgTime = twitterTime;
        var currentImage = "";

        if(twitterImage !== null){
            currentImage = "<img src=\""+ twitterImage +"\">";
        }

        var twitterMarkup="";
        twitterMarkup += "   <div data-id=\""+tweetID+"\" class=\"social-wrapper\">";
        twitterMarkup += "        <p class=\"user-message\">"+ twitterTweetEntity +"<\/p>";
        twitterMarkup += "        <div class=\"header\">";
        if (hhccHandles.indexOf(twitterUser) > -1) {
            twitterMarkup+= "          <img src=\"/assets/img/logo-hhcc-76x76.png\"  alt=\"hhcc-logo\" class=\"hhcc-employee\">";
        };
        twitterMarkup += "             <p class=\"user-name\">"+ twitterName +"<\/p>";
        twitterMarkup += "             <a class=\"user-handle\" href=\"https:\/\/twitter.com\/"+ twitterUser +"\" target=\"_blank\">@"+ twitterUser +"<\/a>";
        twitterMarkup += "             <div class=\"social-icon twitter\">";
        twitterMarkup += "             <\/div>";
        twitterMarkup += "        <\/div>";
        twitterMarkup += "        <div class=\"message-img\">"+currentImage+"<\/div>";
        twitterMarkup += "    <\/div>";

        $('.social-feed').append(twitterMarkup);

        $('.hashtag').each(function(){
            createHashtagLinks($(this));
        });

        $('.mention').each(function(){
            createMentionLinks($(this));
        });
    };

    var instagramTemplate = function(instaID,instaProfileImg,instaName,instaUsername,instaTime,instaUrl,instaBody, instaImage, source){
        var instaUserFullName = instaName;
        var msgTime = instaTime;

        if(typeof instaName === undefined || instaName.length === 0){
            instaUserFullName = instaUsername;
        }

        var instagramMarkup="";
        instagramMarkup += "<div data-id=\""+instaID+"\" class=\"social-wrapper\">";
        instagramMarkup += "    <p class=\"user-message\">"+ instaBody +"<\/p>";
        instagramMarkup += "    <div class=\"header\">";
        if (hhccHandles.indexOf(instaUsername) > -1) {
            instagramMarkup+= "     <img src=\"/assets/img/logo-hhcc-76x76.png\"  alt=\"hhcc-logo\" class=\"hhcc-employee\">";
        };
        instagramMarkup += "        <p class=\"user-name\">"+ instaUserFullName +"<\/p>";
        instagramMarkup += "        <a class=\"user-handle\" href=\"https:\/\/instagram.com\/"+ instaUsername +"\" target=\"_blank\">@"+ instaUsername +"<\/a>";
        instagramMarkup += "        <div class=\"social-icon instagram\">";
        instagramMarkup += "        <\/div>";
        instagramMarkup += "    <\/div>";
        instagramMarkup += "    <div class=\"message-img\">";
        instagramMarkup += "        <img src=\""+ instaImage + "\">";
        instagramMarkup += "    <\/div>";
        instagramMarkup += "<\/div>";

        $('.social-feed').append(instagramMarkup);

        $('.insta-hashtag').each(function(){
            createInstaHashtagLinks($(this));
        });

        $('.insta-mention').each(function(){
            createInstaMentionLinks($(this));
        });
    };

    var popItUp = function(url,height,width) {
        newwindow=window.open(url,'name','height='+height+',width='+width);
        if (window.focus) {newwindow.focus();}
        return false;
    };

    var findHyperlinks = function(string){
        // get hashtags
        var stringWithHashtags = string.replace(/(^|\s)(#[a-z\d-]+)/ig, "$1<a target='_blank' class='hashtag'>$2</a>");

        // get mentions
        var stringWithMentions = stringWithHashtags.replace(/(^|\s)(@[a-z\d-]+)/ig, "$1<a target='_blank' class='mention'>$2</a>");

        // get URLs
        var urlRegex = /(HTTP:\/\/|HTTPS:\/\/)([a-zA-Z0-9.\/&?_=!*,\(\)+-]+)/i;
        var stringWithURLs = stringWithMentions.replace(urlRegex, "<a href=\"$1$2\" target='_blank' class='linky'>$1$2</a>")

        return stringWithURLs;
    };

    var findInstaHyperlinks = function(string){
        // get hashtags
        var stringWithHashtags = string.replace(/(^|\s)(#[a-z\d-]+)/ig, "$1<a target='_blank' class='insta-hashtag'>$2</a>");

        // get mentions
        var stringWithMentions = stringWithHashtags.replace(/(^|\s)(@[a-z\d-]+)/ig, "$1<a target='_blank' class='insta-mention'>$2</a>");

        // get URLs
        var urlRegex = /(HTTP:\/\/|HTTPS:\/\/)([a-zA-Z0-9.\/&?_=!*,\(\)+-]+)/i;
        var stringWithURLs = stringWithMentions.replace(urlRegex, "<a href=\"$1$2\" target='_blank' class='linky'>$1$2</a>")

        return stringWithURLs;
    };

    //twitter
    var createHashtagLinks = function(element){
        var hashtag = element.text().slice(1);
        var hashLink = "https://twitter.com/hashtag/"+hashtag;
        element.attr('href', hashLink);
    };

    var createMentionLinks = function(element){
        var mention = element.text().slice(1);
        var mentionLink = "https://twitter.com/"+mention;
        element.attr('href', mentionLink);
    };

    //instagram
    var createInstaHashtagLinks = function(element){
        var hashtag = element.text().slice(1);
        var hashLink = "https://www.instagram.com/explore/tags/"+hashtag;
        element.attr('href', hashLink);
    };

    var createInstaMentionLinks = function(element){
        var mention = element.text().slice(1);
        var mentionLink = "https://instagram.com/"+mention;
        element.attr('href', mentionLink);
    };

});

