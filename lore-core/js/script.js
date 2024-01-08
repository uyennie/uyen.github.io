$(document).ready(function () {

    $(".main-home").click(function () {
        $(".section-1").removeClass("open");
        $(".section-1").addClass("closed");
        $(".section-1").removeClass("pushed");
        $(".section-2").addClass("closed");
        $(".section-2").removeClass("pushed");
        $(".section-2").removeClass("open");
        $(".section-3").addClass("closed");
        $(".section-3").removeClass("open");
    });

    $(".about-tab-trigger").click(function () {
        $(".home").addClass("shrink");
        $(".about-tab").addClass("show");
        $(".about-tab-trigger").addClass("none");
    });

    $(".about-tab-close").click(function () {
        $(".home").removeClass("shrink");
        $(".about-tab").removeClass("show");
        $(".about-tab-trigger").removeClass("none");
    });

// DESIGNER SECTION

    $(".section-1-tab").click(function () {
        $(".section-1").toggleClass("open");
        $(".section-1").removeClass("closed");
        $(".section-1").removeClass("pushed");
        $(".section-2").addClass("closed");
        $(".section-2").removeClass("pushed");
        $(".section-2").removeClass("open");
        $(".section-3").addClass("closed");
        $(".section-3").removeClass("open");
    });

        // DESIGNER NAME DOTS

            $(".melis").hover(function () {
                $(".dot.melis").toggleClass("dot-hover");
            });
            $(".gene").hover(function () {
                $(".dot.gene").toggleClass("dot-hover");
            });
            $(".harold").hover(function () {
                $(".dot.harold").toggleClass("dot-hover");
            });
            $(".tim").hover(function () {
                $(".dot.tim").toggleClass("dot-hover");
            });
            $(".mieke").hover(function () {
                $(".dot.mieke").toggleClass("dot-hover");
            });

        // INTERVIEWS

            $(".melis").click(function () {
                $(".interview.me-i").addClass("show");
            });
            $(".escape.me-i").click(function () {
                $(".interview.me-i").removeClass("show");
            });

            $(".gene").click(function () {
                $(".interview.g-i").addClass("show");
            });
            $(".escape.g-i").click(function () {
                $(".interview.g-i").removeClass("show");
            });

            $(".harold").click(function () {
                $(".interview.h-i").addClass("show");
            });
            $(".escape.h-i").click(function () {
                $(".interview.h-i").removeClass("show");
            });

            $(".tim").click(function () {
                $(".interview.t-i").addClass("show");
            });
            $(".escape.t-i").click(function () {
                $(".interview.t-i").removeClass("show");
            });

            $(".mieke").click(function () {
                $(".interview.mi-i").addClass("show");
            });
            $(".escape.mi-i").click(function () {
                $(".interview.mi-i").removeClass("show");
            });

// QUESTION SECTION    

    $(".section-2-tab").click(function () {
        $(".section-2").toggleClass("open");
        $(".section-2").removeClass("closed");
        $(".section-2").removeClass("pushed");
        $(".section-1").addClass("pushed");
        $(".section-1").removeClass("closed");
        $(".section-1").removeClass("open");
        $(".section-3").addClass("closed");
        $(".section-3").removeClass("open");
    });

        // OPEN QUESTIONS
        
            $(".q1").hover(function () {
                $(".question-spacer.qs1").toggleClass("grow");
            });
            $(".q1").click(function () {
                $(".question-spacer.qs1").toggleClass("stay");
                $(".question-dot.qs1").toggleClass("show-dot");
            });
            $(".q2").hover(function () {
                $(".question-spacer.qs2").toggleClass("grow");
            });
            $(".q2").click(function () {
                $(".question-spacer.qs2").toggleClass("stay");
                $(".question-dot.qs2").toggleClass("show-dot");
            });
            $(".q3").hover(function () {
                $(".question-spacer.qs3").toggleClass("grow");
            });
            $(".q3").click(function () {
                $(".question-spacer.qs3").toggleClass("stay");
                $(".question-dot.qs3").toggleClass("show-dot");
            });
            $(".q4").hover(function () {
                $(".question-spacer.qs4").toggleClass("grow");
            });
            $(".q4").click(function () {
                $(".question-spacer.qs4").toggleClass("stay");
                $(".question-dot.qs4").toggleClass("show-dot");
            });
            $(".q5").hover(function () {
                $(".question-spacer.qs5").toggleClass("grow");
            });
            $(".q5").click(function () {
                $(".question-spacer.qs5").toggleClass("stay");
                $(".question-dot.qs5").toggleClass("show-dot");
            });
            $(".q6").hover(function () {
                $(".question-spacer.qs6").toggleClass("grow");
            });
            $(".q6").click(function () {
                $(".question-spacer.qs6").toggleClass("stay");
                $(".question-dot.qs6").toggleClass("show-dot");
            });
            $(".q7").hover(function () {
                $(".question-spacer.qs7").toggleClass("grow");
            });
            $(".q7").click(function () {
                $(".question-spacer.qs7").toggleClass("stay");
                $(".question-dot.qs7").toggleClass("show-dot");
            });
            $(".q8").hover(function () {
                $(".question-spacer.qs8").toggleClass("grow");
            });
            $(".q8").click(function () {
                $(".question-spacer.qs8").toggleClass("stay");
                $(".question-dot.qs8").toggleClass("show-dot");
            });
            $(".q9").hover(function () {
                $(".question-spacer.qs9").toggleClass("grow");
            });
            $(".q9").click(function () {
                $(".question-spacer.qs9").toggleClass("stay");
                $(".question-dot.qs9").toggleClass("show-dot");
            });


// LIBRARY SECTION    

    $(".section-3-tab").click(function () {
        $(".section-3").toggleClass("open");
        $(".section-3").removeClass("closed");
        $(".section-1").addClass("pushed");
        $(".section-1").removeClass("closed");
        $(".section-1").removeClass("open");
        $(".section-2").addClass("pushed");
        $(".section-2").removeClass("closed");
        $(".section-2").removeClass("open");
    });

});

