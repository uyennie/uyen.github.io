// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('.foldertitle').mouseenter(function() {
        $('.folderhover').addClass('show');
    })

    $('.foldertitle').mouseleave(function() {
        $('.folderhover').removeClass('show');
    })

    //Rollover transparent
    $('.icon.r-transparent').mouseenter(function() {
        console.log( "target transparent!" );
        $('.rollover.r-transparent').addClass('show');
        console.log( "show tranpsarent!" );
    })

    $('.icon.r-transparent').mouseleave(function() {
        $('.rollover.r-transparent').removeClass('show');
    })

    //Rollover CCTV
    $('.icon.r-cctv').mouseenter(function() {
        $('.rollover.r-cctv').addClass('show');
    })

    $('.icon.r-cctv').mouseleave(function() {
        $('.rollover.r-cctv').removeClass('show');
    })

    //Rollover Green Screen
    $('.icon.r-greenscreen').mouseenter(function() {
        $('.rollover.r-greenscreen').addClass('show');
    })

    $('.icon.r-greenscreen').mouseleave(function() {
        $('.rollover.r-greenscreen').removeClass('show');
    })

    //Rollover password
    $('.icon.r-password').mouseenter(function() {
        $('.rollover.r-password').addClass('show');
    })

    $('.icon.r-password').mouseleave(function() {
        $('.rollover.r-password').removeClass('show');
    })

    //Rollover binary
    $('.icon.r-binary').mouseenter(function() {
        $('.rollover.r-binary').addClass('show');
    })

    $('.icon.r-binary').mouseleave(function() {
        $('.rollover.r-binary').removeClass('show');
    })

    //Rollover movie
    $('.icon.r-movie').mouseenter(function() {
        $('.rollover.r-movie').addClass('show');
    })

    $('.icon.r-movie').mouseleave(function() {
        $('.rollover.r-movie').removeClass('show');
    })

    //Rollover loading
    $('.icon.r-loading').mouseenter(function() {
        $('.rollover.r-loading').addClass('show');
    })

    $('.icon.r-loading').mouseleave(function() {
        $('.rollover.r-loading').removeClass('show');
    })

    //Rollover watermark
    $('.icon.r-watermark').mouseenter(function() {
        $('.rollover.r-watermark').addClass('show');
    })

    $('.icon.r-watermark').mouseleave(function() {
        $('.rollover.r-watermark').removeClass('show');
    })

    //Toggle Files
    $(".item.page.t-1").click(function(){
        $(".file.t-1").toggle();
      });

    $(".item.page.t-2").click(function(){
        console.log("heeeeellloo")
        $(".file.t-2").toggle();
    });
    $(".item.page.t-3").click(function(){
        $(".file.t-3").toggle();
    });

    //Rollover main image
    $('.featureimage img').mouseenter(function() {
        console.log("hello")
        $('.infos').addClass('show');
    })

    $('.featureimage img').mouseleave(function() {
        $('.infos').removeClass('show');
    })

});

