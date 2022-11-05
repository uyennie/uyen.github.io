const state = {
  backend: "webgl",
  maxFaces: 1,
  triangulateMesh: true,
  predictIrises: true
};

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

let model,
  ctx,
  videoWidth,
  videoHeight,
  video,
  canvas;

const VIDEO_SIZE = 500;
const addText = document.getElementById('text');

async function setupCamera() {
  video = document.getElementById("video");

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
    }
  });
  video.srcObject = stream;

  return new Promise(resolve => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

// Example:

console.log(  
  between(10, 200)
)

async function renderPrediction() {
  const predictions = await model.estimateFaces({
    input: video,
    returnTensors: false,
    flipHorizontal: false,
    predictIrises: state.predictIrises
  });
  ctx.drawImage(
    video,
    0,
    0,
    videoWidth,
    videoHeight,
    0,
    0,
    canvas.width,
    canvas.height
  );

  if (predictions.length > 0) {
    predictions.forEach(prediction => {
      const keypoints = prediction.scaledMesh;
      //If blinking is detected; run this;
      if (detectarPiscada(keypoints)) {
        console.log("-----> blink");
        
        var div = document.createElement('div');

        //Array of random content to appear
        //Make more arrays for coordinates here I think (?)
        var classNames = Array('x', 'y', 'z', 'a', 'b', 'c');
        var xCoord = between(0, viewportWidth);
        var yCoord = between(0, viewportHeight);
        var className = classNames[Math.floor(Math.random()*classNames.length)];
        // var xCoord = xCoord[Math.floor(Math.random()*xCoord.length)];
        // var yCoord = yCoord[Math.floor(Math.random()*yCoord.length)];

        div.classList.add(className);
        var text = document.createTextNode('');
        div.appendChild(text);
        document.getElementById("randomBlinks").appendChild(div);
        div.style.position = 'absolute';
        div.style.width = '100%';
        div.style.height = '250px';
        div.style.top = yCoord + 'px';
        div.style.left = xCoord + 'px';
        return null;
      }
    });
    requestAnimationFrame(renderPrediction);
  }
}

async function loadCamera() {
  mainLoaded();
}


async function main() {
  console.log("testing main");


  await tf.setBackend(state.backend);

  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    { maxFaces: state.maxFaces }
  );

  await setupCamera();
  video.play();
  videoWidth = video.videoWidth;
  videoHeight = video.videoHeight;
  video.width = videoWidth;
  video.height = videoHeight;

  canvas = document.getElementById("output");
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  const canvasContainer = document.querySelector(".canvas-wrapper");
  canvasContainer.style = `width: ${videoWidth}px; height: ${videoHeight}px`;

  ctx = canvas.getContext("2d");
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  renderPrediction();
  // document.getElementById('status').innerHTML = ' ';

  setTimeout(loadCamera, 500);
  
}

async function mainLoaded() {
  console.log("testing mainLoaded");

  await tf.setBackend(state.backend);

  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    { maxFaces: state.maxFaces }
  );


  renderPrediction();
  document.getElementById('status').innerHTML = ' ';
}

//Run the main function
main();

// document.getElementById('turnon').addEventListener('click', function () {
//   document.getElementById('status').innerHTML = 'Wait, please .✧*☽';
//   console.log("testing button");
  
// });


var leftEye_l, leftEye_r, leftEye_t, leftEye_b, rightEye_l, rightEye_r, rightEye_t, rightEye_b, aL, bL, earLeft, aR, bR, earRight;

//Detect blinking 
//From stack pls remember to credit the dude!!!!
function detectarPiscada(keypoints) {
  leftEye_l = 263;
  leftEye_r = 362;
  leftEye_t = 386;
  leftEye_b = 374;

  rightEye_l = 133;
  rightEye_r = 33;
  rightEye_t = 159;
  rightEye_b = 145;

  aL = euclidean_dist(
    keypoints[leftEye_t][0],
    keypoints[leftEye_t][1],
    keypoints[leftEye_b][0],
    keypoints[leftEye_b][1]
  );
  bL = euclidean_dist(
    keypoints[leftEye_l][0],
    keypoints[leftEye_l][1],
    keypoints[leftEye_r][0],
    keypoints[leftEye_r][1]
  );
  earLeft = aL / (2 * bL);

  aR = euclidean_dist(
    keypoints[rightEye_t][0],
    keypoints[rightEye_t][1],
    keypoints[rightEye_b][0],
    keypoints[rightEye_b][1]
  );
  bR = euclidean_dist(
    keypoints[rightEye_l][0],
    keypoints[rightEye_l][1],
    keypoints[rightEye_r][0],
    keypoints[rightEye_r][1]
  );
  earRight = aR / (2 * bR);

  console.log("-----> " + earLeft + "\t" + earRight);

  if (earLeft < 0.1 || earRight < 0.1) {
    return true;
  } else {
    return false;
  }
}

function euclidean_dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

