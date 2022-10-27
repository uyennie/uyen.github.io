const state = {
  backend: "webgl",
  maxFaces: 1,
  triangulateMesh: true,
  predictIrises: true
};

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
      document.body.style.background = 'var(--color-bg)';
      //If blink is detected
      if (detectarPiscada(keypoints)) {
        console.log("-----> blink");
        // addText.insertAdjacentText('beforeend', ' CONTENT');
        var div = document.createElement('div');

        //Array of random content to appear
        var classNames = Array('x', 'y', 'z', 'a', 'b', 'c');
        var className = classNames[Math.floor(Math.random()*classNames.length)];

        div.classList.add(className);
        var text = document.createTextNode('');
        div.appendChild(text);
        document.getElementById("randomBlinks").appendChild(div)
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
  document.getElementById('status').innerHTML = ' ';

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

main();

// document.getElementById('turnon').addEventListener('click', function () {
//   document.getElementById('status').innerHTML = 'Wait, please .✧*☽';
//   console.log("testing button");
  
// });



// function toggle(button) {
//     if(button.value=="OFF") {
//         button.value="ON"
//         button.innerHTML="ON"
//     } else if(button.value=="ON") {
//         button.value="OFF"
//         button.innerHTML="OFF"
//     }
// }

var leftEye_l, leftEye_r, leftEye_t, leftEye_b, rightEye_l, rightEye_r, rightEye_t, rightEye_b, aL, bL, earLeft, aR, bR, earRight;

//Detect blinking
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

