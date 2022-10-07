//FUNCTIONS

//Rotate scene
const rotateScene = function (event) {
    rx -= event.originalEvent.movementY / 2;
    ry += event.originalEvent.movementX / 2;
    //$scene.css('transform', 'rotateX(' + rx/2 + 'deg) rotateY(' + ry/2 + 'deg)');
    $scene.css('--rx', rx/2+'deg');
    
    
    //Restrict the rotation
    if (ry < -55) ry = -55
    if (ry > 55) ry = 55
    
    if (rx < -60) rx = -60
    if (rx > -15) rx = -15
    
    $scene.css('--ry', ry + 'deg');
    $noodle1.css('--ry', -(ry) + 'deg');
    $noodle2.css('--ry', -(ry) + 'deg');
    $utensils.css('--ry', -(ry) + 'deg');
    $pot.css('--ry', -(ry) + 'deg');
    $bowls.css('--ry', -(ry) + 'deg');
    $chef.css('--ry', -(ry) + 'deg');
    $message.css('--ry', -(ry) + 'deg');
}


//Night mode make visible
const makeVisible = function(){
    
    
    if ( $('.background').css('opacity') == 0 ) {
        $('.background').css('opacity', 1);
        var z = document.getElementById('bgm');
        z.play();
    } else {
        $('.background').css('opacity',0);
        var z = document.getElementById('bgm');
        z.pause();
    }
      
    if ( $('.flag1').css('opacity') == 1 ) {
        $('.flag1').css('opacity', 0);
    } else {
        $('.flag1').css('opacity',1);
    }
    
    if ( $('.flag2').css('opacity') == 1 ) {
        $('.flag2').css('opacity', 0);
    } else {
        $('.flag2').css('opacity',1);
    }
    
    if ( $('.flag3').css('opacity') == 1 ) {
        $('.flag3').css('opacity', 0);
    } else {
        $('.flag3').css('opacity',1);
    }
    
    if ( $('.flag4').css('opacity') == 1 ) {
        $('.flag4').css('opacity', 0);
    } else {
        $('.flag4').css('opacity',1);
    }
    
    if ( $('.noodle2').css('opacity') == 0 ) {
        $('.noodle2').css('opacity', 1);
    } else {
        $('.noodle2').css('opacity',0);
    }
    
    if ( $('.pot').css('opacity') == 0 ) {
        $('.pot').css('opacity', 1);
    } else {
        $('.pot').css('opacity',0);
    }
    
    if ( $('.utensils').css('opacity') == 0 ) {
        $('.utensils').css('opacity', 1);
    } else {
        $('.utensils').css('opacity',0);
    }
    
    if ( $('.bowls').css('opacity') == 0 ) {
        $('.bowls').css('opacity', 1);
    } else {
        $('.bowls').css('opacity',0);
    }
    
    if ( $('.noodle1').css('opacity') == 1 ) {
        $('.noodle1').css('opacity', 0);
    } 
    
    if ( $('.chef').css('opacity') == 0 ) {
        $('.chef').css('opacity', 1);
    } else {
        $('.chef').css('opacity',0);
    }
};

//Change noodle bowl every click 
const slideshowNoodle = function () {
    if ( $noodle1.attr('src') == 'images/gifs/noodles-slideshow1.gif' ) {
        //console.log('YOOOOOOO WASSUP');
        $noodle1.attr('src', 'images/gifs/noodles-slideshow2.gif');
    } else if ( $noodle1.attr('src') == 'images/gifs/noodles-slideshow2.gif' ) {
        $noodle1.attr('src', 'images/gifs/noodles-slideshow3.gif');
    } else if ( $noodle1.attr('src') == 'images/gifs/noodles-slideshow3.gif' ) {
        $noodle1.attr('src', 'images/gifs/noodles-slideshow1.gif');
    }
};

//Change bowl every click
const slideshowBowls = function () {
    if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow1.GIF' ) {
        //console.log('YOOOOOOO WASSUP');
        $bowls.attr('src', 'images/gifs/bowls-slideshow2.GIF');
    } else if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow2.GIF' ) {
        $bowls.attr('src', 'images/gifs/bowls-slideshow3.GIF');
    } else if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow3.GIF' ) {
        $bowls.attr('src', 'images/gifs/bowls-slideshow4.GIF');
    } else if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow4.GIF' ) {
        $bowls.attr('src', 'images/gifs/bowls-slideshow5.GIF');
    } else if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow5.GIF' ) {
        $bowls.attr('src', 'images/gifs/bowls-slideshow6.GIF');
    } else if ( $bowls.attr('src') == 'images/gifs/bowls-slideshow6.GIF' ) {
        $bowls.attr('src', 'images/gifs/bowls-slideshow1.GIF');
    }
};

// Play slurping noise after every click on the noodles
function playSlurp() {
    var x = document.getElementById('slurp');
    x.play();
}

// Play boiling water noise after every click on the pot
function playBoil() {
    var y = document.getElementById('boil');
    y.play();
}

//Starts listening to user's speech
const listen = function( event ) {
    if ( $('.message').css('opacity') == 0 ) {
        $('.message').css('opacity', 1);
    } else {
        $('.message').css('opacity', 0);
    }
        
    if ( $('.noodle1').css('opacity') == 1 ) {
        $('.noodle1').css('opacity', 0);
    }
        
    console.log( 'listening...' )
    speech.start(); //starts listening process
}

//Processing User speech
const processResult = function( event ) {
    console.log( event.results );
    let results = event.results[0];
    let speechText; //placeholder where u can assemble a message
    let message = new SpeechSynthesisUtterance(); 
    
    
    for ( let result of results ) {
        console.log( result.transcript );
        if ( commands.includes( result.transcript ) ) speechText = result.transcript;
    }
    
    
    if ( speechText ) {
        $('.message').css('opacity', 0);
        $('.noodle1').css('opacity', 1);
    } else {
        message.text = 'What was your order again?';
    }
}


//ASSIGN VARIABLES
let $body = $('body');
let $scene = $('.scene');
let $sign = $('.sign');
let $noodle1 = $('.noodle1 .front');
let $noodle2 = $('.noodle2 .front');
let $utensils = $('.utensils .front');
let $pot = $('.pot .front');
let $bowls = $('.bowls .front');
let $chef = $('.chef .front');
let $message = $('.message .front');
let $sit = $('.sitbtn');
let $stand = $('.standbtn');
    

//SPEECH/MICROPHONE VARIABLES
let speech = new webkitSpeechRecognition();
let commands = [ 'noodles', 'ramen', 'noodle', 'needle', 'needles', 'raman', 'Ramin', 'noodls', 'noodl', 'Roman' ];

speech.continuous = false;
speech.interimResults = false;
speech.language = 'en-US';
speech.maxAlternatives = 3;

//grab the button you want to click on
document.querySelector( '#speechButton' ).addEventListener( 'click', listen );
speech.addEventListener( 'result', processResult );



let rx = -15;
let ry = -30;



//INITIALISE 
$body.on('mousedown', function () { $body.on( 'mousemove', rotateScene ) });
$body.on('mouseup', function () { $body.off( 'mousemove', rotateScene ) });
$sign.flip({ trigger: 'click' });
$sign.on('click', makeVisible);
$('.noodle1').on('click', slideshowNoodle);
$('.bowls').on('click', slideshowBowls);

$('img').prop('draggable', false);