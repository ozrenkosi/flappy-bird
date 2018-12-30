class Pipe {
  constructor() {
    this.x = width;

    this.pipeWidth = 80;
    this.spacingBetween = 200;
    this.topHeight = floor(map(random(height), 0, height, height/8, height-this.spacingBetween-80));

    this.speed = 3;
  }

  updatePosition() {
    this.x = this.x - this.speed;
  }

  offScreen() {
    if (this.x < 0-this.pipeWidth) {
      return true;
    } else {
      return false;
    }
  }

  hits(bird) {
    if (bird.y+bird.birdHeight/2 < this.topHeight || bird.y+bird.birdHeight/2 > this.topHeight+this.spacingBetween) {
      if (bird.x+bird.birdWidth/2 > this.x && bird.x+bird.birdWidth/2 < this.x+this.pipeWidth) {
        return true;
      } else {
        return false;
      }
    }
  }

  show() {
    stroke(83, 55, 69);
    strokeWeight(4);
    fill(113, 187, 41);

    rect(this.x, 0, this.pipeWidth, this.topHeight);
    rect(this.x, this.topHeight+this.spacingBetween, this.pipeWidth, height-this.topHeight-this.spacingBetween)
  }
}
