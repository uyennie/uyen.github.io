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


    //Grey goo toggle
    $('.project.greygoo').click(function() {
        $('.display.greygoo').toggle();
        console.log("display project");
    })

    //Instruction toggle
    $('.project.instruction').click(function() {
        $('.display.instruction').toggle();
        console.log("display project");
    })

});
