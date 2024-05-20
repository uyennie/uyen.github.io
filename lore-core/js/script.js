$(".heading").click(function() {
    if($(this).parent().hasClass('active')){
      console.log("clicked active")
      $(".heading").parent().removeClass("collapse");
      $(".heading").parent().removeClass("active");
    }else{
      $(".heading").parent().addClass("collapse");
      $(".heading").parent().removeClass("active");
      $(this).parent().removeClass("collapse");  
      $(this).parent().addClass("active");  
    }
    
});


$(function() {

   $("body").mousewheel(function(event, delta) {

      // this.scrollLeft -= (delta * 30);
     // console.log(delta)
     $('.active .scroll-area')[0].scrollLeft -= (delta);
    
      // event.preventDefault();

   });

});