var w;
var h;
var count = 0;
var hue = 0;
var imgcount = 0;

var str = "* In 2021 I tried to crash my car off the M3. There is a nightmare I have every night. My hands are on the wheel and they are frozen stuck. I am on a ledge of a building and I can’t bear to look up. My heart is beating and there is only one voice I can hear. The clouds are bright white, the sky stretches out to the horizon. It tells me to drive, drive off, to speed up. I want to stay here as a human being. For one moment I listen to this voice. Who can still look at the sky in search of a little reassurance. And I imagine how good I’d feel if I followed it. Even if, on some days, it is the hardest thing to be. I don’t know why I didn’t end up following it in the end, maybe because I was scared. After all, it is all that I'll take with me. To this day, I think I wish I followed the voice, I don’t know what’s here for me anymore. I hope we still can hold onto ourselves and the things that still exist when everything goes.";

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
