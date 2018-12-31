class Bird {
  constructor() {
    this.x = 100;
    this.y = height/3;

    this.birdWidth = 60;
    this.birdHeight = 45;

    this.gravity = 0.7;
    this.lift = 18;
    this.velocity = 0;
  }

  updatePosition() {
    this.velocity = this.velocity + this.gravity;
    this.y = this.y + this.velocity;

    if (this.y >= height-this.birdHeight) {
      this.y = height-this.birdHeight;
      this.velocity = 10;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  jump() {
    this.velocity = this.velocity - this.lift;
  }

  show() {
    noStroke();
    image(birdImage, this.x, this.y, this.birdWidth, this.birdHeight);
  }
}
