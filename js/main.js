// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    //////////////////////////
    //Toggle sidebar content//
    //////////////////////////

    // About name toggle
    $('.title.name').click(function() {
        $('.display.about').toggle();
    })

    // Projects list toggle
    $('.title.projects').click(function() {
        $('.display.projects').toggle();
    })

    //Contact toggle
    $('.title.contact').click(function() {
        $('.display.contact').toggle();
    })







    //////////////////////////
    //Toggle project content//
    //////////////////////////

  //hide all the divs except the one being toggled
  $('.project').click(function (context) {
    console.log("gyrados");
    const clickedItem = context.currentTarget.classList.value.split(' ').at(-1);

    if ($(`.display.${clickedItem}`).is(':hidden')) {
      $('.project').map((_index, project) => {
        //   This gets the last word in the project className string
        const currentItem = project.classList.value.split(' ').at(-1);
        console.log(currentItem);
        if (
          currentItem !== clickedItem &&
          !$(`.display.${currentItem}`).is('hidden')
        ) {
          $(`.display.${currentItem}`).hide();
        } else if (currentItem === clickedItem) {
          $(`.display.${currentItem}`).show();
        }
      });
    } else {
      $(`.display.${clickedItem}`).hide();
    }
  });
});
