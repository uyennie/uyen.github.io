$(document).ready(function () {
    console.log("document ready");
  
    $(".mapBlock.c").get(0).scrollIntoView();
  
    setTimeout(function () {
      $(".mapBlock").addClass("show");
    }, 400);
  
    $(".btnSW").click(function () {
      $(".mapBlock.se").get(0).scrollIntoView({ behavior: "smooth" });
      $(".compass").css("transform-origin","center center");
      $(".compass").css("transform","rotate(45deg)");
      $(".compass").css("transition","0.5s");
    });
  
    $(".btnN").click(function () {
      $(".mapBlock.n").get(0).scrollIntoView({ behavior: "smooth" });
    });
  
    $(".btnNW").click(function () {
      $(".mapBlock.nw").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnNE").click(function () {
      $(".mapBlock.ne").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnS").click(function () {
      $(".mapBlock.s").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnE").click(function () {
      $(".mapBlock.e").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnW").click(function () {
      $(".mapBlock.w").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnSW").click(function () {
      $(".mapBlock.sw").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnSE").click(function () {
      $(".mapBlock.se").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $(".btnC").click(function () {
      $(".mapBlock.c").get(0).scrollIntoView({ behavior: "smooth" });
    });
  });
  