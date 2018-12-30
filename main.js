let bird;
let pipes = [];
let bgImage;
let birdImage;
let gameIsRunning = true;

function setup() {
  createCanvas(windowHeight/2, windowHeight);
  bgImage = loadImage("assets/bg.jpg");
  birdImage = loadImage("assets/bird.png");

  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(bgImage);

  if (frameCount % 100 === 0 && gameIsRunning === true) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].updatePosition();
    pipes[i].show();

    if (pipes[i].hits(bird)) {
      gameOver();
    }

    if (pipes[i].offScreen()) {
      pipes.shift();
    }
  }

  bird.updatePosition();
  bird.show();
}

function keyPressed() {
  if (this.key = ' ' && gameIsRunning === true) {
    bird.jump();
  }
}

function gameOver() {
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].speed = 0;
  }
  gameIsRunning = false;

  if (bird.y >= height-bird.birdHeight) {
    fill(80, 130, 30);
    stroke(40, 30, 36);
    rect(width/6, height-height/3, width-(width/6)*2, 80, 16);

    textSize(26);
    fill(255);
    noStroke();
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("RESET GAME", width/2, height-height/3+40);
  }
}

// Reset Game
function mousePressed() {
  if (mouseX > width/6 && mouseX < width-width/6 && mouseY > height-height/3 && mouseY < height-height/3+80 && gameIsRunning === false) {
    pipes = [];
    bird = new Bird();
    gameIsRunning = true;
  }
}
