// sketch.js

let img; // Variable to hold the loaded image

function preload() {
  // Load an image from a URL or local path
  img = loadImage('4.jpeg'); 
}

function setup() {
  createCanvas(800, 800); // Create a canvas of 800x800 pixels
  noLoop(); // Prevent draw() from looping
}

function draw() {
  background(255); // Set a white background
  img.loadPixels(); // Load the image's pixel data
  
  let pointDensity = 10; // The distance between points (smaller number = more points)
  let pointSize = 6; // Diameter of each point
  
  // Loop through the image by skipping pixels according to pointDensity
  for (let y = 0; y < img.height; y += pointDensity) {
    for (let x = 0; x < img.width; x += pointDensity) {
      // Get the index for the current pixel
      let index = (x + y * img.width) * 4;

      // Get the red, green, and blue values
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      // Set the color for the point
      fill(r, g, b);
      noStroke();
      
      // Draw the ellipse at (x, y) with the specified size
      ellipse(x, y, pointSize, pointSize);
    }
  }
}