$(document).ready(function () {

    $(".question-trigger.q1").click(function () {
        $(".question-content.q1").toggleClass("open");
        $(".arrow.q1").toggleClass("rotate");
    });
    $(".question-trigger.q2").click(function () {
        $(".question-content.q2").toggleClass("open");
        $(".arrow.q2").toggleClass("rotate");
    });
    $(".question-trigger.q3").click(function () {
        $(".question-content.q3").toggleClass("open");
        $(".arrow.q3").toggleClass("rotate");
    });
    $(".question-trigger.q4").click(function () {
        $(".question-content.q4").toggleClass("open");
        $(".arrow.q4").toggleClass("rotate");
    });
    $(".question-trigger.q5").click(function () {
        $(".question-content.q5").toggleClass("open");
        $(".arrow.q5").toggleClass("rotate");
    });
    $(".question-trigger.q6").click(function () {
        $(".question-content.q6").toggleClass("open");
        $(".arrow.q6").toggleClass("rotate");
    });
    $(".question-trigger.q7").click(function () {
        $(".question-content.q7").toggleClass("open");
        $(".arrow.q7").toggleClass("rotate");
    });
    $(".question-trigger.q8").click(function () {
        $(".question-content.q8").toggleClass("open");
        $(".arrow.q8").toggleClass("rotate");
    });
    $(".question-trigger.q9").click(function () {
        $(".question-content.q9").toggleClass("open");
        $(".arrow.q9").toggleClass("rotate");
    });
    $(".question-trigger.q10").click(function () {
        $(".question-content.q10").toggleClass("open");
        $(".arrow.q10").toggleClass("rotate");
    });

});


$(document).ready(function () {

    $(".cover.b1").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").removeClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    });  

    $(".cover.b2").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").removeClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 

    $(".cover.b3").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").removeClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b4").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").removeClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b5").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").removeClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b6").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").removeClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b7").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").removeClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b8").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").removeClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".video.b9").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").removeClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b10").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").removeClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".video.b11").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").removeClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b12").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").removeClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 

    $(".cover.b13").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").removeClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b14").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").removeClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b15").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").removeClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b16").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").removeClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b17").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").removeClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".video-s.b18").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").removeClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b19").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").removeClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
        $(".cover.b20").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").removeClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b21").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").removeClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b22").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").removeClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b23").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").removeClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b24").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").removeClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".video-s.b25").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").removeClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".cover.b26").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").removeClass("hidden");
        $(".book-wrap.b27").addClass("hidden");
    }); 
    $(".video-s.b27").click(function () {
        $(".library-right").scrollTop(0);
        $(".book-wrap.b1").addClass("hidden");
        $(".book-wrap.b2").addClass("hidden");
        $(".book-wrap.b3").addClass("hidden");
        $(".book-wrap.b4").addClass("hidden");
        $(".book-wrap.b5").addClass("hidden");
        $(".book-wrap.b6").addClass("hidden");
        $(".book-wrap.b7").addClass("hidden");
        $(".book-wrap.b8").addClass("hidden");
        $(".book-wrap.b9").addClass("hidden");
        $(".book-wrap.b10").addClass("hidden");
        $(".book-wrap.b11").addClass("hidden");
        $(".book-wrap.b12").addClass("hidden");
        $(".book-wrap.b13").addClass("hidden");
        $(".book-wrap.b14").addClass("hidden");
        $(".book-wrap.b15").addClass("hidden");
        $(".book-wrap.b16").addClass("hidden");
        $(".book-wrap.b17").addClass("hidden");
        $(".book-wrap.b18").addClass("hidden");
        $(".book-wrap.b19").addClass("hidden");
        $(".book-wrap.b20").addClass("hidden");
        $(".book-wrap.b21").addClass("hidden");
        $(".book-wrap.b22").addClass("hidden");
        $(".book-wrap.b23").addClass("hidden");
        $(".book-wrap.b24").addClass("hidden");
        $(".book-wrap.b25").addClass("hidden");
        $(".book-wrap.b26").addClass("hidden");
        $(".book-wrap.b27").removeClass("hidden");
    }); 

    


});