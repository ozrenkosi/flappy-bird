let bird;
let pipes = [];
let bgImage;
let birdImage;
let resetButton;
let instructions;
let score;
let flySound;
let hitSound;
let pointSound;
let swooshSound;
let birdIsAlive = true;
let waitingForStart = true;
let gameAreaHeight = 547;

function preload() {
  bgImage = loadImage("assets/bg.jpg");
  birdImage = loadImage("assets/bird.png");
  flySound = loadSound("assets/sfx_wing.mp3");
  hitSound = loadSound("assets/sfx_hit.mp3");
  pointSound = loadSound("assets/sfx_point.mp3");
  swooshSound = loadSound("assets/sfx_swooshing.mp3");
}

function setup() {
  createCanvas(350, 700);

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

      if (pipes[i].hits(bird) || bird.touchesFloor()) {
        gameOver();
      }

      if (pipes[i].offScreen()) {
        // Deletes pipe
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
    flySound.play();
  }

  if (this.key = ' ' && waitingForStart === true) {
    waitingForStart = false;
  }
}

function gameOver() {
  if(birdIsAlive === true) {
    hitSound.play();
    swooshSound.play();
  }
  birdIsAlive = false;

  resetButton.show();

  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].speed = 0;
  }
}

function mousePressed() {
  // Reset Game
  if (resetButton.clickedOn() && birdIsAlive === false) {
    pipes = [];
    bird = new Bird();
    score.text = 0;
    birdIsAlive = true;
    waitingForStart = true;
  }
}
