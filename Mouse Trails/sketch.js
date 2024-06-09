let trail = [];
let maxTrailLength = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); // Use HSB color mode for smooth gradients
  noStroke();
}

function draw() {
  background(0, 10); // Slightly transparent background for trailing effect

  // Add the current mouse position to the trail array
  trail.push({ x: mouseX, y: mouseY });

  // Limit the trail length
  if (trail.length > maxTrailLength) {
    trail.shift();
  }

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let size = map(i, 0, trail.length, 30, 5); // Size decreases for older points
    let alpha = map(i, 0, trail.length, 100, 0); // Alpha decreases for older points
    let hue = map(i, 0, trail.length, 0, 360); // Color hue changes along the trail
    fill(hue, 80, 100, alpha); // HSB color with transparency
    ellipse(pos.x, pos.y, size, size); // Draw the ellipse
  }

  // Add sparkle particles
  if (frameCount % 2 === 0) {
    let angle = random(TWO_PI);
    let length = random(10, 50);
    let x = mouseX + cos(angle) * length;
    let y = mouseY + sin(angle) * length;
    let particleSize = random(5, 15);
    let particleHue = random(0, 360);
    fill(particleHue, 80, 100, 50);
    ellipse(x, y, particleSize, particleSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}