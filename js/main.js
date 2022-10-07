// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    // Toggle sidebar display information
    $('.title.about').click(function() {
        $('.display.about').toggle();
    })

    $('.title.projects').click(function() {
        $('.display.projects').toggle();
    })

    $('.title.contact').click(function() {
        $('.display.contact').toggle();
    })

    //Toggle project content
    $('.project.greygoo').click(function() {
        $('.display.greygoo').toggle();
        console.log("display project");
    })

});
