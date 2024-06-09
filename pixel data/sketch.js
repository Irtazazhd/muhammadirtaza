// sketch.js

let img; // Variable to hold the loaded image

function preload() {
  // Load an image from a URL or local path
  img = loadImage('4.jpeg'); 
}

function setup() {
  createCanvas(480, 420); // Create a canvas of 800x800 pixels
  noLoop(); // Prevent draw() from looping
}

function draw() {
  image(img, 0, 0, width, height); // Draw the image on the canvas

  // Load the image's pixel data into the pixels array
  loadPixels();

  // Loop through each pixel
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Calculate the index for the pixels array
      let index = (x + y * width) * 4;

      // Get the red, green, and blue values
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      // Convert to grayscale (average of RGB values)
      let gray = (r + g + b) / 3;

      // Set the red, green, and blue values to the grayscale value
      pixels[index] = gray;
      pixels[index + 1] = gray;
      pixels[index + 2] = gray;
    }
  }

  // Update the canvas with the new pixel data
  updatePixels();
}
