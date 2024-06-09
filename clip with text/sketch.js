let colors = ['#FF4F4F', '#FFD54F', '#4FFF81', '#4FAFFF', '#C54FFF'];
let bgColor;

function setup() {
  createCanvas(400, 200);
  bgColor = color(220);
}

function draw() {
  background(bgColor);
  
  // Animate background color change
  bgColor = lerpColor(bgColor, color(random(255), random(255), random(255)), 0.05);
  
  // Set text properties
  textSize(30);
  textAlign(CENTER, CENTER);
  
  // Display the text with colorful gradient
  drawGradientText("Hello Bathspa", width/20, height/2, colors);
}

function drawGradientText(txt, x, y, gradientColors) {
  let step = width / txt.length;
  for (let i = 0; i < txt.length; i++) {
    let inter = map(i, 0, txt.length - 1, 0, 1);
    let c1 = color(gradientColors[i % gradientColors.length]);
    let c2 = color(gradientColors[(i + 1) % gradientColors.length]);
    let c = lerpColor(c1, c2, inter);
    fill(c);
    text(txt.charAt(i), x + i * step, y);
  }
}
