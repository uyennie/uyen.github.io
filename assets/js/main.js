$(document).ready(function(){
  $(document).scroll(function() {
    if ($(document).scrollTop()>=105) {
      $(".lowercase").fadeOut();
    } else {
      $(".lowercase").fadeIn();
    }
  })
}); 