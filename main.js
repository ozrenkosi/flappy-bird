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
    gameIsRunning = false;
  }
}
