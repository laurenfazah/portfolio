$(function(){
    console.log('js');
    $('div').on('click', function(){
        console.log("zombie");
        $('nav ul').toggleClass('active');
    });

});
