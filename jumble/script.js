//--------- Change this string to change the text on the site ------------------

let phrase = "Sending all my love to you.";

//-----------------------------------------------------------------------


let viewportPercentage = .15;

//define viewport width/height
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let contact = document.getElementById("contact");


let letters = phrase.split("");

let textArea = document.getElementById("text");

let letterIDs = [];
let IDDefiner = [];
let randomMultipliers = [];
let randomCoordinates = [];

let randomXY = [];

let bool = true;

let xSpeed = 2.5;
let ySpeed = 2;


//---------------------- Define circle position ----------------------

let circle = document.getElementById("circle");

// This bullshit gets half the height of the circle
function stripPx(element, property){
    style = window.getComputedStyle(element);
    p = style.getPropertyValue(property);
    z = p.split('');
    j = z.pop();
    k = z.pop();
    o = z.join("");
    return parseInt(p);
}

let circleRadius = stripPx(circle, 'height')/2;

function defineCircleCoordinates(minW, maxW, minH, maxH) { 
    circleX = Math.floor(Math.random() * (maxW - minW + 1) + minW);
    circleY = Math.floor(Math.random() * (maxH - minH + 1) + minH);
}

defineCircleCoordinates((windowWidth * viewportPercentage) , (windowWidth * (1-viewportPercentage) - circle.clientWidth) , (windowHeight * viewportPercentage) , (windowHeight * (1-viewportPercentage) - circle.clientHeight));


circle.style.left = circleX - circleRadius + 'px';
circle.style.top = circleY - circleRadius + 'px';



// Generate IDs for each letter in the string
function generateIDs(){
    for (var i=0; i<letters.length; i++){
        letterIDs.push(String(("letter" + i)))
      }
}


// Generate spans with unique IDs and letters from the phrase
let wordMarker = "word0";
let marker = 1;

function generateLetters(){
    for (var i=0; i<letters.length; i++){
        if (letters[i] == " "){
            wordMarker = "word" + marker;
            marker++;
        }

        textArea.innerHTML += "<span id='" + letterIDs[i] + "' class='" + wordMarker + "'>" + letters[i] + "</span>";
      }
}

// Create an array with a unique ID for each item in the letters array
function defineIDs(){
    for (var i=0; i<letters.length; i++){
        IDDefiner[i] = document.getElementById(letterIDs[i]);
        IDDefiner[i].style.position = "relative";
    }
}

//Generate the numbers that multiply the position of the letters
function generateRandomMultipliers(){
    for (var i=0; i<letters.length; i++){
        randomMultipliers.push(Math.random() * xSpeed - xSpeed/2);
        randomMultipliers.push(Math.random() * ySpeed - ySpeed/2);
        randomMultipliers.push(Math.random() * 2 - 1);
        randomMultipliers.push(Math.random() * 1 - .5);
    }
}

// Generate random coordinates for the initial position of the letters
function generateRandomCoordinates(){
    for (var i=0; i<letters.length; i++){
        randomCoordinates.push(Math.floor(Math.random() * (windowWidth - 20)));
        randomCoordinates.push(Math.floor(Math.random() * (windowHeight - 20)));
    }
}

// Generate whether the X Y controllers will be switched
function generateRandomXY(){
    for (var i=0; i<letters.length; i++){
        randomXY.push(Math.random() * 2);
    }
}

// Assign coordinates to the letters
function setCoordinates(element, random1, random2, random3, random4, circleX, circleY, randomXYFunction){
    if (randomXYFunction>1){
        reverseSigns();
        element.style.top = circleX * random1 + circleY * random3 + 'px';
        element.style.left = circleY * random2 + circleX * random4 + 'px';
        
    } else {
        element.style.top = circleY * random1 + circleX * random3 + 'px';
        element.style.left = circleX * random2 + circleY * random4 + 'px';
    }
}




let q=0;
function reverseSigns(element, x , y , random1, random2, random3, random4,){
    if (storedX > 0 && x < 0 || storedX < 0 && x > 0){
        storedX = x;


    if (storedY > 0 && y < 0 || storedY < 0 && y > 0){
        
        storedY = y;

    for (var i=0; i<randomCoordinates.length; i++){
        randomCoordinates[i] = -randomCoordinates[i]; 
    }
}
    }
}

generateIDs();
generateLetters();
defineIDs();
generateRandomCoordinates();
generateRandomMultipliers();
generateRandomXY()

let storedX = 0;
let storedY = 0;

function changeStoredX(x){
    if (storedX > 0 && x < 0 || storedX < 0 && x > 0){
        reverseSigns();
        storedX = x;
    }
}

window.onmousemove = function(e){
    if(bool==true){
        if(e.clientX > circleX){
            x = e.clientX - circleX;
            storedX = x;
        } else if(e.clientX <= circleX){
            x = circleX - e.clientX;
            storedX = x;
        } 

        if(e.clientY>circleY){
            y = e.clientY - circleY;
            storedY = y;
        } else if(e.clientY <= circleY){
            y = circleY - e.clientY;
            storedY = y;
        } 

        for (var i=0; i<(letters.length); i++){
            setCoordinates(IDDefiner[i], randomMultipliers[i*4], randomMultipliers[(i*4)+1],randomMultipliers[(i*4)+2],randomMultipliers[(i*2)+3], x, y, randomXY[i]);
        } 
    }
}


// ------------ Onclick events for the green button ------------------


function reveal(element) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
}

// Operate the circle as a switch onclick
function killSwitch(){
    if(bool == true){
        bool = false;
        circle.style.borderRadius = "50%";
        circle.style.backgroundColor = "brown";
        reveal(contact);
    } else {
        bool = true;
        circle.style.backgroundColor = "olive";
        circle.style.borderRadius = "0%";


    }
}

// Used in the killSwitch function to remove the circle div
function removeElement(elementId) {
    // Removes an element from the document
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}



// WHEN THE CIRCLE IS CLICKED, THIS HAPPENS

circle.onclick = function(){killSwitch();};



if ( 'ontouchstart' in window ) {
	document.documentElement.classList.add( 'touch' );
	textArea.style.opacity = 1;
} else {
	window.addEventListener( 'mousemove', function show () {
		textArea.style.opacity = 1;
		window.removeEventListener( 'mousemove', show );
    })
}
    






// ------------ Animate JS console ------------------

let helloArray = [];

for (let i = 0; i < document.getElementById('hello').getElementsByTagName('span').length; i++) {
	let thisText = String(document.getElementById('hello').getElementsByTagName('span')[i].textContent);
    helloArray.push(thisText);
}

let eq = 0;
let interval = setInterval(function(){
	if (eq < helloArray.length) {
		console.log('%c ' + helloArray[eq], 'color: blue');
		eq++;
	} else {
		console.log('');
		eq = 0;
	}
}, 200);

