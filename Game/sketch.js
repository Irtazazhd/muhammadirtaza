// Space Defender Game

let spaceship;
let asteroids = [];
let lasers = [];
let stars = [];
let score = 0;
let lives = 3;
let gameOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spaceship = new Spaceship();
  for (let i = 0; i < 200; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  if (!gameOver) {
    for (let star of stars) {
      star.update();
      star.show();
    }

    spaceship.update();
    spaceship.show();
    spaceship.edges();

    for (let laser of lasers) {
      laser.update();
      laser.show();
    }

    if (frameCount % 60 === 0) {
      asteroids.push(new Asteroid());
    }

    for (let asteroid of asteroids) {
      asteroid.update();
      asteroid.show();

      if (spaceship.hits(asteroid)) {
        lives--;
        if (lives <= 0) {
          gameOver = true;
        }
      }
    }

    for (let i = lasers.length - 1; i >= 0; i--) {
      for (let j = asteroids.length - 1; j >= 0; j--) {
        if (lasers[i].hits(asteroids[j])) {
          score += 10;
          asteroids.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }

    fill(255);
    textSize(24);
    text("Score: " + score, 10, 30);
    text("Lives: " + lives, 10, 60);
  } else {
    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
    textSize(24);
    text("Press R to Restart", width / 2, height / 2 + 50);
  }
}

function keyPressed() {
  if (key === ' ') {
    lasers.push(new Laser(spaceship.pos.x, spaceship.pos.y));
  } else if (keyCode === RIGHT_ARROW) {
    spaceship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    spaceship.setDir(-1);
  }
  if (gameOver && key === 'r') {
    score = 0;
    lives = 3;
    gameOver = false;
    asteroids = [];
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    spaceship.setDir(0);
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z -= 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(width);
      this.y = random(height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}

class Spaceship {
  constructor() {
    this.pos = createVector(width / 2, height - 60);
    this.r = 20;
    this.dir = 0;
  }

  setDir(dir) {
    this.dir = dir;
  }

  update() {
    this.pos.x += this.dir * 5;
  }

  show() {
    fill(0, 255, 0);
    noStroke();
    triangle(this.pos.x - this.r, this.pos.y + this.r, this.pos.x + this.r, this.pos.y + this.r, this.pos.x, this.pos.y - this.r);
  }

  edges() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
    }
  }

  hits(asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    return (d < this.r + asteroid.r);
  }
}

class Laser {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, -10);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }

  hits(asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    return (d < asteroid.r);
  }
}

class Asteroid {
  constructor() {
    this.pos = createVector(random(width), -20);
    this.vel = createVector(0, random(2, 5));
    this.r = random(20, 50);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    fill(150);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}