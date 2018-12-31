class Bird {
  constructor() {
    this.x = 80;
    this.y = 200;

    this.birdWidth = 60;
    this.birdHeight = 45;

    this.gravity = 0.7;
    this.velocity = 5;
  }

  updatePosition() {
    this.velocity = this.velocity + this.gravity;
    this.y = this.y + this.velocity;

    if (this.y >= gameAreaHeight-this.birdHeight) {
      this.y = gameAreaHeight-this.birdHeight;
      this.velocity = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  touchesFloor() {
    if (this.y >= gameAreaHeight-this.birdHeight) {
      return true;
    }
    else {
      return false;
    }
  }

  jump() {
    this.velocity = this.velocity - map(this.velocity, -12, 20, 6, 26);
  }

  show() {
    noStroke();
    image(birdImage, this.x, this.y, this.birdWidth, this.birdHeight);
  }
}
