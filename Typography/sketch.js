let font;
let fontSize = 70;

function preload() {
  font = loadFont('the.ttf');
}

function setup() {
  createCanvas(800, 400);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(173, 216, 230); // Light blue background color
  fill(0, 0, 128); // Dark blue font color
  let message = "Bath Spa University";
  text(message, width / 2, height / 2);
  
  // Add some effects
  let wave = sin(frameCount * 0.05) * 20;
  let xOffset = cos(frameCount * 0.05) * 10;
  let yOffset = sin(frameCount * 0.05) * 10;
  textSize(fontSize + wave);
  text(message, width / 2 + xOffset, height / 2 + yOffset);
}
