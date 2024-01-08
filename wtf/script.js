
$(document).ready(function () {
    let target = $("#bottom")[0];
    $("#top").scroll(function() {
        target.scrollTop = this.scrollTop;
    });
});