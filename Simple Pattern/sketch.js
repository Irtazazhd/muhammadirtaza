let cols, rows;
let cellWidth, cellHeight;

function setup() {
    createCanvas(800, 800); // Larger canvas for more detail
    cols = 20; // Increase number of columns
    rows = 20; // Increase number of rows
    cellWidth = width / cols;
    cellHeight = height / rows;
    noLoop(); // We'll control redrawing manually for animation
}

function draw() {
    background(20); // Dark background for contrast
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = j * cellWidth + cellWidth / 2;
            let y = i * cellHeight + cellHeight / 2;
            let radius = map(sin(frameCount * 0.1 + i + j), -1, 1, cellWidth * 0.3, cellWidth * 0.8);
            let color1 = color(255, 150, 150);
            let color2 = color(150, 150, 255);
            let inter = map(j, 0, cols, 0, 1);
            let c = lerpColor(color1, color2, inter);
            fill(c);
            noStroke();
            ellipse(x, y, radius, radius);
        }
    }
}

// Control the redraw rate for smoother animation
function mouseMoved() {
    redraw();
}