class Pipe {
  constructor() {
    this.x = width;

    this.pipeWidth = 80;
    this.spacingBetween = 150;
    this.topHeight = floor(map(random(gameAreaHeight), 0, gameAreaHeight, gameAreaHeight/8, gameAreaHeight-this.spacingBetween-gameAreaHeight/8));

    this.speed = 3;
  }

  updatePosition() {
    this.x = this.x - this.speed;
  }

  offScreen() {
    if (this.x < 0-this.pipeWidth) {
      return true;
    }
    else {
      return false;
    }
  }

  hits(bird) {
    if (bird.y+bird.birdHeight/2 < this.topHeight || bird.y+bird.birdHeight/2 > this.topHeight+this.spacingBetween) {
      if (bird.x+bird.birdWidth/2 > this.x && bird.x+bird.birdWidth/2 < this.x+this.pipeWidth) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  show() {
    stroke(83, 55, 69);
    strokeWeight(4);
    fill(113, 187, 41);

    rect(this.x, 0-2, this.pipeWidth, this.topHeight+2, 0, 0, 5, 5);
    rect(this.x, this.topHeight+this.spacingBetween, this.pipeWidth, gameAreaHeight-this.topHeight-this.spacingBetween, 5, 5, 0, 0);

    rect(this.x-5, this.topHeight-40, this.pipeWidth+10, 40, 5, 5, 0, 0);
    rect(this.x-5, this.topHeight+this.spacingBetween, this.pipeWidth+10, 40, 0, 0, 5, 5);
  }
}
