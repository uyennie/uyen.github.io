// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('.car').mouseenter(function() {
        $('.bike').addClass('show');
    })

    $('.car').mouseleave(function() {
        $('.bike').removeClass('show');
    })

});

