let sourceImg;
let maskedImg;
let maskGraphics;

function preload() {
  sourceImg = loadImage('6.jpeg'); // Replace with your source image path
}

function setup() {
  createCanvas(800, 600);
  
  // Create a new graphics buffer for the mask
  maskGraphics = createGraphics(sourceImg.width, sourceImg.height);
  
  // Draw a circular mask in the graphics buffer
  maskGraphics.ellipse(sourceImg.width / 2, sourceImg.height / 2, 300, 300);
  
  // Create a copy of the source image to apply the mask
  maskedImg = sourceImg.get();
  
  // Apply the mask to the copy
  maskedImg.mask(maskGraphics);
}

function draw() {
  background(255);
  
  // Display the masked image
  image(maskedImg, 0, 0);
}
