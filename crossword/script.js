let paris = 0;
let name = 0;
let surname = 0;
let motion = 0;
let sam = 0;
let music = 0;
let lyon = 0;
let website = 0;

let one = 0;
let deux = 0;
let trois = 0;
let quatre = 0;

const mediaQuery = window.matchMedia("(max-width: 480px)");
console.log(document.querySelectorAll(".h").length);

$(".square").on("click", function () {
  $(this).children().removeClass("h");

  if ($(this).hasClass("paris")) {
    $(this).removeClass("paris");
    paris++;
  }
  if ($(this).hasClass("lyon")) {
    $(this).removeClass("lyon");
    lyon++;
  }
  if ($(this).hasClass("music")) {
    $(this).removeClass("music");
    music++;
  }
  if ($(this).hasClass("surname")) {
    $(this).removeClass("surname");
    surname++;
  }

  if ($(this).hasClass("website")) {
    $(this).removeClass("website");
    website++;
  }
  if ($(this).hasClass("sam")) {
    $(this).removeClass("sam");

    sam++;
  }
  if ($(this).hasClass("name")) {
    $(this).removeClass("name");

    name++;
  }
  if ($(this).hasClass("motion")) {
    $(this).removeClass("motion");
    motion++;
  }

  // setTimeout(() => {
  //   $(this).children().addClass("h");
  // }, 20000);
  if (music === 4) {
    $(".music").addClass("reveal");
  }
  if (lyon === 3) {
    $(".lyon").addClass("reveal");
  }
  if (surname === 3) {
    $(".surname").addClass("reveal");
    console.log(one);
  }

  if (sam === 1) {
    $(".sam").addClass("reveal");
  }
  if (name === 4) {
    $(".name").addClass("reveal");
  }

  if (mediaQuery.matches) {
    if (paris === 4) {
      $(".paris").addClass("reveal");
    }
    if (website === 5) {
      $(".website").addClass("reveal");
    }
  } else {
    if (paris === 3) {
      $(".paris").addClass("reveal");
    }
    if (website === 7) {
      $(".website").addClass("reveal");
    }
  }
  if (motion === 5) {
    $(".motion").addClass("reveal");
  }

  if (one === 2) {
    console.log("one");
    $(".one").addClass("reveal");
  }

  if (document.querySelectorAll(".h").length === 227) {
    $(".one").addClass("reveal");
  }
  if (document.querySelectorAll(".h").length === 220) {
    $(".two").addClass("reveal");
  }
  if (document.querySelectorAll(".h").length === 213) {
    $(".three").addClass("reveal");
  }

  if (document.querySelectorAll(".h").length === 206) {
    // $("footer div:nth-child(3) ul li").addClass("reveal");
    $(".four").addClass("reveal");

    setTimeout(() => {
      location.reload();
    }, 30000);
  }
});
