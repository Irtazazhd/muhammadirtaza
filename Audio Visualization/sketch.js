let mic, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    noFill();
}

function draw() {
    background(0, 10);  // Slight trail effect for smoother visualization
    let spectrum = fft.analyze();
    let wave = fft.waveform();
    
    translate(width / 2, height / 2);
    
    // Draw circular spectrum
    stroke(255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        let angle = map(i, 0, spectrum.length, 0, 360);
        let r = map(spectrum[i], 0, 255, 100, width / 2);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
    
    // Draw wave form in the center
    stroke(0, 255, 0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        let angle = map(i, 0, wave.length, 0, 360);
        let r = map(wave[i], -1, 1, 50, 150);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);

    // Background particles
    stroke(random(255), random(255), random(255), 50);
    strokeWeight(1);
    for (let i = 0; i < 200; i++) {
        let x = random(-width / 2, width / 2);
        let y = random(-height / 2, height / 2);
        point(x, y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}