$(document).ready(function () {
    console.log("document ready");

    var compassDeg = 0;
    var compassDegAmount = 30;
  
    $(".mapBlock.c").get(0).scrollIntoView();
  
    setTimeout(function () {
      $(".mapBlock").addClass("show");
    }, 400);
  
    $(".btnSW").click(function () {
      $(".mapBlock.se").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });
  
    $(".btnN").click(function () {
      $(".mapBlock.n").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });
  
    $(".btnNW").click(function () {
      $(".mapBlock.nw").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnNE").click(function () {
      $(".mapBlock.ne").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnS").click(function () {
      $(".mapBlock.s").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnE").click(function () {
      $(".mapBlock.e").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnW").click(function () {
      $(".mapBlock.w").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnSW").click(function () {
      $(".mapBlock.sw").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnSE").click(function () {
      $(".mapBlock.se").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    $(".btnC").click(function () {
      $(".mapBlock.c").get(0).scrollIntoView({ behavior: "smooth" });
      compassDeg = compassDeg + compassDegAmount;
      $(".compass").css("transform","rotate(" + compassDeg + "deg)");
    });

    
    $('.centertext.unknown').each(function (index) {
      var characters = $(this).text().split(" ");
        $this = $(this);
        $this.empty();
        $.each(characters, function (i, el) {
          $this.append('<span class="letter">' + el + " " + '</span>');
        });
    });

    $('.centertitle').each(function (index) {
      var characters = $(this).text().split(" ");
        $this = $(this);
        $this.empty();
        $.each(characters, function (i, el) {
          $this.append('<span class="word">' + el + " " + '</span>');
        });
    });

  });
  