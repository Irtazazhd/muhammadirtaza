let carX = 0;

function setup() {
  createCanvas(400, 400); // Set the canvas size to 400x400 pixels
}

function draw() {
  backgroundSky();
  drawSun();
  drawMountains();
  drawRoad();
  drawCar(carX, height - 50); // Adjust the car's y-position
  carX += 3; // Adjust the car's speed for better visibility on a smaller canvas
  if (carX > width) {
    carX = -100; // Reset car position
  }
}

function backgroundSky() {
  // Draw gradient sky
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(135, 206, 235), color(70, 130, 180), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawSun() {
  // Draw sun
  noStroke();
  fill(255, 204, 0);
  ellipse(80, 80, 50, 50);
}

function drawMountains() {
  // Draw mountains touching the road boundary
  fill(34, 139, 34);
  triangle(50, height - 50, 150, height - 200, 250, height - 50);
  triangle(150, height - 50, 300, height - 300, 450, height - 50);
  triangle(250, height - 50, 400, height - 200, 550, height - 50);
}

function drawRoad() {
  // Draw road
  fill(50);
  rect(0, height - 50, width, 50);
  // Draw road lines
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < width; i += 30) {
    line(i, height - 25, i + 15, height - 25);
  }
}

function drawCar(x, y) {
  // Draw car body
  fill(255, 0, 0);
  rect(x, y - 15, 70, 15);
  rect(x + 14, y - 30, 42, 30);
  // Draw windows
  fill(0);
  rect(x + 20, y - 22, 12, 12);
  rect(x + 38, y - 22, 12, 12);
  // Draw wheels
  fill(0);
  ellipse(x + 17, y, 14, 14);
  ellipse(x + 53, y, 14, 14);
}