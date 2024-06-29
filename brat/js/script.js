// import ParticleObject from "./ParticleObject.js";
// import Particle from "./Particle.js"
// import MatterVars from "./matterVars.js";

let Engine = Matter.Engine;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;
let World = Matter.World;
let Composites = Matter.Composites;
let MouseConstraint = Matter.MouseConstraint;
let Mouse = Matter.Mouse;
let Constraint = Matter.Constraint;

let engine;
let world;
let mouseConstraint;
let windowMiddle = window.innerWidth / 2;
let buttonNum = 30;
let buttonParticles = {
  x: windowMiddle,
  y: -50,
  w: 420,
  h: 80,
  innerHTML: '',
  static: false,
};

let dimensions = {
  x: 720,
  y: 720
};

// let p5Element = document.getElementById('wrapper');

let ground = {
  x: windowMiddle,
  y: 1030,
  w: 2000,
  h: 100,
};
// let groundDiv;
// let ground;
let newGround;
let inputBox;
let particleSFX;
let deleteSFX;
let particles = [];

// let button;
// let buttonDiv;

// function preload(){
//   particleSFX = loadSound('assets/sounds/particle.wav');
//   deleteSFX = loadSound('assets/sounds/delete.wav');
// }


function setup(){
  let p5Canvas = createCanvas(windowWidth, windowHeight);
  p5Canvas.parent('wrapper');
  background(255);
  p5Canvas.position(0,0);

  particleSFX.amp(0.2);
  deleteSFX.amp(0.1);
}

function draw() {
  ellipseMode(CENTER);
  noStroke();
  // fillHsluv(12,100,55)
 }


window.onload = function() {
  console.log("loaded");

  // matter.js run engine
  engine = Engine.create();
  world = engine.world;
  Runner.run(engine);
  newGround = new Ground(ground.x, ground.y, ground.w, ground.h);
  inputBox = document.getElementById("inputBox");

  // groundDiv = document.getElementById("ground");
  // // buttonDiv = document.getElementById("button1");
  //
  // ground = Bodies.rectangle(groundCoords.x, groundCoords.y, groundCoords.width, groundCoords.height, {
  //   isStatic: true,
  //   restitution: 0,
  //   friction: 1
  // })

  // button = Bodies.rectangle(0,0,30,30, {
  //   restitution: 0,
  //   friction: 1
  // })
  //
  // console.log(ground);
  //
  // World.add(world, ground);
  // World.add(world, button);

  // add mouse control
  // engine.world.gravity.scale = 0.001;

  let mouse = Mouse.create(document.body),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);
  // for (let i = 0; i < buttonNum; i++) {
  // }
  // window.addEventListener('click', addParticles);


  // function addParticles(e) {
  //   particles.push(new Particle(e.clientX, e.clientY, 90, 30, false, particles.length, 'CANCEL'));
  //   // console.log(particles);
  // }


  // particleObjects.push(new ParticleObject(100,200,mVars,engine,world,particleObjects.length))

  // particleObjects.push(new ParticleObject(300, 200, mVars, engine, world, particleObjects.length))
  window.requestAnimationFrame(run);


function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

// function mousePressed() {
//   console.log('pressed');
//   // saveCanvas(cnv, 'myCanvas', 'png')
// }

inputBox.addEventListener('input', updateValue);

function updateValue(event){

  if(this.value !== '' && event.data !== null){

  buttonParticles.innerHTML = this.value;
  particles.push(new Particle(buttonParticles.x, buttonParticles.y, buttonParticles.w, buttonParticles.h, buttonParticles.static, particles.length, buttonParticles.innerHTML));
  particleSFX.play();
}
if(event.data == null){
  deleteSFX.play();
}
}
function run() {
  // let pos = ground.position;
  // let angle = ground.angle;
  //
  // // change the div origin from center to upper left corner like matter
  // groundDiv.style.left = pos.x - groundCoords.width / 2;
  // groundDiv.style.top = pos.y - groundCoords.height / 2;
  // groundDiv.style.width = groundCoords.width;
  // groundDiv.style.height = groundCoords.height;
  // newGround.display();
  let number = Math.random()
  // console.log(number)


  // let inputWidth = document.getElementById('box');
  // buttonParticles.w = inputWidth.style.width;

  number2 = number *100;
  if (number > .98) {
    // particles.push(new Particle(buttonParticles.x + number2, buttonParticles.y, buttonParticles.w, buttonParticles.h, buttonParticles.static, particles.length, buttonParticles.innerHTML));
  };

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    if (particles[i].isOffScreen()) {
      particles[i].removeFromWorld();
      particles.splice(i, 1);
      i--;
    };
  };

  window.requestAnimationFrame(run);
} //run
}
