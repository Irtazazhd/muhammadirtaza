let stars = [];
let alienY = 0;
let alienDirection = 1;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    stars.push({ x: random(width), y: random(height), size: random(1, 3) });
  }
}

function draw() {
  backgroundSpace();
  drawAlien(width / 2, height / 2 + alienY);
  moveAlien();
}

function backgroundSpace() {
  // Draw moving stars
  background(0);
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    ellipse(stars[i].x, stars[i].y, stars[i].size);
    stars[i].y += 2;
    if (stars[i].y > height) {
      stars[i].y = 0;
      stars[i].x = random(width);
    }
  }
}

function drawAlien(x, y) {
  // Draw alien head
  fill(0, 255, 0);
  ellipse(x, y, 60, 80);
  
  // Draw alien eyes
  fill(0);
  ellipse(x - 15, y - 10, 10, 20);
  ellipse(x + 15, y - 10, 10, 20);
  
  // Draw alien body
  fill(0, 255, 0);
  rect(x - 30, y + 40, 60, 80, 20);
  
  // Draw alien arms
  rect(x - 50, y + 50, 20, 60, 20);
  rect(x + 30, y + 50, 20, 60, 20);
  
  // Draw alien legs
  rect(x - 20, y + 120, 15, 50, 20);
  rect(x + 5, y + 120, 15, 50, 20);
}

function moveAlien() {
  alienY += alienDirection * 2;
  if (alienY > 20 || alienY < -20) {
    alienDirection *= -1;
  }
}