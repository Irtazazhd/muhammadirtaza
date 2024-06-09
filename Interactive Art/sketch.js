let buildingColors = ['#FFB300', '#E91E63', '#2196F3', '#4CAF50', '#9C27B0'];
let currentColorIndex = 0;
let ripples = [];
let sunX, sunY;
let cloudX1, cloudX2;

function setup() {
  createCanvas(800, 600);
  sunX = width - 100;
  sunY = 100;
  cloudX1 = -200;
  cloudX2 = width;
}

function draw() {
  // Draw the background with a gradient sky
  drawGradientSky();

  // Draw sun
  drawSun();

  // Draw clouds
  drawCloud(cloudX1, 100);
  drawCloud(cloudX2, 150);

  // Move clouds
  cloudX1 += 0.5;
  cloudX2 -= 0.3;
  if (cloudX1 > width + 200) cloudX1 = -200;
  if (cloudX2 < -200) cloudX2 = width + 200;

  // Draw buildings with gradient colors
  drawBuildings();

  // Draw ripples
  drawRipples();

  // Draw text
  drawText();
}

function drawGradientSky() {
  for (let y = 0; y < height / 2; y++) {
    let inter = map(y, 0, height / 2, 0, 1);
    let c = lerpColor(color(135, 206, 235), color(255, 223, 186), inter);
    stroke(c);
    line(0, y, width, y);
  }
  fill(34, 139, 34);
  noStroke();
  rect(0, height / 2, width, height / 2);
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(sunX, sunY, 100, 100);
}

function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 100, 60);
  ellipse(x + 50, y - 20, 80, 60);
  ellipse(x + 100, y, 100, 60);
}

function drawBuildings() {
  let gradient;
  
  // Building 1 with gradient
  gradient = drawingContext.createLinearGradient(0, height / 2 - 150, 0, height / 2);
  gradient.addColorStop(0, buildingColors[currentColorIndex]);
  gradient.addColorStop(1, '#000');
  drawingContext.fillStyle = gradient;
  rect(100, height / 2 - 150, 150, 150);
  drawWindows(100, height / 2 - 150, 150, 150);

  // Building 2 with gradient
  gradient = drawingContext.createLinearGradient(0, height / 2 - 100, 0, height / 2);
  gradient.addColorStop(0, buildingColors[(currentColorIndex + 1) % buildingColors.length]);
  gradient.addColorStop(1, '#000');
  drawingContext.fillStyle = gradient;
  rect(300, height / 2 - 100, 200, 100);
  drawWindows(300, height / 2 - 100, 200, 100);

  // Building 3 with gradient
  gradient = drawingContext.createLinearGradient(0, height / 2 - 200, 0, height / 2);
  gradient.addColorStop(0, buildingColors[(currentColorIndex + 2) % buildingColors.length]);
  gradient.addColorStop(1, '#000');
  drawingContext.fillStyle = gradient;
  rect(550, height / 2 - 200, 100, 200);
  drawWindows(550, height / 2 - 200, 100, 200);
}

function drawWindows(x, y, w, h) {
  fill(255, 255, 255, 150);
  for (let i = x + 10; i < x + w - 10; i += 30) {
    for (let j = y + 10; j < y + h - 10; j += 30) {
      rect(i, j, 20, 20);
    }
  }
}

function drawRipples() {
  for (let i = ripples.length - 1; i >= 0; i--) {
    let ripple = ripples[i];
    noFill();
    stroke(255, 255, 255, ripple.alpha);
    ellipse(ripple.x, ripple.y, ripple.diameter);
    ripple.diameter += 2;
    ripple.alpha -= 3;
    if (ripple.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}

function drawText() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text('Bath Spa University', width / 2, 50);
  textSize(16);
  text('Click to change building colors\nMove the mouse to create ripples', width / 2, 100);
}

function mousePressed() {
  // Change building colors on mouse click
  currentColorIndex = (currentColorIndex + 1) % buildingColors.length;
}

function mouseMoved() {
  // Add a new ripple at the mouse position
  let newRipple = {
    x: mouseX,
    y: mouseY,
    diameter: 10,
    alpha: 255
  };
  ripples.push(newRipple);
}

function keyPressed() {
  // You can add more interactivity with keys if needed
  // Example: change ripple effect speed, add more buildings, etc.
}

