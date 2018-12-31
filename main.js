let bird;
let pipes = [];
let bgImage;
let birdImage;
let resetButton;
let instructions;
let score;
let birdIsAlive = true;
let waitingForStart = true;

function setup() {
  createCanvas(windowHeight/2, windowHeight);
  bgImage = loadImage("assets/bg.jpg");
  birdImage = loadImage("assets/bird.png");

  bird = new Bird();
  resetButton = new ResetButton();
  instructions = new Instructions();
  score = new Score();
}

function draw() {
  background(bgImage);

  if (waitingForStart === true) {
    bird.show();
    instructions.show();
  }
  else {
    if (frameCount % 100 === 0 && birdIsAlive === true) {
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

    score.update();
    score.show();
  }
}

function keyPressed() {
  if (this.key = ' ' && birdIsAlive === true) {
    bird.jump();
  }

  if (this.key = ' ' && waitingForStart === true) {
    waitingForStart = false;
  }
}

function gameOver() {
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].speed = 0;
  }
  birdIsAlive = false;

  resetButton.show();
}

// Reset Game
function mousePressed() {
  if (resetButton.clickedOn() && birdIsAlive === false) {
    pipes = [];
    bird = new Bird();
    score.text = 0;
    birdIsAlive = true;
    waitingForStart = true;
  }
}
