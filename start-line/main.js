var w;
var h;
var count = 0;
var hue = 0;
var imgcount = 0;

var str = "* Will it eventually come to nothing?. This nightmare I have every night. Will all the dreams become memories?. Your hands as if you're going to catch them,. At the end of this grey reality. Tell me,. The darkness will call me again. The name wandering around my lips,. This place is our start line. The meaning of this sad dream. Your's and my island. My heart sinks into a maze of memories. Don't forget this place,. The deepest part of the eternal dream,. So that the spell won't unravel. A sleeping blue secret. Let's escape tonight.";

var sentences = str.split(".");
console.log(sentences);

var lastScrollTop = 0;
var blur = 0;
var blur_r = 0;
var reverse = false;

$(document).ready(function(event){
  for(let sentence of sentences){
      var span;
      if(reverse){
        span = $('<span />').addClass("blurry-r").html(sentence);
        reverse = false;
      } else {
        span = $('<span />').addClass("blurry").html(sentence);
        reverse = true;
      }
    //   $("#container").append(span);
  }

  //Rollover1
  $('.blurry-r.r-txt2').mouseenter(function() {
    $('.rollover.r-txt2').addClass('show');
  })

  $('.blurry-r.r-txt2').mouseleave(function() {
    $('.rollover.r-txt2').removeClass('show');
  })

  //Rollover2
  $('.blurry-r.r-txt11').mouseenter(function() {
    $('.rollover.r-txt11').addClass('show');
  })

  $('.blurry-r.r-txt11').mouseleave(function() {
    $('.rollover.r-txt11').removeClass('show');
  })

  //Rollover3
  $('.blurry-r.r-txt5').mouseenter(function() {
    $('.rollover.r-txt5').addClass('show');
  })

  $('.blurry-r.r-txt5').mouseleave(function() {
    $('.rollover.r-txt5').removeClass('show');
  })

  //Rollover4
  $('.blurry-r.r-txt1').mouseenter(function() {
    $('.rollover.r-txt1').addClass('show');
  })

  $('.blurry-r.r-txt1').mouseleave(function() {
    $('.rollover.r-txt1').removeClass('show');
  })
});

$(window).scroll(function(event){
  var st = $(this).scrollTop();
    $(".blurry").css("text-shadow", "0 0 " + blur + "px rgb(79, 143, 233)");
    $(".blurry-r").css("text-shadow", "0 0 " + blur_r + "px rgb(79, 143, 233)");
  console.log(st);
  if (st > lastScrollTop){

    //scrolled down
    if(blur < 100){
      blur += 2;
    }
    if(blur_r > 0){
      blur_r -= 2;
    }

  } else {
  
    //scrolled up
    if(blur_r < 100){
      blur_r += 2;
    }
    if(blur > 0){
      blur -= 2;
    }
  }
  lastScrollTop = st;


});



$(window).resize(function(){
  w = $(window).width();
  h = $(window).height();
});
