const BACKGROUND_COLOR = 255;
const PEN_COLOR = 0;
const ERASER_SIZE = 20;
const PEN_SIZE = 15;
let nn;

document.getElementById('clean').addEventListener("click", () => background(BACKGROUND_COLOR));

function preload() {
  nn = ml5.imageClassifier("DoodleNet");
}

function setup() {
  canvas = createCanvas(300, 300);
  background(BACKGROUND_COLOR);
  strokeWeight(PEN_SIZE);
}

function draw() {}

function mouseDragged() {
  if (keyIsPressed && keyCode == SHIFT) {
    strokeWeight(ERASER_SIZE);
    stroke(BACKGROUND_COLOR);
  } else {
    strokeWeight([PEN_SIZE]);
    stroke(PEN_COLOR);
  }
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseReleased() {
  nn.classify(canvas, finish);
}
function finish(err, result) {
    console.log(err)
    const msg = result[0].label + ', ' + result[1].label
  document
    .getElementById("nnResult").innerHTML=msg
}
