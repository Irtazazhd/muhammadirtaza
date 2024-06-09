let data = []; // Array to store random data
let barWidth;
let maxData;

function setup() {
  createCanvas(400, 300);
  
  // Generate random data
  for (let i = 0; i < 15; i++) {
    data.push(random(10, height - 30)); // Random values between 10 and height - 30
  }
  
  maxData = max(data); // Find the maximum value in the data
  
  // Calculate the width of each bar
  barWidth = width / data.length;
  
  // Add mousePressed event for interaction
  mousePressed();
}

function draw() {
  background(0); // Black background color
  
  // Draw bars for each data point
  for (let i = 0; i < data.length; i++) {
    let x = i * barWidth;
    let barHeight = map(data[i], 0, maxData, 0, height - 50); // Map data values to fit within canvas height
    
    // Create gradient fill for bars
    let c1 = color(255, 0, 0); // Start color (red)
    let c2 = color(0, 0, 255); // End color (blue)
    let c = lerpColor(c1, c2, i / data.length); // Interpolate between start and end colors
    
    // Draw the bar with gradient fill
    noStroke();
    fill(c);
    rect(x, height - barHeight - 20, barWidth, barHeight);
    
    // Display data value below each bar
    fill(255);
    textAlign(CENTER);
    text(round(data[i]), x + barWidth / 2, height - 5); // Adjusted position
  }
}

function mousePressed() {
  // Add animation to the data when mouse is pressed
  for (let i = 0; i < data.length; i++) {
    data[i] = random(10, height - 30);
  }
}
